import React, { useState } from 'react';

const Form = () => {
  const [appointment, setAppointment] = useState({
    pet: '',
    partner: '',
    date: '',
    time: '',
    symptom: '',
  });

  const updateState = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const { pet, partner, date, time, symptom } = appointment;

  return (
    <div>
      <h1>Create Appointment</h1>
      <form>
        <label htmlFor='name'>Pet name</label>
        <input
          type='text'
          name='pet'
          className='u-full-width'
          placeholder='Pet name'
          id='name'
          onChange={updateState}
          value={pet}
        />

        <label htmlFor='partner'>Partner</label>
        <input
          type='text'
          name='partner'
          className='u-full-width'
          placeholder='Partner'
          id='partner'
          onChange={updateState}
          value={partner}
        />

        <label htmlFor='date'>Date</label>
        <input
          type='date'
          name='date'
          className='u-full-width'
          placeholder='Date'
          id='date'
          onChange={updateState}
          value={date}
        />

        <label htmlFor='time'>Time</label>
        <input
          type='time'
          name='time'
          className='u-full-width'
          placeholder='Time'
          id='time'
          onChange={updateState}
          value={time}
        />

        <label htmlFor='symptom'>Symptom</label>
        <textarea
          type='text'
          name='symptom'
          className='u-full-width'
          placeholder='Symptom'
          id='symptom'
          onChange={updateState}
          value={symptom}
        />

        <button type='submit' className='u-full-width button-primary'>
          Add Appointment
        </button>
      </form>
    </div>
  );
};

export default Form;
