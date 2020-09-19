import { GraphQLClient } from "graphql-request";

interface DatoCMSRequest {
  query: string;
  variables?: { [key: string]: any };
  preview?: boolean;
}

const socialMediaLinksFragment = `
fragment SocialMedia on Query {
	socialMedia: socialinfo {
    twitter
    facebook
    instagram
    youtube
    linkedin
    pinterest
  }
}`;

export function datoCMSRequest({ query, variables, preview }: DatoCMSRequest) {
  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_READONLY_KEY}`,
    },
  });
  const graphqlQuery = `${query}\n${socialMediaLinksFragment}`;
  return client.request(graphqlQuery, variables);
}
