const ContactsListItem = ({ id, name, pnone, onRemove }) => {
    return (
        <li>
        { name}: { pnone} <button onClick={() => onRemove(id)}>delete</button>
        </li>
    )
}
const ContactsList = ({ contacts, onRemove }) => {
    if (contacts.lenght === 0) return null
    return (
        <ul>
            {contacts.map((contact) => (
                <ContactsListItem {...contact} onRemove={onRemove} />
            ))}
        </ul>
    )
}
export default ContactsList