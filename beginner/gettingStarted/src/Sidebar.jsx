import React, { Component } from 'react';


const Sidebar = (props) => {
  return (
    <div style={{
      width: '33vw',
      height: '100vh',
      overflow: 'auto',
      background: '#eee',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <a href='#'>Counter</a>
      <a href='#'>GithubLookup</a>
    </div>
  )
}

export default Sidebar;