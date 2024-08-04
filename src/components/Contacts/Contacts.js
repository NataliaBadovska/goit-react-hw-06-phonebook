import css from './Contacts.module.css';
import { useDispatch } from 'react-redux'
import { deleteContacts } from 'components/redux/contactsSlice'

function Contacts({ options }) {
    const dispatch = useDispatch();
    // console.log(options)

     return (
         <ul className={css.listContact}>
            
                {options.map(contact =>
                    <li key={contact.id} className={css.contact}>
                        <div className={css.info}>{contact.name}: {contact.number}</div>
                        <button type="button" className={css.button} onClick={()=>dispatch(deleteContacts(contact.id))}>Delete</button>
                    </li>)} 
               
            </ul>
        )
}

export default Contacts;