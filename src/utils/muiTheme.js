import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#d45500',
    },
    secondary: {
      main: '#4d4d4d',
    },
    error: {
      main: red.A700,
    },
  },
})

export default theme
