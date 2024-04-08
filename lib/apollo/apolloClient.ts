import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getAuthToken } from "../types/helpers";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:6060/graphql",
    connectionParams: () => ({
      authToken: `Bearer ${getAuthToken()}` || "",
      authorization: `Bearer ${getAuthToken()}` || "",
    }),
  })
);
const httpLink = new HttpLink({
  uri: "http://localhost:6060/graphql",
  headers: {
    authToken: `Bearer ${getAuthToken()}` || "",
    authorization: `Bearer ${getAuthToken()}` || "",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `Graphql error: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.log(`Network error: ${networkError}`);
  } else {
    console.log("No network error");
  }
});

const authMiddleWare = new ApolloLink((operation, forward) => {
  const token = getAuthToken();
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });
  return forward(operation);
});

export const client = new ApolloClient({
  link: from([authMiddleWare, errorLink, splitLink]),
  cache: new InMemoryCache(),
});
