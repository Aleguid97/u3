import React, { useState } from 'react';

const MyComponent = () => {
  const [listItems, setListItems] = useState(['Odio', 'il', 'Natale']);

  // Funzione per cambiare dinamicamente il contenuto della lista
  const changeListContent = () => {
    setListItems(['Odialo', 'Anche', 'Tu']);
  };
  const changeListContent1 = () => {
    setListItems(['Non', 'LO', 'Stai', 'Odiando', 'Abbastanza']);
  };
  
  return (
    <div>
      <ul className='antiNatale'>
        {listItems.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>

      <button className='button1' onClick={changeListContent} onDoubleClick={changeListContent1}>Odialo</button>
    </div>
  );
};

export default MyComponent;
