import { render } from '@redwoodjs/testing'

import CustomersPage from './CustomersPage'

describe('CustomersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomersPage />)
    }).not.toThrow()
  })
})
