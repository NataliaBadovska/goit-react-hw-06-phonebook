import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid';
import { addContacts } from 'components/redux/contactsSlice'
import Phonebook from './Phonebook';
import Section from './Section';
import Contacts from "./Contacts";
import Filter from "./Filter";

function App() {

    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

      console.log(contacts)

    const verifyingIdentityOfNames = (name) => {
        const normalizedName = name.toLowerCase();
    
        for (const contact of contacts) {
            if (contact.name.toLowerCase() === normalizedName)
            {
                alert(name + " is already in contacts.");
                return true;
            }
        }
    }

    const addNewContact = ({ name, number }) => {
        const contact = {
            name,
            number,
            id: nanoid()
        }  
        
        dispatch(addContacts(contact))
    }
    
    const getVerifiedContact = ({ name, number }) => {
        !verifyingIdentityOfNames(name) && addNewContact({ name, number });
    }
    
    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        if (contacts === undefined || !contacts.length) {
            return
        }
       
        return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
    }
    
    const visibleContacts = getVisibleContacts();
    
    return (
       <>
         <Section title="Phonebook">
           <Phonebook onSubmit={getVerifiedContact} contacts={contacts} />
         </Section >

         <Section title="Contacts">
                 <Filter/>
             {visibleContacts !== undefined && <Contacts options={visibleContacts} />}   
         </Section>
         
       </>
    )
}

export default App;