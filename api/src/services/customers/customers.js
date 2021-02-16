import { db } from 'src/lib/db'

export const customers = () => {
  return db.customer.findMany()
}

export const customer = ({ id }) => {
  return db.customer.findUnique({
    where: { id },
  })
}

export const createCustomer = ({ input }) => {
  return db.customer.create({
    data: input,
  })
}

export const updateCustomer = ({ id, input }) => {
  return db.customer.update({
    data: input,
    where: { id },
  })
}

export const deleteCustomer = ({ id }) => {
  return db.customer.delete({
    where: { id },
  })
}
