import { TextField, TextFieldProps, styled } from '@mui/material';

const CustomTextField = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  label: {
    color: 'black',
  },
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderColor: 'black',
    borderRadius: 10,
    border: '1px solid transparent',
    backgroundColor: '#F3F8FC',
    // width:'23em',
    color: 'gray',
    fontWeight: 'bold',
    marginRight: '1em',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: '#F3F8FC',
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '&.Mui-focused': {
      backgroundColor: '#F3F8FC',
      borderColor: 'transparent',
      color: 'black',
    },
  },
  '& .MuiFormLabel-root': {
    color: 'black',
    '&.Mui-focused': {
      backgroundColor: '#F3F8FC',
      borderColor: 'transparent',
      color: 'black',
    },
  },
}));

export default CustomTextField;

// label: {
//   color: theme.palette.primary.main,
// },
// '& .MuiFilledInput-root': {
//   overflow: 'hidden',
//   borderColor: 'red',
//   borderRadius: 10,
//   border: '1px solid transparent',
//   backgroundColor: '#F3F8FC',
//   color: 'gray',
//   fontWeight: 'bold',
//   width: '23em',
//   marginRight: '1em',
//   transition: theme.transitions.create([
//     'border-color',
//     'background-color',
//     'box-shadow',
//   ]),
//   '&:hover': {
//     backgroundColor: '#F3F8FC',
//   },
//   '&.Mui-focused': {
//     backgroundColor: '#F3F8FC',
//     borderColor: 'transparent',
//     color: 'black',
//   },
//   '& input:invalid + fieldset': {
//     borderColor: 'red',
//     borderWidth: 2,
//   },
