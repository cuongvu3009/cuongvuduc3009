import './contact.css';
import { AiFillPhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';

const Contact = () => {
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
          <form className='c-form'>
            <input
              style={{ backgroundColor: '#333' }}
              type='text'
              placeholder='Subject'
              name='user_subject'
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
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
