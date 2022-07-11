import propTypes from "prop-types";

const ListContacts = ({ contacts, onDeleteContact }) => {
  return (
    <ol className="contact-list">
      {contacts.map((c) => {
        return (
          <li key={c.id} className={"contact-list-item"}>
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${c.avatarURL})` }}
            ></div>
            <div className="contact-details">
              <p>{c.name}</p>
              <p>{c.handle}</p>
            </div>
            <button onClick={() => onDeleteContact(c)}>Remove</button>
          </li>
        );
      })}
    </ol>
  );
};

ListContacts.propTypes = {
  contacts: propTypes.array.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

export default ListContacts;
