import ContactItem from 'components/ContactItem';

export default function ContactList({ visible }) {
  return (
    <ul>
      {visible().map(el => (
        <ContactItem name={el.name} number={el.number} key={el.id} />
      ))}
    </ul>
  );
}
