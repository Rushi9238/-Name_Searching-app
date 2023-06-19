import React from 'react'
import { lightColors } from './color';

const OutputData = ({outputName}) => {
    console.log(lightColors[outputName.split("").shift().toLowerCase().charCodeAt(0) - 96]);
  return (
   
     <div className='nameList'>
                <h1 style={{backgroundColor:`${lightColors[outputName.split("").shift().toLowerCase().charCodeAt(0) - 96]}`}}>{outputName.split("").shift().toUpperCase()}</h1>
                <h2>{outputName}</h2>
              <p>{'@' + outputName}</p>
              </div>
   
  )
}

export default OutputData