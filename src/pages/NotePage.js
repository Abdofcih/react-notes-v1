import React, {useState,useEffect} from 'react';
import { useParams  } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../asstes/arrow-left.svg'
import {useNotes} from '../hooks/NotesHook'


function NotePage() {

    const {id} = useParams()
    const [note, setNote] = useState(null)
    const {getNote,createNote,updateNote,deleteNote} = useNotes()

   useEffect(() => {
    // Send 1- id of current note to get it 2- setNote function to set note data
    getNote(id,setNote)/* .then(data=> setNote(data )) */

   }, [id]);



   const deleteHelper = ()=>{
    deleteNote(id, note)
   }

 
  const handleSubmit = ()=>{
    if(id !== 'new' && !note.body)
    deleteHelper()
    else if(id !== 'new')
        updateNote(id, note)
     else if(id === 'new' && note !== null)
        createNote(note)
  }
  
    return (
        <div className="note">
            <div className="note-header">
               <h3>
                 <ArrowLeft  onClick={handleSubmit}  />
                </h3>
                {id != 'new' ? (
                    <button onClick={deleteHelper}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea onChange={(e) =>setNote({...note,"body":e.target.value})} placeholder="Edit note" value={note?.body}></textarea>
        </div>
    )
}

export default NotePage
