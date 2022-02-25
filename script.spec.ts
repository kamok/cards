import { Card, Suite } from './script';

it('works', () => {
  expect(new Card('2', Suite.Diamonds)).toBeTruthy();
});