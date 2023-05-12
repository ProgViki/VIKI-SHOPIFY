import React, { useContext, useState } from "react";
// import { ContextProvider } from "../Context";
import { ImCancelCircle } from "react-icons/im";
// import Modal from '../Modal/Modal';

const Form = () => {
//   const { setModal } = useContext(ContextProvider);
const [modal, setModal] = useState(true)
  const [data, setData] = useState([]);

  

  const [formData, setFormData] = React.useState({
    name: "",
    describe: "",
    image: "",
  });

  const {name, describe, image} = formData

  function handleform(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    
    // const collectData=[name,describe,image]

    const localSt=localStorage.getItem("key")? JSON.parse(localStorage.getItem("key")):[];
     const copyP=[...localSt]
     const newValues = [...copyP, formData]

     localStorage.setItem("key", JSON.stringify(newValues));
    
    console.log(localSt)
  }

 function getData(){
          const fomy = JSON.parse(localStorage.getItem('key'))
          setData(fomy)
}



  // setTimeout(() => {
  //   const tasts = localStorage.getItem("tasks")
  //     ? JSON.parse(localStorage.getItem("tasks"))
  //     : [];
  //   const taskCopy = [...tasts, data];
  //   localStorage.setItem("tasks", JSON.stringify(taskCopy));

  
  

  return (
    <div >
      {modal && <div className="bg-white p-10 rounded-lg"><form
        className="w-[300px] h-[400px] flex flex-col leading-8 "
        onSubmit={handleSubmit}
      >
        <span
          className="flex items-end justify-end cursor-pointer"
          onClick={() => setModal(false)}
        >
          <ImCancelCircle />
        </span>
        <label>Image</label>
        <input
          type="text"
          placeholder="Enter Your Image url/link "
          name="image"
          className="border m-1 rounded-md"
          onChange={handleform}
        />
        <label>Title</label>
        <input
          type="text"
          placeholder="Put In The Title Of your Book"
          name="describe"
          onChange={handleform}
          className="border m-1 rounded-md"
        />
        <label>Author Name:</label>
        <input
          type="text"
          placeholder="Enter the Name of the Author"
          name="name"
          className="border m-1 rounded-md"
        />
        <button className="bg-blue-500 px-3 py-2 font-bold text-white border m-1 rounded-md mt-10">
          Submit
        </button>
      </form></div>}
    </div>
  );
};

export default Form;