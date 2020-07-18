import { GraphQLClient } from "graphql-request";

interface DatoCMSRequest {
  query: string;
  variables?: { [key: string]: any };
  preview?: boolean;
}

export function datoCMSRequest({ query, variables, preview }: DatoCMSRequest) {
  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_READONLY_KEY}`,
    },
  });
  return client.request(query, variables);
}
