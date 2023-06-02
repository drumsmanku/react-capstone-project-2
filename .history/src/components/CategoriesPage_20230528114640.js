import React from 'react'
import './CategoriesPage.css';
import { useState } from 'react';
import img1 from'../Assets/image2.png'
import img2 from'../Assets/image3.png'
import img3 from'../Assets/image4.png'
import img4 from'../Assets/image6.png'
import img5 from'../Assets/image7.png'
import img6 from'../Assets/image8.png'
import img7 from'../Assets/image9.png'
import img8 from'../Assets/image10.png'
import img9 from'../Assets/image11.png'

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9,];

const styling={
  backgroundColor: '#148A08', borderRadius:'1.5rem', border:'none', width:'9rem', height:'2.5rem',color:'white',
  fontSize:'1.2rem', letterSpacing:'0.1rem', fontFamily:'DM Sans', display:'flex', alignItems:'center',
  justifyContent: 'space-around',marginLeft:0
  
}
const crossButtonStyling={
  background:'none', padding:'0', margin:'0', border:'none', fontSize:'1.5rem', width:'1rem', color:'#085C00',
}

function CategoriesPage(props) {
  const {categories, backgroundcolor}=props
  const [additionalButtons, setAdditionalButtons] = useState([]);
  const [minCats, setMinCats]=useState(<p style={{color:'#FF0000', fontFamily:'DM Sans', fontSize:'1.3rem'}}>Minimum 3 categories required</p>);
  
  const handleButtonState = (event, index) => {
    const buttonText = event.target.innerText;
    const isSelected = additionalButtons.some((button) => button.key.includes(buttonText));
  
    if (isSelected) {
      setAdditionalButtons((prevButtons) =>
        prevButtons.filter((button) => !button.key.includes(buttonText))
      );
      event.target.style.border = 'none';
    } else {
      const uniqueKey = `${buttonText}-${Date.now()}`;
  
      const newButton = (
        <button key={uniqueKey} style={styling}>
          {buttonText}
          <button
            onClick={(event) => removeButton(event, buttonText, index)}
            style={crossButtonStyling}
          >
            x
          </button>
        </button>
      );
  
      setAdditionalButtons((prevButtons) => [...prevButtons, newButton]);
      event.target.style.border = '4px solid green';
    }
  
    setAdditionalButtons((prevButtons) => {
      if (prevButtons.length >= 2 || prevButtons.length === 0) {
        setMinCats(null);
      } else {
        setMinCats(
          <p style={{ color: '#FF0000', fontFamily: 'DM Sans', fontSize: '1.3rem' }}>
            Minimum 3 categories required
          </p>
        );
      }
      return prevButtons;
    });
  
    localStorage.setItem('categoryItems', event.target.innerText);
  };
  
  
  const removeButton = (event, buttonText, index) => {
    event.stopPropagation(); // Prevent triggering handleButtonState
    setAdditionalButtons(additionalButtons.filter((button) => button.key !== buttonText));
  
    // Find the main button using the index and update its border
    const mainButton = document.querySelector(`.category-container button:nth-child(${index + 1})`);
    if (mainButton) {
      mainButton.style.border = 'none';
    }
  };
  
  
  
  
  
  
  return (
    <div className='container'>
      <div className='first-container'>
        <div className="first-first-container">
          <h1>Super App</h1>
          <h2>Choose your entertainment category</h2>
          <div style={{width:'100%', display:'flex', flexWrap:'wrap'}}>
            {additionalButtons}
          </div>
          {minCats}
         
        </div>
      </div>
      <div className='second-container'>
        <div className='category-container'>
          {categories.map((category, index)=>(
            <button onClick={(event) => handleButtonState(event, index)} style={{ background:'none',color:'white', backgroundColor:backgroundcolor[index], height:'10rem', width:'10rem', margin:'0.6rem', borderRadius:'1rem', fontSize:'1.7rem', fontFamily:'DM Sans', textAlign:'left',verticalAlign:'top',paddingTop:0, }} key={index}>{category} <img src={imgs[index]} alt="not found" width={140} style={{marginLeft:'0.3rem', marginTop:'1rem',}} /></button>
          ))}
          
        </div>
        <div style={{display:'flex'}}>
          <button style={{margin:'0', padding:'0'}}>hi</button>
        </div>
        
      </div>
    </div>
  )
}

export default CategoriesPage