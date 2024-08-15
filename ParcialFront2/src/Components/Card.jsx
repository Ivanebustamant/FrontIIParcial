import React from 'react';

const Card = ({ userName, password }) => {
  return (
    <div className="Card">
      <h4>Información ingresada:</h4>
      <p>Nombre de usuario: {userName}</p>
      {/*<p>Password: {password}</p> */}
    </div>
  );
};

export default Card;
