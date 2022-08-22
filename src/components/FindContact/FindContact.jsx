import React from 'react';

export class FindContact extends React.Component {
  render() {
    const { findContact } = this.props;
    return (
      <div>
        <h2>Contacts</h2>
        <div>
          <label>Find contacts by name</label>
          <input onChange={findContact} type="text" />
        </div>
      </div>
    );
  }
}
export default FindContact;
// className={styles.contactsTitle}
// className={styles.findDiv}
