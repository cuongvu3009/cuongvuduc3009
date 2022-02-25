import './contact.css';
import React, { useRef, useState } from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSend, setIsSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qirh3xe',
        'template_5o7txnw',
        form.current,
        'user_1pk7vgCOcyfeLjCAQxIWs'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleSubmit = () => {
    setIsSend(true);
  };
  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's discuss your project</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <AiFillPhone className='c-icon' />
              +358 465 339 075
            </div>
            <div className='c-info-item'>
              <AiOutlineMail className='c-icon' />
              cuongvu3009@gmail.com
            </div>
            <div className='c-info-item'>
              <FaLocationArrow className='c-icon' />
              Uusima, Finland
            </div>
          </div>
        </div>

        <div className='c-right'>
          <p className='c-desc'>Let's get in touch</p>
          <form className='c-form' ref={form} onSubmit={sendEmail}>
            <input
              style={{ backgroundColor: '#333' }}
              type='text'
              placeholder='Subject'
              name='user_subject'
              required
            />
            <input
              style={{ backgroundColor: '#333' }}
              type='text'
              placeholder='Your Name'
              name='user_name'
            />

            <input
              style={{ backgroundColor: '#333' }}
              type='text'
              placeholder='Your Email'
              name='user_email'
            />
            <textarea
              style={{ backgroundColor: '#333' }}
              rows='5'
              placeholder='Your Message'
              name='message'
            />
            <button onClick={handleSubmit}>Submit</button>
          </form>
          {isSend && (
            <p className='contact-feedback'>
              Thank you for sending me an email!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
