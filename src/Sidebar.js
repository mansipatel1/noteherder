import React from 'react'

import './Sidebar.css'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
  return (
    <nav
      className="Sidebar"
    >
      <div
        className="logo"
      >
        <img
          src={quill}
          alt="Noteherder"
        />
      </div>
      <a className="new-note" href="/notes">
        <img src={newHover} alt="New note" />
        <img className="outline" src={newIcon} alt="New note" />
      </a>
      <div className="SignOut">
        <button>
          <i className="fa fa-sign-out"></i>
        </button>
      </div>
    </nav> 
  )
}

/*const styles = {
  sidebar: {
    width: '6rem',
    backgroundColor: '#f3f3f3',
    padding: '0.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    fontFamily: '"Fauna One"',
    color: '#666',
    fontSize: '3rem',
  },
  logoImg: {
    width: '3rem',
    paddingLeft: '0.4rem',
  },
}
*/
export default Sidebar