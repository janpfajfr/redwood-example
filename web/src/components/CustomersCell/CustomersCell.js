export const QUERY = gql`
  query CustomersQuery {
    customers {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ customers }) => {
  return JSON.stringify(customers)
}
