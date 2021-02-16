export const schema = gql`
  type Customer {
    id: Int!
    name: String!
    email: String!
  }

  type Query {
    customers: [Customer!]!
    customer(id: Int!): Customer
  }

  input CreateCustomerInput {
    name: String!
    email: String!
  }

  input UpdateCustomerInput {
    name: String
    email: String
  }

  type Mutation {
    createCustomer(input: CreateCustomerInput!): Customer!
    updateCustomer(id: Int!, input: UpdateCustomerInput!): Customer!
    deleteCustomer(id: Int!): Customer!
  }
`
