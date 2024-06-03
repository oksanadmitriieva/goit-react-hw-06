import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectNameFilter);
  const filter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase().trim())
  );

  return (
    <ul className={css.contactList}>
      {filter.map((contact) => (
        <li key={contact.id}>
          <Contact contactItem={contact} />
        </li>
      ))}
    </ul>
  );
}
