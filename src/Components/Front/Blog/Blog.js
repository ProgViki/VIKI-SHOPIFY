import React, {useContext, useState, useEffect}from "react";
import Form from "../../Form/Form";
import Modal from "../../Modal/Modal";

// import {ContextProvider} from "./";
import FormDisplay from "../../FormDisplay/FormDisplay";


const Blog = () => {
const [modal,setModal] = useState(false)
const[data, setData] = useState([])

  const [formData, setFormData] = React.useState([])

  function getData(){
    const fomy = JSON.parse(localStorage.getItem('key'))
    setData(fomy)
}

useEffect(() => getData(), [])

  function getForm(id) {
    const getFormData= JSON.parse(localStorage.getItem("key"));
    const copy = [...formData];
  }
  
return (
  <div>
      <div>
        <button className="bg-black text-white font-bold mt-2 px-3 py-2 rounded-full ml-1" onClick={()=>setModal(true)}>
          ADD BLOG
        </button>
      </div>
     {modal && <Modal><Form /></Modal>} 
      <div
        style={{
          display: "flex",
          borderRadius: "10px",
          gap: "30px",
          marginTop: "4%",
        }}
      >
        <div style={{ width: "50%", marginLeft: "4%" }}>
          <img
            src='./pics/books1.png'
            alt="books"
            style={{ display: "block", width: "100vh" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            textAlign: "center",
            marginRight: "4%",
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            Looking for your next favorite book? Look no further than our book
            sale! We have a wide selection of fiction and non-fiction books for
            sale at unbeatable prices. From bestsellers to classic novels,
            there's something for everyone. Don't miss out on this opportunity
            to expand your reading list. Come visit us at [location] and find
            your next great read today!
          </p>

        </div>
      </div>
      <FormDisplay data={data} />
    
    </div>
  );
};

export default Blog;
