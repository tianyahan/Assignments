import React from 'react';

const validation =(props)=> {
  let validationMessage='text is too short';
  if(props.inputLength >=5) {
    validationMessage='text is long enough';
  }

  return (
    <div>
        <p>{validationMessage}</p>
    </div>
  )
}
export default validation


// import React from 'react';

// const validation= (props) =>{
//   let validationMessage = 'Text too short';
//   if (props.inputLength <= 5 ){
//       validationMessage='Text long enough'
//   }
//   return (
//     <div>
//       <p>{validationMessage}</p>
//     </div>    
//   )
// }
// export default validation;