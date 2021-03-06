import React from "react";
import axios from "axios";

import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      errors: {}
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = response.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onFieldChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const updContact = {
      name,
      email,
      phone
    };

    if (name === "") {
      this.setState({
        errors: { name: "Name is required" }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: { email: "Email is required" }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: { phone: "Phone is required" }
      });
      return;
    }

    // ADD CONTACT
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${
        this.props.match.params.id
      }`,
      updContact
    );
    // UPDATE STATE
    dispatch({ type: "UPDATE_CONTACT", payload: response.data });

    // CLEAR FORM
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  render() {
    const { errors, name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">UPDATE CONTACT</div>
              <div className="card-body">
                <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    onFieldChange={this.onFieldChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    value={email}
                    type="email"
                    onFieldChange={this.onFieldChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    onFieldChange={this.onFieldChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    className="btn btn-danger btn-block"
                    value="UPDATE"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
