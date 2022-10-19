import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink, useMatches } from 'react-router-dom'

export default function RouterBreadcrumbs() {
  const matches = useMatches()
  const breadcrumbs = matches.filter(el => el.handle)
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {breadcrumbs.map(el => (
        <Link
          component={RouterLink}
          to={el.pathname}
          underline="hover"
          color="inherit"
          key={el.pathname}
        >
          {el.handle.name}
        </Link>
      ))}
    </Breadcrumbs>
  )
}
