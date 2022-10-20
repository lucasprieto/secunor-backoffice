import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'

export default function ControlledTable({ columns, rows: data, pageSize, loading, id = '_id', onEdit, onDelete }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pageSize)
  const rows = useMemo(() => {
    const start = page * rowsPerPage
    const end = start + rowsPerPage
    return data.slice(start, end)
  }, [data, page, rowsPerPage])

  return (
    <TableContainer component={Paper}>
      <Box>
        {loading ? (
          <LinearProgress color="primary" />
        ) : (
          <LinearProgress color="primary" variant="determinate" value={100} />
        )}
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell key={col.fieldName}>{col.name}</TableCell>
            ))}
            {(onEdit || onDelete) && <TableCell align="right">Acciones</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row[id]}>
              {columns.map(col => (
                <TableCell key={`${row[id]}.${col.fieldName}`}>{row[col.fieldName]}</TableCell>
              ))}
              {(onEdit || onDelete) && (
                <TableCell align="right" sx={{ p: '10px' }}>
                  {onEdit && (
                    <Button size="small" onClick={() => onEdit(row[id], row)}>
                      Editar
                    </Button>
                  )}
                  {onDelete && (
                    <Button size="small" color="error" onClick={() => onDelete(row[id])}>
                      Eliminar
                    </Button>
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 20, 50]}
              count={data.length}
              rowsPerPage={rowsPerPage}
              onPageChange={(e, p) => setPage(p)}
              onRowsPerPageChange={e => {
                setRowsPerPage(e.target.value)
                setPage(0)
              }}
              page={page}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

ControlledTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      fieldName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  rows: PropTypes.array,
  pageSize: PropTypes.number,
  loading: PropTypes.bool,
  id: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
}
