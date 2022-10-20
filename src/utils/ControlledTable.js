import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
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

export default function ControlledTable({ columns, rows: data, pageSize, loading, id = '_id' }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pageSize)
  const rows = useMemo(() => {
    const start = page * rowsPerPage
    const end = start + rowsPerPage
    return data.slice(start, end)
  }, [data, page, rowsPerPage])
  return (
    <>
      <TableContainer component={Paper}>
        {loading && (
          <Box>
            <LinearProgress />
          </Box>
        )}
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(col => (
                <TableCell key={col.fieldName}>{col.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row[id]}>
                {columns.map(col => (
                  <TableCell key={`${row[id]}.${col.fieldName}`}>{row[col.fieldName]}</TableCell>
                ))}
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
    </>
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
}
