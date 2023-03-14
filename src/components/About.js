import React,{useContext} from 'react'
import noteContext from './context/notes/notecontext'
import { useEffect } from 'react'

const About = () => {
    // const a=useContext(noteContext)
    // useEffect(()=>{
    //     a.update();
    //     // eslint-disable-next-line
    // },[])
  return (
    <div>
      {/* <h1>This is About {a.state.name} and he is class {a.state.class}</h1> */}
      <h1>This is about page</h1>
    </div>
  )
}

export default About
