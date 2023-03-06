import React from 'react';
import { Link } from 'react-router-dom';
import ResourceList from './ResourceList';


function Resources() {
  return (
    <div>
        <Link to="/chat" style={{marginLeft:"600px"}}>⬅️ Back to all rooms</Link>
   
        <ResourceList/>
        
    </div>
  )
}

export default Resources