import CustomersLayout from 'src/layouts/CustomersLayout'
import EditCustomerCell from 'src/components/EditCustomerCell'

const EditCustomerPage = ({ id }) => {
  return (
    <CustomersLayout>
      <EditCustomerCell id={id} />
    </CustomersLayout>
  )
}

export default EditCustomerPage
