import React, {useState,useEffect} from 'react'
import { useParams ,useNavigate  } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../asstes/arrow-left.svg'


function NotePage() {
    const navigate  = useNavigate();
    const {id} = useParams()
    const [note, setNote] = useState(null)

   useEffect(() => {
       getNote()
   }, [id]);

  const getNote =async ()=>{
    if(id === 'new') return //Don't get any thing I want to add a new note
    let response = await fetch(`http://localhost:5000/notes/${id}`)
    let data = await response.json()
    setNote(data)
  }

  const createNote = async ()=>{
    await fetch(`http://localhost:5000/notes`,{
       method:"POST",
       body: JSON.stringify({...note,"updated":new Date()}) ,
       headers:{
           "Content-Type":"application/json"
       }
    })
}
  const updateNote = async ()=>{
      await fetch(`http://localhost:5000/notes/${id}`,{
         method:"PUT",
         body: JSON.stringify({...note,"updated":new Date()}) ,
         headers:{
             "Content-Type":"application/json"
         }
      })
  }
    const deleteNote = async () => {
        await fetch(`http://127.0.0.1:5000/notes/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        navigate('/')
    }
  const handleSubmit = ()=>{
    if(id !== 'new' && !note.body)
        deleteNote()
    else if(id !== 'new')
        updateNote()
     else if(id === 'new' && note !== null)
        createNote()

     navigate('/')
  }
  
    return (
        <div className="note">
            <div className="note-header">
               <h3>
                 <ArrowLeft  onClick={handleSubmit}  />
                </h3>
                {id != 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea onChange={(e) =>setNote({...note,"body":e.target.value})} placeholder="Edit note" value={note?.body}></textarea>
        </div>
    )
}

export default NotePage
