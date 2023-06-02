import React from 'react';
import './BrowseCategories.css';
import avatar from '../Assets/image14.png'

function BrowseCategories() {
  return (
    <div className='container-b'>
      <div className="header">
        <h1>Super App</h1>
        <div className="avatar">
          <img src={avatar} alt="" style={{objectFit:'contain'}} />
        </div>
      </div>
    </div>
  )
}

export default BrowseCategories