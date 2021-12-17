import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import React from 'react';

const User = props => {
  // console.log(props.randomuser);
  const { picture, name, email, phone, location, dob, registered } = props.randomuser;
  // console.log({ picture });
  // console.log({ name });
  // console.log({ email });
  // console.log({ phone });
  // console.log({ location });
  // console.log({ dob });
  // console.log({ registered });
  return (
    <Card sx={{ maxWidth: 400, background: '#955251', boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)', margin: '3% auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ width: 100, height: 100 }} aria-label='recipe'>
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
      </CardContent>
    </Card>
  );
};

export default User;
