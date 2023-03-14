import React, { useContext, useEffect, useRef,useState } from "react";
import notescontext from "../components/context/notes/notecontext";
import Noteitem from "./Noteitem";
import {useNavigate} from 'react-router-dom';
const Notes = (props) => {
  const context = useContext(notescontext);
  let navigate=useNavigate()
  const { notes, getnotes ,editnote} = context;
  useEffect(() => {
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')){
      console.log("token is there")
    getnotes();
  }
    else{
      console.log("errir he gro")
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);
  const[note,setNote]=useState({id:"",etitle:"",edescription:"",etag:""})
  
  const updatenotes = (currentnote) => {
    ref.current.click();
    setNote({id:currentnote._id,etitle:currentnote.title,etag:currentnote.tag,edescription:currentnote.description})
  };
  const handleclick=(e)=>{
    console.log("updating notes")
    editnote(note.id,note.etitle,note.etag,note.edescription)
    refclose.current.click();
    props.showalert("updated note succesfully","success")
   
  }
  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})//...note says that keep previous all note and add in it after comma wala
  }
  //use ref is use to give reference if you want to click on any other without clicking it you can click on its reference value.
  const ref = useRef(null);
  const refclose=useRef(null);
  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        hidden={true}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h1>Add a Note</h1>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  placeholder="name@example.com"
                  onChange={onchange}
                  value={note.etitle} minLength={5} required

                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etag"
                  name="etag"
                  placeholder="name@example.com"
                  onChange={onchange}
                  value={note.etag} minLength={5} required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Write Notes
                </label>
                <textarea
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  rows="3"
                  onChange={onchange}
                  value={note.edescription} minLength={5} required
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary"onClick={handleclick}disabled={note.etitle.length<5||note.edescription.length<5}>
                updatenotes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.length===0&&'No notes to display'}
        {notes.map((notes) => {
          return (
            <Noteitem key={notes._id} updatenotes={updatenotes} notes={notes} showalert={props.showalert}/>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
