import { Name } from './name.vo';

test('deve criar um nome válido', () => {
  const name = new Name('Nome de Teste');
  expect(name.value).toBeTruthy();
});
