import { Button, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { Outlet, Link as RouterLink } from 'react-router-dom'

export default function ProveedoresView() {
  return (
    <>
      <Grid container>
        <Grid sm={7} xs={6}>
          <Typography variant="h4" gutterBottom>
            Proveedores
          </Typography>
        </Grid>
        <Grid sm={5} xs={6} alignItems="flex-start" justifyContent="flex-end" display="flex">
          <Button color="secondary" component={RouterLink} to="./nuevo" variant="contained">
            Crear nuevo
          </Button>
        </Grid>
      </Grid>
      <Outlet />
    </>
  )
}
