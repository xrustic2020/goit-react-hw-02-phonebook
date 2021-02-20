import { v4 as uuid } from 'uuid';

export default function addContact(name, number) {
  return {
    id: uuid().slice(30),
    name,
    number,
  };
}
