import { Customer, CustomerId } from '../customer.entity';

test('deve criar um cliente válido', () => {
  const customer = Customer.create({
    name: 'João da Silva',
    cpf: '99346413050',
  });

  expect(customer).toBeInstanceOf(Customer);
  expect(customer.id).toBeDefined();
  expect(customer.id).toBeInstanceOf(CustomerId);
  expect(customer.name).toBe('João da Silva');
  expect(customer.cpf.value).toBe('99346413050');
});
