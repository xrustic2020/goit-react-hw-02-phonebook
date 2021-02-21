import ContactItem from 'components/ContactItem';
import s from './ContactList.module.css';

export default function ContactList({ visible, deleteContactItem }) {
  return (
    <ul className={s.container}>
      {visible().map(el => (
        <ContactItem
          name={el.name}
          number={el.number}
          onDeleteContact={() => deleteContactItem(el.id)}
          key={el.id}
        />
      ))}
    </ul>
  );
}
