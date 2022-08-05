import React from 'react'
import { useState } from 'react';


const Preview = ({file}) => {
const [preview,setPreview]=useState(null);

     
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
        setPreview(reader.result);
    }




  return (
    <div className="w-28 h-28">
     {preview ? <img src={preview} alt="preview"/>:"loading..."  }
    </div>
  )
}

export default Preview