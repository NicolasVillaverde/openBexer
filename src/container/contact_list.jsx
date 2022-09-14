import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import ContactComponent from "../pure/contact";
const ContactListComponent = () => {
  const defaultContact = new Contact("Luis", "Ramirez", "luisramirez@gmail.com", true);
  return (
    <div>
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
};

export default ContactListComponent;
