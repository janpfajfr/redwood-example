import {
  customers,
  customer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from './customers'

describe('customers', () => {
  scenario('returns all customers', async (scenario) => {
    const result = await customers()

    expect(result.length).toEqual(Object.keys(scenario.customer).length)
  })

  scenario('returns a single customer', async (scenario) => {
    const result = await customer({ id: scenario.customer.one.id })

    expect(result).toEqual(scenario.customer.one)
  })

  scenario('creates a customer', async (scenario) => {
    const result = await createCustomer({
      input: { name: 'String', email: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.email).toEqual('String')
  })

  scenario('updates a customer', async (scenario) => {
    const original = await customer({ id: scenario.customer.one.id })
    const result = await updateCustomer({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a customer', async (scenario) => {
    const original = await deleteCustomer({ id: scenario.customer.one.id })
    const result = await customer({ id: original.id })

    expect(result).toEqual(null)
  })
})
