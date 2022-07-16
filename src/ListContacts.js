import propTypes from "prop-types";
import { useState } from "react";

const ListContacts = ({ contacts, onDeleteContact }) => {
  const [query, setQuery] = useState("");
  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  let showingContacts =
    query === ""
      ? contacts
      : contacts.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search Contacts"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
        />
      </div>
      {showingContacts.length !== contacts.length && (
        <div className="showing-contacts">
          <span>
            Now showing {showingContacts.length} of {contacts.length}
          </span>
          <button onClick={() => updateQuery("")}>Show All</button>
        </div>
      )}
      <ol className="contact-list">
        {showingContacts.map((c) => {
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
              <button
                className="contact-remove"
                onClick={() => onDeleteContact(c)}
              ></button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

ListContacts.propTypes = {
  contacts: propTypes.array.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

export default ListContacts;
