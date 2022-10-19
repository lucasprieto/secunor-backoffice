import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import HandymanIcon from '@mui/icons-material/Handyman'
import ReportIcon from '@mui/icons-material/Report'

import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const DrawerListItem = ({ to, text, icon }) => {
  const location = useLocation()
  return (
    <ListItem disablePadding>
      <ListItemButton component={RouterLink} to={to} selected={location.pathname.startsWith(to)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

DrawerListItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  icon: PropTypes.element,
}

export default function DrawerList() {
  return (
    <List>
      <DrawerListItem to="/clientes" text="Clientes" icon={<GroupsIcon />} />
      <DrawerListItem to="/proveedores" text="Proveedores" icon={<LocalShippingIcon />} />
      <DrawerListItem to="/trabajos" text="Trabajos" icon={<HandymanIcon />} />
      <DrawerListItem to="/agenda" text="Agenda" icon={<CalendarMonthIcon />} />
      <DrawerListItem to="/reclamos" text="Reclamos" icon={<ReportIcon />} />
    </List>
  )
}
