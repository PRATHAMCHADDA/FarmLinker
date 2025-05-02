import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AvailableLaborers() {
  const [laborers, setLaborers] = useState([]);

  useEffect(() => {
    const fetchLaborers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/labor/available');
        setLaborers(response.data);
      } catch (err) {
        alert('❌ Failed to fetch laborers');
      }
    };
    fetchLaborers();
  }, []);

  return (
    <div>
      <h2>Available Laborers</h2>
      <ul>
        {laborers.map(laborer => (
          <li key={laborer._id}>
            <h3>{laborer.name}</h3>
            <p>Skills: {laborer.skills}</p>
            <p>Experience: {laborer.experience}</p>
            <p>Contact: {laborer.contact}</p>
            <p>Location: {laborer.location}</p>
            <p>Availability: {laborer.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableLaborers;
