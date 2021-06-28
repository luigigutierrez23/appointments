import React from 'react';

const Appointment = ({ data, removeAppointment }) => {
  const { pet, partner, date, time, symptom, id } = data;
  return (
    <div className='appointment'>
      <p>
        Pet: <span>{pet}</span>
      </p>
      <p>
        Partner: <span>{partner}</span>
      </p>
      <p>
        Date: <span>{date}</span>
      </p>
      <p>
        Time: <span>{time}</span>
      </p>
      <p>
        Sympton: <span>{symptom}</span>
      </p>

      <button
        className='button delete u-full-width'
        onClick={() => removeAppointment(id)}>
        Delete &times;
      </button>
    </div>
  );
};

export default Appointment;
