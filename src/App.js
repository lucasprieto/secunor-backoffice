import React from 'react'
import { CssBaseline } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
