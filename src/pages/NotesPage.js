import React from 'react';
import NoteItem from '../components/noteItem';
import AddButton from '../components/AddButton';

import {useNotes} from '../hooks/NotesHook'


 const NotesPage = ()=>{
 const {NotesData} = useNotes()
    return (

        <div className="notes">
          <div className="notes-header">
            <h2></h2>
            <p className="notes-count">Count: {NotesData.length}</p>
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