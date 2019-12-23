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
        <div className={styles.contact_body}>
          <div className={styles.contact_top}>
            <div className={styles.contact_title}>Contact Form:</div>
            <form onSubmit={this.sendEmail}>
              <div className={styles.contact_line_inputs}>
                <label>
                  <div className={styles.contact_label}>Name:</div>
                  <input className={styles.contact_input} onChange={this.inputData} value={name} id="name" type="text" />
                </label>
              </div>
              <div className={styles.contact_line_inputs}>
                <label>
                  <div className={styles.contact_label}>Email:</div>
                  <input className={styles.contact_input} onChange={this.inputData} value={email} id="email" type="email" />
                </label>
              </div>
              <div className={styles.contact_line_inputs}>
                <label>
                  <div className={styles.contact_label}>Subject:</div>
                  <input className={styles.contact_input} onChange={this.inputData} value={subject} id="subject" type="text" />
                </label>
              </div>
              <div>
                <label>
                  <div>
                    <div className={styles.contact_label}>Message:</div>
                  </div>
                  <textarea className={`${styles.contact_input} ${styles.contact_input_textarea}`} onChange={this.inputData} value={message} id="message" />
                </label>
              </div>
              <button className={styles.contact_submit_button} type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
