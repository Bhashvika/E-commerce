import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './contactdetails.css';

const Contact = () => {
  const [contactdata, setContactdata] = useState([]);

  const fetchContactData = async () => {
    const response= await fetch("http://localhost:4000/product/getcontact").then((res)=>res.json())
    //.then((data)=>{setContactdata(data.data)})
    setContactdata(response.data)
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  return (
    <div className='contactdetails'>
      {contactdata.map((contact,index)=>{
      return <>
      <div key={index} className="contact-format">
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.message}</p>
      </div>
      <hr />
      </>
      
       
})}
    </div>
  );
};

export default Contact;
