import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";

const client = new GraphQLClient(
  process.env.APP_CONFIG_GRAPHQL_SYSTEM_SCHEMA ?? "",
);

const systemSdk = getSdk(client);
export default systemSdk;
