import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.APP_CONFIG_GRAPHQL_SCHEMA,
  documents: [
    "src/gql/fragments/**/*.graphql",
    "src/gql/mutations/**/*.graphql",
    "src/gql/queries/**/*.graphql",
  ],
  generates: {
    "./src/gql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
