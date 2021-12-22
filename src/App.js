import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import User from './User';
import UserTable from './UserTable';

function App() {
  const [user, setUser] = useState({
    name: {
      title: '',
      first: '',
      last: ''
    },
    location: {
      city: '',
      country: ''
    },
    email: '',
    dob: {
      age: 52
    },
    registered: {
      date: ''
    },
    phone: '',
    picture: {
      large: ''
    },
    login: {
      password: ''
    }
  });
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const result = await axios('https://randomuser.me/api/?results=100');
    // console.log(result);
    setUser(result.data.results[Math.floor(Math.random() * result.data.results.length)]);
    // setUser(result.data.results);
    setLoading(false);
  };

  const addUser = () => {
    setTableData(tableData => [...tableData, user]);
    getData();
    setShow(true);
  };

  const deleteTask = email => {
    setTableData(tableData.filter(data => data.email !== email));
    if (tableData.length <= 1) {
      setShow(false);
    }
  };

  // console.log(tableData);
  // console.log(user);
  // console.log(loading);

  return (
    <div className='App'>
      <User randomuser={user} className='user__card' />
      <div className='button_group'>
        <Button disabled={loading} onClick={getData} variant='contained' style={{ backgroundColor: 'black' }}>
          Random USer
        </Button>
        <Button onClick={addUser} variant='contained' style={{ backgroundColor: '#34421E' }}>
          Add User
        </Button>
      </div>
      {show && <UserTable tableData={tableData} deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
