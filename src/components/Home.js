import React,{useContext} from "react";
import Addnotes from "./Addnotes";
const Home = (props) => {
  const {showalert}=props
  return (
    <div>
      <Addnotes showalert={showalert}/>
    </div>
  );
};

export default Home;
