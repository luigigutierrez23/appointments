import React, { useState, useEffect } from 'react';
import Appointment from '../components/Appointment';
import Form from '../components/Form';

function App() {
  let initalAppointments = JSON.parse(localStorage.getItem('appointments'));

  if (!initalAppointments) {
    initalAppointments = [];
  }

  const [appointments, setAppointments] = useState(initalAppointments);

  useEffect(() => {
    if (initalAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments, initalAppointments]);

  const generateAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const removeAppointment = (id) => {
    const newAppointments = appointments.filter((x) => x.id !== id);
    setAppointments(newAppointments);
  };

  const title =
    appointments.length === 0 ? 'No Appointments' : 'Manage your appointments';

  return (
    <>
      <h1>Appointments Manager</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <h1>Get your Appointment</h1>
            <Form handleAppointment={generateAppointment} />
          </div>
          <div className='one-half column'>
            <h1>{title}</h1>
            {appointments.map((item) => (
              <Appointment
                key={item.id}
                data={item}
                removeAppointment={removeAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
