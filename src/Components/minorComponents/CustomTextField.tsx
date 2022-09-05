import { TextField, TextFieldProps, styled } from "@mui/material";

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
    color: 'gray',
    fontWeight: 'bold',
    width: '23em',
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
  },
  '& .MuiFormLabel-root': {
    color: 'black'
  }
}));

export default CustomTextField;