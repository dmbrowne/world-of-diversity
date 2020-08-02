import { NowResponse } from "@vercel/node";

export default async function exit(_: any, res: NowResponse) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: "/" });
  res.end();
}
