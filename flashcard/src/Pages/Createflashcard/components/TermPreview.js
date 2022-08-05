import React from 'react'
import { useState } from 'react';


const TermPreview = ({file}) => {
   
        const [preview,setPreview]=useState(null);
        if(file){
        console.log("preveiew",file)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onload=()=>{
            setPreview(reader.result);
        }
    }



  return (
    <div className="w-28 h-full p-2">
     {preview ? <img src={preview} alt="preview"/>:"loading..."   }
    </div>
  )
}

export default TermPreview