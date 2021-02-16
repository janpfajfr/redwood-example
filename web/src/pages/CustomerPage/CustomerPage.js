import CustomersLayout from 'src/layouts/CustomersLayout'
import CustomerCell from 'src/components/CustomerCell'

const CustomerPage = ({ id }) => {
  return (
    <CustomersLayout>
      <CustomerCell id={id} />
    </CustomersLayout>
  )
}

export default CustomerPage
