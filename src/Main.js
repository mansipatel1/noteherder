import React, { Component } from 'react'

import {Switch, Route} from 'react-router-dom'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import base from './base'


class Main extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
    }
  }


  saveNote = (note) => {
    const timestamp = Date.now()
    let shouldRedirect = false
    if (!note.id){
      note.id= timestamp
      shouldRedirect = true
    }

    note.updatedAt= timestamp

    const notes = [...this.state.notes]


    if (note.id) {

      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      notes[i] = note
    } else {
      
      note.id = Date.now()
      notes.push(note)
      shouldRedirect = true
   
    }
    this.setState({ notes},()=> {
        if (shouldRedirect) {
      this.props.history.push(`/notes/${note.id}`)
        }
    })
    
  }


  removeNote = (currentNote) => {
    const notes = [...this.state.notes]
    const i = notes.findIndex(note => note.id === currentNote.id)
    if (i > -1 ){ 
    notes.splice(i,1)
    this.setState({notes})
    this.props.history.push('/notes')
    }
  }

  componentWillMount(){
          /*  localStorage.getItem('notes') && this.setState({
                notes: JSON.parse(localStorage.getItem('notes'))
            }) */
            base.syncState(`notes/${this.props.uid}`, {
            context: this,
            state: 'notes',
            asArray: true,
            
        })
        }
   
    fetchData() {

    }
        componentDidMount(){
            if(!localStorage.getItem('notes')){
                this.fetchData()
        }
    }
    
    
        componentWillUpdate(nextProps, nextState){
            localStorage.setItem('notes', JSON.stringify(nextState.notes))
        }

  render() {
    const formProps ={
      saveNote: this.saveNote,
      removeNote: this.removeNote,
      notes: this.state.notes,
    }
    return (
      <div
        className="Main"
        style={style}
      >
       <Sidebar signOut={this.props.signOut} />
         <NoteList notes={this.state.notes} />
      <Switch>
          <Route
            path="/notes/:id"
            render={navProps => (
              <NoteForm
                {...formProps}
                {...navProps}
              />
            )}
          />
          <Route
            render={navProps => (
              <NoteForm
                {...formProps}
                {...navProps}
              />
            )}
          />
        </Switch>

      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main