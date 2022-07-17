import "./App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import * as ContactsAPI from "./utils/ContactsAPI";

function App() {
  let navigate = useNavigate();
  const removeContact = (contact) => {
    ContactsAPI.remove(contact);
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

  const onCreateContact = (contact) => {
    const getContacts = async () => {
      const res = await ContactsAPI.create(contact);
      setContacts(contacts.concat(res));
    };

    getContacts();
    navigate("/");
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        }
      />

      <Route
        exact
        path="/create"
        element={<CreateContact onCreateContact={onCreateContact} />}
      />
    </Routes>
  );
}

export default App;
