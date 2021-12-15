import React from 'react'
import { Link } from 'react-router-dom';


const getTitle = (note)=>{
   let title = note.body.split('\n')[0]
   return (title.length>45)?  title.slice(0,45): title
}
let getContent = (note) => {
    //Get content after title
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', '')
    content = content.replaceAll(title, '')

    //Slice content and add three dots in over 45 characters to show there is more
    return content.length > 45 ?content.slice(0, 45) + ' ...': content
    

}
const NoteItem = ({note}) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div  className="notes-list-item">
            - {getTitle(note)}  
            <p><span>{new Date(note.updated).toLocaleDateString()}</span>{getContent(note)}</p>
            </div>
        </Link>
    )
}

export default NoteItem
