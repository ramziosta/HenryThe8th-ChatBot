//TODO Add the address for where we want to search the tab information from and need to edit the  labeling of the tabs and how the data comes back from the api and displayed into cards


import React, { useState, useEffect } from 'react';

function SearchTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'eye-makeup', label: 'Eye Makeup' },
    { id: 'lip-makeup', label: 'Lip Makeup' },
    { id: 'cheek-makeup', label: 'Cheek Makeup' },
    { id: 'skin-makeup', label: 'Skin Makeup' },

  ];

  const [display, setDisplay] = useState(false);
  const [beautyProducts, setBeautyProducts] = useState([])
  const handleClick = (event, id) => {
    event.preventDefault();

    //TODO get the tabs to link with the search parameter then take the data and display it accordingly
    fetch(`https://AMAZON OR GOOGLE OR DATABASE${id}`)
      .then(response => response.json())
      .then(data => setBeautyProducts(data));



    onTabChange(id);
    setDisplay(true);
  };

  return (
    <>
    <div>
      {tabs.map((tab) => (
        <button className='tabs'
          key={tab.id}
          onClick={(event) => handleClick(event, tab.id)}
          style={{ fontWeight: tab.id === activeTab ? 'bold' : 'normal' }}
        >
          {tab.label}
        </button>
      ))}
    </div>
<div>
{ display &&     <div>
        {beautyProducts.map((product) => (
       <div>
          <h4>Image:{product.image}</h4>
          <h4>Name:{product.name}</h4>
          <h4>Description:{product.description}</h4>
          <h4>Color:{product.color}</h4>
          <h4>Texture:{product.texture}</h4>
       </div>
        ))}
      </div>}
</div>
    </>
  );
}

export default SearchTabs;
