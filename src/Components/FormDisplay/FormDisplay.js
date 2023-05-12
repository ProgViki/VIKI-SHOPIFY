import React, { useState, useEffect, useContext } from "react";
// import { ContextProvider } from "../Context";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {FaShareAlt} from 'react-icons/fa'

const FormDisplay = ({data}) => {
//   const { setModal } = useContext(ContextProvider);
const [modal, setModal] = useState(false)

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    getpost();
  }, [modal]);

  const getpost = () => {
    const coded =JSON.parse(localStorage.getItem("key"));
    console.log(coded);
    setFormData(coded);
    setModal(true)
  };
  //  console.log(formData)

  // if (formData) {
  //  setFormData(formData);0
  // }

  return (
    <div className="bg-blue-500 w-[full] h-[full] text-white  wrap gap-10 flex m-10">
     {data && data.map((formshow)=>{
            return(
              <div className="flex flex-col p-8 flex-wrap">
              
              <div className="w-[250px] h-[250px] mb-1"><img src={formshow.image} className="w-full h-full"/></div>
              <div className="text-black text-sm font-bold mb-1">{formshow.describe}</div>
              <div className="text-black">{formshow.name}</div>
              <div className="flex gap-4">
              <span><AiFillEdit/></span><span><AiFillDelete/></span>
              

              <div className="flex items-end justify-end"><FaShareAlt /></div>
              </div>
          
              </div>
            )
     })}
    </div>
  );
};

export default FormDisplay;
