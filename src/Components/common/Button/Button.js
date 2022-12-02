// import React from 'react'
// function Button() {
//   return (
//     <div className="App">
//     <button>
//     Custom Button
//     </button>        
//     </div>
//   );
// }

// export default Button;

import React from 'react'
const Button = ({ color, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'>
            {text}
        </button>
    )
  }
  
  
 
  
export default Button
