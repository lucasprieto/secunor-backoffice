import { Button, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'

export default function ClientesView() {
  return (
    <>
      <Grid container>
        <Grid sm={7} xs={6}>
          <Typography variant="h4" gutterBottom>
            Clientes
          </Typography>
        </Grid>
        <Grid sm={5} xs={6} alignItems="flex-start" justifyContent="flex-end" display="flex">
          <Button variant="contained">Crear nuevo</Button>
        </Grid>
      </Grid>
    </>
  )
}
