import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import growingupmanSvg from './assets/growing-up-man.svg';
import growingupwomanSvg from './assets/growing-up-woman.svg';
import mailSvg from './assets/mail.svg';
import manSvg from './assets/man.svg';
import mapSvg from './assets/map.svg';
import padlockSvg from './assets/padlock.svg';
import phoneSvg from './assets/phone.svg';
import womanSvg from './assets/woman.svg';

const myStyles = {
  img: {
    width: '3rem',
    border: '1px solid gray',
    borderRadius: '50%',
    boxShadow: '2px 2px 2px 2px rgba(0.2,0.2,0.2,0.2)',
    cursor: 'pointer',
    padding: '5px'
  }
};

const User = props => {
  // console.log(props.randomuser);
  const {
    gender,
    picture: { large: img },
    name: { first: fName, last: lName },
    email,
    phone,
    location,
    dob,
    login
  } = props.randomuser;

  const [mouse, setMouse] = useState('');
  const [title, setTitle] = useState('');

  return (
    <Card sx={{ maxWidth: 700, background: 'gray', boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)', margin: 'auto' }}>
      <CardHeader
        style={{ backgroundColor: 'gray', display: 'flex', paddingLeft: '42%' }}
        avatar={
          <Avatar sx={{ width: 100, height: 100, border: 2 }} aria-label='recipe'>
            <img src={img} alt='' />
          </Avatar>
        }
      />
      <CardContent style={{ backgroundColor: '#fff' }}>
        <Typography sx={{ display: 'flex', justifyContent: 'center', marginTop: '2%', alignItems: 'center', fontSize: '.8rem', height: '1.5rem' }} variant='subtitle1' color='text.primary' align='justify'>
          {title}
        </Typography>
        <Typography sx={{ display: 'flex', justifyContent: 'center', margin: '3% 0', alignItems: 'center', fontSize: '1.5rem', height: '1.5rem' }} variant='subtitle1' color='text.primary' align='justify'>
          {mouse}
        </Typography>
        <hr />
        <Typography sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '7% 3%' }} variant='subtitle1' color='text.primary' align='justify'>
          {gender === 'male' ? (
            <img
              style={myStyles.img}
              src={manSvg}
              alt=''
              onMouseOver={() => {
                setMouse(`${fName}  ${lName}`);
                setTitle('My Name is');
              }}
              onMouseOut={() => {
                setMouse('');
                setTitle('');
              }}
            />
          ) : (
            <img
              style={myStyles.img}
              src={womanSvg}
              alt=''
              onMouseOver={() => {
                setMouse(`${fName}  ${lName}`);
                setTitle('My Name is');
              }}
              onMouseOut={() => {
                setMouse('');
                setTitle('');
              }}
            />
          )}
          <img
            style={myStyles.img}
            src={mailSvg}
            alt=''
            onMouseOver={() => {
              setMouse(email);
              setTitle('My Email is');
            }}
            onMouseOut={() => {
              setMouse('');
              setTitle('');
            }}
          />
          {gender === 'male' ? (
            <img
              style={myStyles.img}
              src={growingupmanSvg}
              alt=''
              onMouseOver={() => {
                setMouse(dob.age);
                setTitle('My Age is');
              }}
              onMouseOut={() => {
                setMouse('');
                setTitle('');
              }}
            />
          ) : (
            <img
              style={myStyles.img}
              src={growingupwomanSvg}
              alt=''
              onMouseOver={() => {
                setMouse(dob.age);
                setTitle('My Age is');
              }}
              onMouseOut={() => {
                setMouse('');
                setTitle('');
              }}
            />
          )}
          <img
            style={myStyles.img}
            src={mapSvg}
            alt=''
            onMouseOver={() => {
              setMouse(`${location.city} / ${location.country}`);
              setTitle('My Location is');
            }}
            onMouseOut={() => {
              setMouse('');
              setTitle('');
            }}
          />
          <img
            style={myStyles.img}
            src={phoneSvg}
            alt=''
            onMouseOver={() => {
              setMouse(phone);
              setTitle('My Phone Number is');
            }}
            onMouseOut={() => {
              setMouse('');
              setTitle('');
            }}
          />
          <img
            style={myStyles.img}
            src={padlockSvg}
            alt=''
            onMouseOver={() => {
              setMouse(login.password);
              setTitle('My Password is');
            }}
            onMouseOut={() => {
              setMouse('');
              setTitle(``);
            }}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default User;
