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
const Button = ({ bgColor, color, text, onClick ,type}) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: bgColor, color: color }}
            type={type}
            className='button'>
            {text}
        </button>
    )
  }




export default Button
