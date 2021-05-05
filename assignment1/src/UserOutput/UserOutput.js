import React from 'react';
import './UserOutput.css';

const UserOutput =(props) =>{
  const pStyle ={
    padding:'10px 10px 0 10px',
  }
  return(
    <div className='UserOutput'>
      <p style={pStyle}>Username:  {props.name}</p>
      <p>Working place:  {props.company}</p>
    </div>
  )
}
export default UserOutput;