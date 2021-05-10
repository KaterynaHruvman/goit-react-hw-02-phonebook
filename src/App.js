
import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/Contactlist';
import Filter from './components/Filter/Filter'
  import styles from './App.module.css'

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
   
  };
  handleAddContact = (newContact) =>
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  
  handleCheckUnique = (name) => {
    const { contacts } = this.state
    const isExistContact = !!contacts.find((contact) => contact.name === name)
    isExistContact && alert('Contact already exists')
    return !isExistContact

  };
   getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
   };
  handleFilterChange = filter => this.setState({ filter });
  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={styles.App}>
        <h1>Phonebook</h1>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUnique}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactsList
          contacts={visibleContacts}
          onRemove={this.handleRemoveContact}
        />
      </div>
        
    )
  }
};