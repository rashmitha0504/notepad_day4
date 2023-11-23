import React from 'react'
import './NoteItem.css'

const NoteItem = (props) => {
    const{noteDetails,onDelete,index}=props
    const {title,noteText}=noteDetails

    const handleDelete=()=>{
      onDelete(index)
    }

  return (
    <li className='li'>
        <h1 className='head'>{title}</h1>
        <p className='descri'>{noteText}</p>
        <button onClick={handleDelete} className='btn-li'>Delete</button>
    </li>
  )
}

export default NoteItem