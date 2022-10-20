import React from 'react'

function DYIdata(props) {
  return (
    <>
    <div className='DYIdata-container'>
        <span>Dear {props.fname} ! Your message is submitted</span>
        <img src='./images/checked.png' className='success-img'></img>
    </div>
    </>
)
}

export default DYIdata