import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    this.inputData = this.inputData.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  inputData(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  sendEmail(event) {
    const {
      name, email, subject, message,
    } = this.state;
    event.preventDefault();

    axios.post('/api/contactForm', {
      name,
      email,
      subject,
      message,
    })
      .then(() => {
        console.log('hi');
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((err) => {
        console.log('error with sending message', err);
      });
  }

  render() {
    const {
      name, email, subject, message,
    } = this.state;
    return (
      <div>
        <div>Contact Me</div>
        <form onSubmit={this.sendEmail}>
          <div>
            <label>
            Name:
              <input onChange={this.inputData} value={name} id="name" type="text" />
            </label>
          </div>
          <div>
            <label>
            Email:
              <input onChange={this.inputData} value={email} id="email" type="email" />
            </label>
          </div>
          <div>
            <label>
            Subject:
              <input onChange={this.inputData} value={subject} id="subject" type="text" />
            </label>
          </div>
          <div>
            <label>
            Message:
              <textarea onChange={this.inputData} value={message} id="message" />
            </label>
          </div>
          <button type="submit">Send Mail</button>
        </form>
      </div>
    );
  }
}

export default Contact;
