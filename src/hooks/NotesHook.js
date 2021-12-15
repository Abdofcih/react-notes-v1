import React, { createContext,  useContext, useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
const NotesContext = createContext();
export const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
    const navigate  = useNavigate();
    const [NotesData, setNotes] = useState([]);

    useEffect(() => {
        getNotes()
       }, []);
       

    const getNotes =async ()=>{
        let response = await fetch("http://localhost:5000/notes")
        let data = await response.json()
        setNotes(data)
        navigate('/')
      }
      const getNote =async (id,setNote)=>{
        if(id === 'new') return null //Don't get any thing I want to add a new note
        let response = await fetch(`http://localhost:5000/notes/${id}`)
        let data = await response.json()
        setNote(data)
        return data
      }
      const createNote = async (note)=>{
        await fetch(`http://localhost:5000/notes`,{
           method:"POST",
           body: JSON.stringify({...note,"updated":new Date()}) ,
           headers:{
               "Content-Type":"application/json"
           }
        })
        getNotes()
    }
    const updateNote = async (id,note)=>{
        await fetch(`http://localhost:5000/notes/${id}`,{
           method:"PUT",
           body: JSON.stringify({...note,"updated":new Date()}) ,
           headers:{
               "Content-Type":"application/json"
           }
        })
        getNotes()
    }
    const deleteNote = async (id,note) => {
        await fetch(`http://127.0.0.1:5000/notes/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        
        getNotes()
    }
      return (
        <NotesContext.Provider value={{ NotesData,getNotes, getNote,createNote,updateNote,deleteNote }}>
          {children}
        </NotesContext.Provider>
      );
}

export default NotesProvider
