import React from 'react';
import styles from './AddContactForm.module.css';

export class AddContactForm extends React.Component {
  render() {
    const { SubmitForm } = this.props;
    return (
      <div>
        <form className={styles.formContainer} onSubmit={SubmitForm}>
          <div className={styles.formInput}>
            <label>Name</label>
            <input
              type="text"
              name="contact"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className={styles.formInput}>
            <label>Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button className={styles.formBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
export default AddContactForm;

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
