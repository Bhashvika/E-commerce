import { React, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [contactdata, setContactdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlefunction = (e) => {
    setContactdata({ ...contactdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = contactdata;
  
    try {
      const response = await fetch('http://localhost:4000/product/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorDetails = await response.text(); // Get error details from the response
        throw new Error(`Network response was not ok: ${errorDetails}`);
      }
  
      const contactinfo = await response.json();
      alert(contactinfo.message);
      console.log(data) // Display the message from backend
      setContactdata({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert(`Error occurred: ${error.message}`);
    }
  };
  
 

  return (
    <div>
      <section className="contact">
        <div className="content">
          <h1>GET IN TOUCH</h1><br />
          <p>WE'D LOVE TO HELP YOU</p>
        </div>
        <div className="container">
          <div className="contactinfo">
            <div className="box">
              <div className="icon"><i className="fa fa-map-marker"></i></div>
              <div className="text">
                <h2>ADDRESS</h2>
                <p>Venkatagiri, Tirupati, Andhra Pradesh</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
              <div className="text">
                <h2>PHONE NUMBER</h2>
                <p>+91 9618487809</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
              <div className="text">
                <h2>EMAIL</h2>
                <p>bbhashvika2004@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="name" value={contactdata.name} onChange={handlefunction} />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="email" value={contactdata.email} onChange={handlefunction} />
                <span>EMAIL</span>
              </div>
              <div className="inputBox">
                <textarea name="message" value={contactdata.message} onChange={handlefunction}></textarea>
                <span>Type your Message....</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" id="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
