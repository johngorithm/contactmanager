import React, { Fragment } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          return (
            <Fragment>
              <h2 className="display-4 mb-3">
                <span className="text-danger">Contact</span> List
              </h2>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
