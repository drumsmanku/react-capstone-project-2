import React from 'react'
import './CategoriesPage.css'

function CategoriesPage(props) {
  const{categories, backgroundcolor}=props
  return (
    <div className='container'>
      <div className='first-container'>
        
      </div>
      <div className='second-container'>
        <div className='category-container'>
          {categories.map((category, index)=>(
            <button style={{border:'none', background:'none',color:'white', backgroundColor:backgroundcolor[index], height:'10rem', width:'10rem', margin:'0.6rem', borderRadius:'1rem', fontSize:'1.7rem', fontFamily:'DM Sans', textAlign:'left', verticalAlign:'', display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',}} key={index}>{category}</button>
          ))}
        </div>
        <div>
          {/* next page button */}
        </div>
        
      </div>
    </div>
  )
}

export default CategoriesPage