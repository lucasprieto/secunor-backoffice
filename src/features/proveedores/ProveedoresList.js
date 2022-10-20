import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ControlledTable from '../../utils/ControlledTable'
import { selectList, selectStatus, listAsync } from './proveedorSlice'

const tableColumns = [
  { fieldName: 'nombre', name: 'Nombre' },
  { fieldName: 'direccion', name: 'Direccion' },
  { fieldName: 'telefono', name: 'Telefono' },
  { fieldName: 'estado', name: 'Estado' },
]

export default function ProveedoresList() {
  const dispatch = useDispatch()
  const list = useSelector(selectList)
  const networkStatus = useSelector(selectStatus)

  useEffect(() => {
    dispatch(listAsync())
  }, [])

  return (
    <div>
      <ControlledTable
        columns={tableColumns}
        rows={list}
        pageSize={10}
        loading={networkStatus === 'loading'}
        id="_id"
        onDelete={id => console.log(id)}
        onEdit={(id, data) => console.log({ id, data })}
      />
    </div>
  )
}
