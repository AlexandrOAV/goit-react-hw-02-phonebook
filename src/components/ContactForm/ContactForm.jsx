import { Component } from "react";


class ContatForm extends Component {
    state = {
        name: '',
        number: '',
    }
    
     handleContact=({target:{name, value}})=> {
    this.setState({
      [name]: value,
    })
    }
     heandleSubmit = (e) => {
    e.preventDefault();
         this.props.submitForm(this.state);
         this.setState({ name: '', number: '' });
  }
    render() {
        const {name, number}=this.state
        return (     
             <form onSubmit={this.heandleSubmit}>
                <label>Name
                    <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleContact}
            placeholder="Enter contact"
            pattern="[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" 
            required
                />
                </label>
             
                <label>
                       Number phone
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleContact}
  placeholder="Enter number phone"
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/></label>
      <button type="submit">Add contact</button>
        </form>
        )
    }
}
export default ContatForm;