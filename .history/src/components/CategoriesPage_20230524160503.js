import React from 'react'
import './CategoriesPage.css';
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

function CategoriesPage(props) {
  const{categories, backgroundcolor}=props
  return (
    <div className='container'>
      <div className='first-container'>
        
      </div>
      <div className='second-container'>
        <div className='category-container'>
          {categories.map((category, index)=>(
            <button style={{border:'none', background:'none',color:'white', backgroundColor:backgroundcolor[index], height:'10rem', width:'10rem', margin:'0.6rem', borderRadius:'1rem', fontSize:'1.7rem', fontFamily:'DM Sans', textAlign:'left',verticalAlign:'top',paddingTop:0}} key={index}>{category} <img src={imgs[index]} alt="not found" width={140} style={{marginLeft:'0.3rem', marginTop:'1rem'}} /></button>
          ))}
          <button className='next-button'>Next page</button>
        </div>
        <div style={{display:'flex'}}>
          
        </div>
        
      </div>
    </div>
  )
}

export default CategoriesPage