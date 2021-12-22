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
    cursor: 'pointer'
  }
};

const User = props => {
  // console.log(props.randomuser);
  const { gender, picture, name, email, phone, location, dob, login } = props.randomuser;

  const [mouse, setMouse] = useState([]);
  const [title, setTitle] = useState([]);
  // console.log({ picture });
  // console.log({ name });
  // console.log({ email });
  // console.log({ phone });
  // console.log({ location });
  // console.log({ dob });
  // console.log({ registered });
  return (
    <Card sx={{ maxWidth: 700, background: 'gray', boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)', margin: '3% auto' }}>
      <CardHeader
        style={{ backgroundColor: 'gray', display: 'flex', margin: 'auto', paddingLeft: '42%' }}
        avatar={
          <Avatar sx={{ width: 100, height: 100, border: 2 }} aria-label='recipe'>
            <img src={picture.large} alt='' />
          </Avatar>
        }
      />
      <CardContent style={{ backgroundColor: '#fff' }}>
        {/* <Typography sx={{ display: 'flex', justifyContent: 'center', marginTop: '5%', alignItems: 'center', fontSize: '.8rem' }} variant='subtitle1' color='text.primary' align='justify'>
          {mouse.keys}
        </Typography> */}
        <Typography sx={{ display: 'flex', justifyContent: 'center', margin: '5% 0', alignItems: 'center', fontSize: '1.5rem' }} variant='subtitle1' color='text.primary' align='justify'>
          {mouse}
        </Typography>
        <hr />
        <Typography sx={{ display: 'flex', justifyContent: 'space-between', margin: '7% 3%' }} variant='subtitle1' color='text.primary' align='justify'>
          {gender === 'male' ? <img style={myStyles.img} src={manSvg} alt='' onMouseOver={() => setMouse(`My Name is: ${name.first}  ${name.last}`)} /> : <img style={myStyles.img} src={womanSvg} alt='' onMouseOver={() => setMouse(`My Name is: ${name.first}  ${name.last}`)} />}
          <img style={myStyles.img} src={mailSvg} alt='' onMouseOver={() => setMouse(`My Email is: ${email}`)} />
          {gender === 'male' ? <img style={myStyles.img} src={growingupmanSvg} alt='' onMouseOver={() => setMouse(`My Age is: ${dob.age}`)} /> : <img style={myStyles.img} src={growingupwomanSvg} alt='' onMouseOver={() => setMouse(`My Age is: ${dob.age}`)} />}
          <img style={myStyles.img} src={mapSvg} alt='' onMouseOver={() => setMouse(`My Location is: ${location.city} / ${location.country}`)} />
          <img style={myStyles.img} src={phoneSvg} alt='' onMouseOver={() => setMouse(`My Phone is: ${phone}`)} />
          <img style={myStyles.img} src={padlockSvg} alt='' onMouseOver={() => setMouse(`My Password is: ${login.password}`)} />
        </Typography>
      </CardContent>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ width: 100, height: 100, border: 2 }} aria-label='recipe'>
            <img src={picture.large} alt='' />
          </Avatar>
        }
        title={`${name.title}  ${name.first}  ${name.last}`}
      />
      <CardContent>
        <Typography sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 10%' }} variant='subtitle1' color='text.primary' align='justify'>
          <EmailSharpIcon />
          {email}
        </Typography>
        <hr />
        <Typography sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 10%' }} variant='subtitle1' color='text.primary' align='justify'>
          <LocationOnSharpIcon />
          {`${location.city} / ${location.country}`}
        </Typography>
        <hr />
        <Typography sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 10%' }} variant='subtitle1' color='text.primary' align='justify'>
          <LocalPhoneSharpIcon />
          {phone}
        </Typography>
        <hr />
        <Typography variant='body1' color='text.primary' align='center'>
          <strong>Age:</strong> {dob.age}
        </Typography>
        <Typography variant='body1' color='text.primary'>
          <strong>Registered Date:</strong> {registered.date.substr(0, 10)}
        </Typography>
      </CardContent> */}
    </Card>
  );
};

export default User;
