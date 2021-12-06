import logo from "./logo.svg";
import "./App.css";
import react, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import ModalBody from "./Components/ModalBody";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [post_title, setTitle] = useState("");
  const [post_description, setDescription] = useState("");
  const [items, setItem] = useState([]);
  const testing = (e) => {
    console.log("does it work");
  };
  const ChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const ChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  function AddProduct(e) {
    let product_val = post_title;
    let description_val = post_description;
    if (product_val && description_val) {
      let productArr = [...items];
      let productObj = new Object();
      productObj.title = product_val;
      productObj.description = description_val;
      productObj.type = "Enhancement";
      productArr.push(productObj);
      setItem(productArr);
    }
  }
  return (
    <div className="parent">
      <Sidebar />
      <div className="right-side">
        <Navbar handleOpen={handleOpen} />
        <Body items={items} />
      </div>
      <ModalBody
        handleClose={handleClose}
        open={open}
        ChangeTitle={ChangeTitle}
        ChangeDescription={ChangeDescription}
        post_title={post_title}
        post_description={post_description}
        AddProduct={AddProduct}
      />
    </div>
  );
}

export default App;
