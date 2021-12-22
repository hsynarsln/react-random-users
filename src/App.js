import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import User from './User';
import UserTable from './UserTable';

function App() {
  const [user, setUser] = useState({
    name: {
      title: 'Miss',
      first: 'Teresa',
      last: 'Collins'
    },
    location: {
      city: 'Wakefield',
      country: 'United Kingdom'
    },
    email: 'teresa.collins@example.com',
    dob: {
      age: 52
    },
    registered: {
      date: '2018-11-12T20:55:59.549Z'
    },
    phone: '025 4577 4948',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/85.jpg'
    },
    login: {
      password: '123456'
    }
  });
  const [tableData, setTableData] = useState([]);

  const getData = async () => {
    const result = await axios('https://randomuser.me/api/?results=100');
    // console.log(result);
    setUser(result.data.results[Math.floor(Math.random() * result.data.results.length)]);
  };

  const addUser = () => {
    setTableData(tableData => [...tableData, user]);
  };

  // console.log(tableData);
  // console.log(user);

  return (
    <div className='App'>
      <User randomuser={user} className='user__card' />
      <Button onClick={getData} variant='contained'>
        Random User
      </Button>
      <Button onClick={addUser} variant='contained' color='success'>
        Add User
      </Button>
      <UserTable tableData={tableData} />
    </div>
  );
}

export default App;
