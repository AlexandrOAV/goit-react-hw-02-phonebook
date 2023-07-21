
const ContactList = ({ filterValue, contacts, deleteChenge }) => {
 
    const filterContacs = contacts.filter(contact =>
        (contact.name.toUpperCase().includes(filterValue.toUpperCase())));
    if (filterContacs.length!==0) {
       contacts=[...filterContacs]
    } else {
        return
    }
    
        return (
         <ul>
                {contacts.map(contact => {
            return (
                <li key={contact.id}>{contact.name}: {contact.number}
                    <button type="button" onClick={()=>deleteChenge(contact.id)}>Delete</button>
                </li>
                
)
          })}
        </ul>
    )
}
export default ContactList; 