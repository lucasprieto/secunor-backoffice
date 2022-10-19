import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@mui/material/Drawer'
import { useMediaQuery, Toolbar } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import DrawerList from './DrawerList'

export default function ResponsiveDrawer({ open, onClose, width }) {
  const theme = useTheme()
  const notMobile = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Drawer
      variant={notMobile ? 'permanent' : 'temporary'}
      anchor="left"
      open={notMobile || open}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      onClose={onClose}
      sx={
        notMobile && {
          width,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width, boxSizing: 'border-box' },
        }
      }
    >
      <Toolbar />
      <DrawerList />
    </Drawer>
  )
}

ResponsiveDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
}
