import React from 'react';

export class AddContactForm extends React.Component {
  //   handleSubmit = evt => {
  //     evt.preventDefault();
  //     const form = evt.currentTarget;
  //     const contact = {
  //       name: form.elements.contact.value,
  //       number: form.elements.number.value,
  //       id: nanoid(),
  //     };
  //     this.props.onSubmit({ contact });
  //     this.setState({ contacts: [...this.state.contacts, contact] });
  //     form.reset();
  //   };

  render() {
    const { SubmitForm } = this.props;
    return (
      <div>
        <form onSubmit={SubmitForm}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="contact"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div>
            <label>Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
export default AddContactForm;
// import React from 'react';
// import styles from './AddContactForm/AddContactForm.module.css';

// export class AddContactForm extends React.Component {
//   //   handleSubmit = evt => {
//   //     evt.preventDefault();
//   //     const form = evt.currentTarget;
//   //     const contact = {
//   //       name: form.elements.contact.value,
//   //       number: form.elements.number.value,
//   //       id: nanoid(),
//   //     };
//   //     this.props.onSubmit({ contact });
//   //     this.setState({ contacts: [...this.state.contacts, contact] });
//   //     form.reset();
//   //   };

//   render() {
//     const { SubmitForm } = this.props;
//     return (
//       <div>
//         <form className={styles.formContainer} onSubmit={SubmitForm}>
//           <div className={styles.formInput}>
//             <label>Name</label>
//             <input
//               type="text"
//               name="contact"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </div>
//           <div className={styles.formInput}>
//             <label>Number</label>
//             <input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </div>
//           <button className={styles.formBtn} type="submit">
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
// export default AddContactForm;
