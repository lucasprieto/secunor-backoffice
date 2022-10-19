import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Outlet } from 'react-router-dom'
import ResponsiveDrawer from './ResponsiveDrawer'
import { Box } from '@mui/material'
import RouterBreadcrumbs from './RouterBreadcrumbs'

const drawerWidth = 200

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Secunor Backoffice
          </Typography>
        </Toolbar>
      </AppBar>
      <ResponsiveDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={drawerWidth}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <RouterBreadcrumbs />
        <Box sx={{ mt: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
