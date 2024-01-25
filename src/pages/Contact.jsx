import React from 'react'
import { useState } from 'react';
import { validateEmail } from '../utils/formHelpers';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    //target property refers to the DOM element that triggered the event, which in this case is the input element 
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  }



  const handleSubmit = (e) => {
    //prevent default form behavior which is to refresh the page
    e.preventDefault();

    //check to see if email is invalid or if name is empty
    if (!validateEmail(email) || !name) {
      setErrorMessage('Name or email is invalid');
      //using return to exit out of code block so user can correct the errors
      return;
    }

    if (message.length < 10) {
      setErrorMessage('Message must be at least 10 characters long.');
      return;
    }
    alert(`Thank you for your interest, ${name}. I will get back to you as soon as possible!`);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2>I'd love to hear from you!</h2>
      <h3>To get in touch with me, please fill out the form below.</h3>
      <form className='form' onSubmit={handleSubmit}>
        <input 
        value={name}
        name='name'
        onChange={handleInputChange}
        type="name"
        placeholder='name'
         />
         <input 
         value={email}
         name='email'
         onChange={handleInputChange}
         type="email"
         placeholder='email' 
         />
         <input 
         value={message}
         name='message'
         onChange={handleInputChange}
         type="message"
         placeholder='message text'
         />
         <button type='Submit'>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>  
      )} 
    </div>
  );
}

export default ContactForm; 