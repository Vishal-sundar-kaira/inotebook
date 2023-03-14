import React,{useContext} from "react";
import notescontext from "../components/context/notes/notecontext"
const Noteitem = (props) => {
  const context=useContext(notescontext)
  const {deletenote}=context;
  const { notes,updatenotes,showalert } = props;
  return (
    <div className="col-md-3" >
      <div className="card my-3">
        <div className="card-body">
            <div className="d-flex align-items-center">
            <h5 className="card-title me-4">{notes.title}</h5>
            <i className="fa-solid fa-trash-can mx-2"onClick={()=>{
              deletenote(notes._id);showalert("deleted succesfully","success")
            }}></i>
          <i className="fa-solid fa-pen-to-square mx-2"onClick={()=>{updatenotes(notes)}}></i>
            </div>
            <h5 className="card-title me-4">{notes.Tag}</h5>
          <p className="card-text">{notes.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
