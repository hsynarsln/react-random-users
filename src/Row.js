import DeleteIcon from '@mui/icons-material/Delete';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Row = ({ row, deleteTask }) => {
  // console.log(props);
  const { name, email, dob, cell } = row;

  return (
    <TableRow key={name.first} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component='th' scope='row' align='center'>
        {name.first}
      </TableCell>
      <TableCell align='center'>{email}</TableCell>
      <TableCell align='center'>{cell}</TableCell>
      <TableCell align='center'>{dob.age}</TableCell>
      <TableCell align='center'>
        <DeleteIcon onClick={() => deleteTask(email)} />
      </TableCell>
    </TableRow>
  );
};

export default Row;
