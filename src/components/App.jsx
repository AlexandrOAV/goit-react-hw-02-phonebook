import { nanoid } from "nanoid";
import { Component } from "react";
import ContatForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList ";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
     contacts: [],
    filter: '',
  }

  isCheckContact = (nameUser) => {
    const { contacts } = this.state;
    return contacts.find(contact=>contact.name.toUpperCase()===nameUser.toUpperCase())
  }
  submitForm = stateContactForm => {
    stateContactForm.id = nanoid(7);
    const { name } = stateContactForm;
    if (this.isCheckContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => (
      {
        contacts: [...prevState.contacts, stateContactForm],
      }))
    }
  filterForm = (event) => {
    
    this.setState({ filter: event.target.value })

  };
  deleteChenge = (id) => {
    this.setState(prevState=>({contacts:prevState.contacts.filter(contact=>contact.id!==id)}))
   }
   
  render() {
    // console.log( this.state.filter)
    return (
    <div>
        <h1> Phonebook</h1>
        <ContatForm submitForm={this.submitForm}/>
        <h2>Contacts</h2>
        <Filter onChange={this.filterForm}  />
        <ContactList filterValue={this.state.filter} contacts={this.state.contacts} deleteChenge={this.deleteChenge} />
    </div>
  );
  }
};
