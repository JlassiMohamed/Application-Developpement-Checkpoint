import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editContact, postContact } from "../JS/actions/contact";
import { Link } from "react-router-dom";

const Add = () => {
  const [seller, setSeller] = useState({});
  const handleChange = (e) => {
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label>Name</label>
    
      <label>Email</label>
      <input name="Email" value={contact.email} onChange={handleChange} />
      <label>Phone</label>
      <input name="Phone" value={contact.Phone} onChange={handleChange} />
      
      </div>
      )
}