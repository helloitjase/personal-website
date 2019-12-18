import React from 'react';
import axios from 'axios';
import styles from './css/contact.css';

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
        <div className={styles.contact_body}>
          <div className={styles.contact_left}>
            <div className={styles.contact_left_inner}>
              Contact Information:
              <div>Jason Chen</div>
              <div>Phone#: (650)-823-3712</div>
              <div>Email: jason.sl.chen@gmail.com</div>
            </div>
          </div>
          <div className={styles.contact_right}>
            <div>Contact Form:</div>
            <form onSubmit={this.sendEmail}>
              <div className={styles.contact_line_inputs}>
                <label>
            Name:
                  <input className={styles.contact_input} onChange={this.inputData} value={name} id="name" type="text" />
                </label>
              </div>
              <div className={styles.contact_line_inputs}>
                <label>
            Email:
                  <input className={styles.contact_input} onChange={this.inputData} value={email} id="email" type="email" />
                </label>
              </div>
              <div className={styles.contact_line_inputs}>
                <label>
            Subject:
                  <input className={styles.contact_input} onChange={this.inputData} value={subject} id="subject" type="text" />
                </label>
              </div>
              <div>
                <label>
                  <div>
            Message:
                  </div>
                  <textarea className={styles.contact_input} onChange={this.inputData} value={message} id="message" />
                </label>
              </div>
              <button type="submit">Send Mail</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
