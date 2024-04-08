import { ApolloProvider } from "@apollo/client";
import { client } from "../../../lib/apollo/apolloClient";

type IProps = {
  children: React.ReactNode;
};

const WithApolloProvider: React.FC<IProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApolloProvider;
