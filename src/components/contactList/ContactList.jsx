import PropTypes from 'prop-types';

import { ContactsListItem } from '../contactListItem/ContactListItem';

import { ContactsList } from './ContactList.module';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ContactsList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;