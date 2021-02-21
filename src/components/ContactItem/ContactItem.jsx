import s from './ContactItem.module.css';
export default function ContactItem({ name, number, onDeleteContact }) {
  return (
    <li className={s.listItem}>
      <div className={s.fullName}>
        <span>{name}: </span>
        <span>{number}</span>
      </div>
      <button type="button" className={s.button} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
}
