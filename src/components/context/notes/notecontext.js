import { createContext } from "react";
const noteContext=createContext();
export default noteContext
//what is usecontext(its a hook in react)
//if we are making changes of state in any one component and we need that same changed state in any another component and suppose you are making larger website than you will need to dig numbers of components by using props inside and inside import but for that we use usecontext so that we can all state from any components directly.
//first make notecontext use creatContext from react and than make another component Notestate in which you will make state changes and import it
//cover all app.js within notestate.
//then directly use usecontext in any component eg.in about.js and then just call function of notecontext there by importing it. 
// you can use useEffect it will make changes if there will be any change detected.