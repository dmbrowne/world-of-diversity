import { NextApiRequest, NextApiResponse } from "next";

const resolvePath = (slug: string) => {
  switch (slug) {
    case "homepage":
      return "/";
    case "books_page":
      return "/bookstore";
    case "about_me":
      return "/about";
    default:
      return `/${slug}`;
  }
};
export default (req: NextApiRequest, res: NextApiResponse) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.DATOCMS_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: typeof req.query?.slug === "string" ? resolvePath(req.query.slug) : "/" });
  res.end();
};
