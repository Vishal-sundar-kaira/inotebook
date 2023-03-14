import React,{useContext, useState} from 'react'
import Notes from './Notes'
import notescontext from "../components/context/notes/notecontext"
const Addnotes = (props) => {
  const {showalert}=props
  const context=useContext(notescontext)
  const {addnote}=context;
  const[note,setNote]=useState({title:"",description:"",tag:""})
  const handleclick=(e)=>{
    e.preventDefault()
    addnote(note.title,note.description,note.tag);//here we are adding note whose state is changed using onchange.
    setNote({title:"",description:"",tag:""})
    props.showalert("Added note succesfully","success")
  }
  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})//...note says that keep previous all note and add in it after comma wala
  }
  return (
    <div>
      <h1>Add a Note</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name='title'
          onChange={onchange} minLength={5} required value={note.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="tag"
          name='tag'
          onChange={onchange} minLength={5} required value={note.tag}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Write Notes
        </label>
        <textarea
          className="form-control"
          id="description"
          name='description'
          rows="3"
          onChange={onchange} minLength={5} required value={note.description}
        ></textarea>
      </div>
      <button disabled={note.title.length<5||note.description.length<5} className="btn btn-primary" type="submit" onClick={handleclick}>Add note</button>
      <Notes showalert={showalert}/>
    </div>
  )
}

export default Addnotes
