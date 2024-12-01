import { getSdk } from "./generated";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  "https://directus.documents.us.nbaghi.com/graphql",
);

const sdk = getSdk(client);
export default sdk;
