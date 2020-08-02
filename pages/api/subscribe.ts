import { NowRequest, NowResponse } from "@vercel/node";
import MD5 from "crypto-js/md5";

const defaultMailchimpListId = "195eda857f";

const checkUserSubscription = async (userID: string, { auth }: { auth: string }) => {
  try {
    const { status, ok } = await fetch(process.env.MAILCHIMP_API_URL + `/3.0/lists/${defaultMailchimpListId}/members/${userID}`, {
      headers: new Headers({
        Authorization: auth,
      }),
    });
    console.log({ status });
    return !!ok;
  } catch (e) {
    return false;
  }
};

export default async function (req: NowRequest, res: NowResponse) {
  const userId = MD5((req.body.email as string).toLowerCase()).toString();
  const basicAuth = `Basic ${Buffer.from(`apikey:${process.env.MAILCHIMP_API_KEY}`, "utf-8").toString("base64")}`;
  const isExistingUser = await checkUserSubscription(userId, { auth: basicAuth });

  if (!!isExistingUser) {
    res.status(201).json({ success: true });
    return;
  }

  try {
    const response = await fetch(process.env.MAILCHIMP_API_URL + `/3.0/lists/${defaultMailchimpListId}/members/`, {
      method: "POST",
      headers: new Headers({
        Authorization: basicAuth,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email_address: req.body.email,
        status: "subscribed",
        merge_fields: {
          MERGE1: req.body.firstName,
          MERGE2: req.body.lastName,
        },
      }),
    });
    res.status(response.ok ? 200 : 400).json({ success: !!response.ok });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
