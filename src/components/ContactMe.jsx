// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <ContactMe/> element whereever you wish to display the form.

import React, { Component } from 'react';
import './ContactMe.css';

export default class ContactMe extends Component {
  constructor(props) {
    super(props);
    // this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  submitForm = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  };

  render() {
    const { status } = this.state;
    return (
      <div className='contactMe-Container' id='contactMe'>
        <div className='contactMe-Title'> Contact Me </div>
        <form onSubmit={this.submitForm} action='https://formspree.io/xbjzaeao' method='POST'>
          {/* <!-- add your custom form HTML here --> */}
          <label classname='contactMe-label' htmlFor='name'>
            Name:
          </label>
          <input required type='text' name='name' />
          <label classname='contactMe-label' htmlFor='email'>
            Email:
          </label>
          <input required type='email' name='email' />
          <label classname='contactMe-label' htmlFor='message'>
            Message:
          </label>
          <textarea type='text' rows='5' cols='33' name='message' />
          {status === 'SUCCESS' ? (
            <p className='response'>
              Thanks! Message Sent.
              <br /> Will get back to you ASAP
            </p>
          ) : (
            <button>Submit</button>
          )}
          {status === 'ERROR' && <p className='response'>Ooops! There was an error.</p>}
        </form>
        {/* <div className='contactEmail'>
          You can also reach me at my e-mail <a href='mailto:juan.del89@gmail.com'>Email</a>
        </div> */}
      </div>
    );
  }
}
