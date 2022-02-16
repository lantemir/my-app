import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {

  const [users, setUsers] = useState([]);

  const query = `query MyQuery {
    getUsers {
      firstName
      id
      salary
    }
  }`

  const getData = () => {
    axios.post("http://127.0.0.1:8000/graphql", {
      query: query
    }).then(data => {
      //  console.log(data.data.data.getUsers)
      setUsers(data.data.data.getUsers)
    })
  
  }

 
  return (
    
    <div className='appdiv'>      
      {console.log('render')}
     <h1>Список пользователей</h1>
     {users.map(item => {
       return(
          <div className='usersBlock'>
              <p key={item.id}>name:  {item.firstName}</p>
              <p key={item.id}>salary:  {item.salary}</p>
          </div>
       ) 
     })}

    <div className='buttonLine'>
       <button onClick={getData}>Show users</button>
       <button onClick={() => console.log(users)}>show console</button>   
     </div>
  
    </div>
  );
}




export default App;
