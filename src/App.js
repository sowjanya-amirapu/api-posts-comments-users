import React, {useEffect, useState } from 'react';
import './index.css';


function App() {

  const [buttonType, setButtonType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(()=>{

    fetch(`https://jsonplaceholder.typicode.com/${buttonType}`)
    .then(response => response.json())
    .then(json => setItems(json))

  }, [buttonType])

  return (
    <div>
    <button className='btn' onClick={() => setButtonType('posts')}>POSTS</button>
    <button className='btn' onClick={() => setButtonType('users')}>USERS</button>
    <button className='btn' onClick={() => setButtonType('comments')}>COMMENTS</button>
    <p>{`Below are the list of all ${buttonType} that are called from the API
    https://jsonplaceholder.typicode.com/${buttonType}`}</p>
    <p>{buttonType}</p>
    {items.map(item => {
      return <pre key={item.id}>{JSON.stringify(item)}</pre>
    })}
    
    </div>
  )
}

export default App;
