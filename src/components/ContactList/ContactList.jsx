import React from 'react'
import css from './ContactList.module.css'

const ContactList = ({contacts, deleteBtn}) => {
  return (
    <div>
      <ul className={css.ul}>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id} className={css.li}>
                  {name}: {number}
                  <button className={css.button} type='button' onClick={() => { deleteBtn(id) }}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList