import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ChatRoom = {
  __typename?: 'ChatRoom';
  chatRooms?: Maybe<ChatRoomSearch>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerId: Scalars['String']['output'];
};


export type ChatRoomChatRoomsArgs = {
  input: ChatRoomPaginationInput;
};

export type ChatRoomInvitationToken = {
  __typename?: 'ChatRoomInvitationToken';
  chatRoomId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type ChatRoomMember = {
  __typename?: 'ChatRoomMember';
  chatRoomId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type ChatRoomPaginationInput = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ChatRoomSearch = {
  __typename?: 'ChatRoomSearch';
  item: Array<ChatRoom>;
  meta: Meta;
};

export type CreateChatRoomInput = {
  name: Scalars['String']['input'];
};

export type CreateChatRoomInvitationTokenInput = {
  chatRoomId: Scalars['String']['input'];
};

export type CreateChatRoomMemberInput = {
  chatRoomId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateMessageInput = {
  content: Scalars['String']['input'];
  receiverId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
};

export type CreateMessageSubscriptionInput = {
  receiverId: Scalars['String']['input'];
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  messages?: Maybe<Array<Message>>;
  receiverId?: Maybe<Scalars['String']['output']>;
  senderId?: Maybe<Scalars['String']['output']>;
};


export type MessageMessagesArgs = {
  receiverId: Scalars['String']['input'];
};

export type Meta = {
  __typename?: 'Meta';
  limit: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptInvitation: ChatRoomMember;
  creatChatRoomInvitationToken: ChatRoomInvitationToken;
  createChatRoom: ChatRoom;
  createChatRoomMember: ChatRoomMember;
  createMessage: Message;
};


export type MutationAcceptInvitationArgs = {
  input: TokenInput;
};


export type MutationCreatChatRoomInvitationTokenArgs = {
  input: CreateChatRoomInvitationTokenInput;
};


export type MutationCreateChatRoomArgs = {
  input: CreateChatRoomInput;
};


export type MutationCreateChatRoomMemberArgs = {
  input: CreateChatRoomMemberInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};

export type Query = {
  __typename?: 'Query';
  chatRoomQuery?: Maybe<ChatRoom>;
  messageQuery?: Maybe<Message>;
  userQuery: User;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageCreated: Message;
};


export type SubscriptionMessageCreatedArgs = {
  receiverId: CreateMessageSubscriptionInput;
};

export type TokenInput = {
  token: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<User>>;
};

export type CreateMessageMutationVariables = Exact<{
  input: CreateMessageInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', content: string, id: string, senderId?: string | null, receiverId?: string | null } };

export type GetMessagesQueryVariables = Exact<{
  receiverId: Scalars['String']['input'];
}>;


export type GetMessagesQuery = { __typename?: 'Query', messageQuery?: { __typename?: 'Message', messages?: Array<{ __typename?: 'Message', id: string, content: string, receiverId?: string | null, senderId?: string | null }> | null } | null };

export type MessageSubscriptionSubscriptionVariables = Exact<{
  input: CreateMessageSubscriptionInput;
}>;


export type MessageSubscriptionSubscription = { __typename?: 'Subscription', messageCreated: { __typename?: 'Message', content: string, id: string, receiverId?: string | null, senderId?: string | null } };

export type ChatRoomsQueryVariables = Exact<{
  input: ChatRoomPaginationInput;
}>;


export type ChatRoomsQuery = { __typename?: 'Query', chatRoomQuery?: { __typename?: 'ChatRoom', chatRooms?: { __typename?: 'ChatRoomSearch', item: Array<{ __typename?: 'ChatRoom', id: string, name: string, ownerId: string }>, meta: { __typename?: 'Meta', total: number, page: number, limit: number } } | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', userQuery: { __typename?: 'User', email: string, id: string } };


export const CreateMessageDocument = gql`
    mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    content
    id
    senderId
    receiverId
  }
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const GetMessagesDocument = gql`
    query GetMessages($receiverId: String!) {
  messageQuery {
    messages(receiverId: $receiverId) {
      id
      content
      receiverId
      senderId
    }
  }
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      receiverId: // value for 'receiverId'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables> & ({ variables: GetMessagesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export function useGetMessagesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesSuspenseQueryHookResult = ReturnType<typeof useGetMessagesSuspenseQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const MessageSubscriptionDocument = gql`
    subscription MessageSubscription($input: CreateMessageSubscriptionInput!) {
  messageCreated(receiverId: $input) {
    content
    id
    receiverId
    senderId
  }
}
    `;

/**
 * __useMessageSubscriptionSubscription__
 *
 * To run a query within a React component, call `useMessageSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageSubscriptionSubscription({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMessageSubscriptionSubscription(baseOptions: Apollo.SubscriptionHookOptions<MessageSubscriptionSubscription, MessageSubscriptionSubscriptionVariables> & ({ variables: MessageSubscriptionSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessageSubscriptionSubscription, MessageSubscriptionSubscriptionVariables>(MessageSubscriptionDocument, options);
      }
export type MessageSubscriptionSubscriptionHookResult = ReturnType<typeof useMessageSubscriptionSubscription>;
export type MessageSubscriptionSubscriptionResult = Apollo.SubscriptionResult<MessageSubscriptionSubscription>;
export const ChatRoomsDocument = gql`
    query ChatRooms($input: ChatRoomPaginationInput!) {
  chatRoomQuery {
    chatRooms(input: $input) {
      item {
        id
        name
        ownerId
      }
      meta {
        total
        page
        limit
      }
    }
  }
}
    `;

/**
 * __useChatRoomsQuery__
 *
 * To run a query within a React component, call `useChatRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatRoomsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChatRoomsQuery(baseOptions: Apollo.QueryHookOptions<ChatRoomsQuery, ChatRoomsQueryVariables> & ({ variables: ChatRoomsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatRoomsQuery, ChatRoomsQueryVariables>(ChatRoomsDocument, options);
      }
export function useChatRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatRoomsQuery, ChatRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatRoomsQuery, ChatRoomsQueryVariables>(ChatRoomsDocument, options);
        }
export function useChatRoomsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ChatRoomsQuery, ChatRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ChatRoomsQuery, ChatRoomsQueryVariables>(ChatRoomsDocument, options);
        }
export type ChatRoomsQueryHookResult = ReturnType<typeof useChatRoomsQuery>;
export type ChatRoomsLazyQueryHookResult = ReturnType<typeof useChatRoomsLazyQuery>;
export type ChatRoomsSuspenseQueryHookResult = ReturnType<typeof useChatRoomsSuspenseQuery>;
export type ChatRoomsQueryResult = Apollo.QueryResult<ChatRoomsQuery, ChatRoomsQueryVariables>;
export const UsersDocument = gql`
    query Users {
  userQuery {
    email
    id
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export function useUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<typeof useUsersSuspenseQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;