import "./App.css";
import ListContacts from "./ListContacts";
import { useState, useEffect } from "react";
import * as ContactsAPI from "./utils/ContactsAPI";

function App() {
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => contact.id !== c.id));
  };
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };

    getContacts();
  }, []);

  return (
    <div>
      <ListContacts contacts={contacts} onDeleteContact={removeContact} />
    </div>
  );
}

export default App;
