import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import ContactComponent from "../pure/contact";
const ContactListComponent = () => {
  const defaultContact = new Contact("Carlos", "Ramirez", "carlosramirez@gmail.com", false);
  return (
    <div>
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
};

export default ContactListComponent;
