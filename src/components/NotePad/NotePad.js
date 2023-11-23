import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem/NoteItem'
import './NotePad.css'

const NotePad = () => {
    const [title,setTitle]=useState('')
    const [noteText,setNotes]=useState('')
    const[noteList,setNotesList]=useState([])

    const renderNotes=()=>(
        <ul className='list'>
            {noteList.map((each,index)=>(
                <NoteItem key={each.id} noteDetails={each} index={index} onDelete={handleDelete}/>
            ))}
        </ul>
    )

    const renderEmptynote=()=>(
        <div className='empty'>
            <h1 className='note-head'>No Notes Yet</h1>
            <p className='descri'>Notes You add will display here</p>
        </div>
    )

    const inputChange=event=>setTitle(event.target.value)
    const textChange=event=>setNotes(event.target.value)


    const onAddNote=event=>{
        event.preventDefault()
        const newNote={
            id:uuidv4(),
            title,
            noteText,
        }
        setNotesList(prevNotes=>[...prevNotes,newNote])
        setTitle('')
        setNotes('')
    }

    const handleDelete=(index)=>{
        const updatenotes=[...noteList]
        updatenotes.splice(index,1)
        setNotesList(updatenotes);
    };

  return (
    <div className='main-cont'>
        <div className='card-cont'>
            <h1 className='heading'>NotePad</h1>
            <form onSubmit={onAddNote} className='Form'>
                <input className='input' type="text" placeholder='Title' value={title} onChange={inputChange}/>
                <textarea className='textarea' placeholder='Take a Note...' rows="3" value={noteText} onChange={textChange}/>
                <button className='btn' type='submit'>Add</button>
            </form>
            {noteList.length===0?renderEmptynote():renderNotes()}
        </div>
    </div>
  )
}

export default NotePad