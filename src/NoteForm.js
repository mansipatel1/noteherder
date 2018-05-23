import React from 'react'

import './NoteForm.css'

const NoteForm = (currentNote) => {
    
    return (
        <div className="NoteForm">
          <div className="form-actions">
            <button type="button">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note"
                value = {currentNote.title}
              />
            </p>
            
            <textarea name="body"
                      value = {currentNote.title}
            ></textarea>
          </form>
        </div>
    )
}

export default NoteForm