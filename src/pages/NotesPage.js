import React, {useState,useEffect} from 'react'
import NoteItem from '../components/noteItem';
import AddButton from '../components/AddButton';

const NotesPage = ()=>{
  const [NotesData, setNotesData] = useState([])
  
  useEffect(() => {
    getNotes()
   }, []);
   
  const getNotes =async ()=>{
    let response = await fetch("http://localhost:5000/notes")
    let data = await response.json()
    setNotesData(data)
    console.log(data)
  }


    return (

        <div className="notes">
          <div className="notes-header">
            <h2 className="notes-title">&#9782; Notes</h2>
            <p className="notes-count">{NotesData.length}</p>
          </div>
          <div className="notes-list">
                {NotesData.map((note, index) => (
                    <NoteItem key={index} note={note} />
                ))}
            </div>  
            <AddButton /> 
        </div>
    )
}

export default NotesPage