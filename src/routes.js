import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomeView from './views/HomeView'
import NotFoundView from './views/NotFoundView'
import Layout from './features/layout/Layout'
import ClientesView from './features/clientes/ClientesView'
import ProveedoresView from './features/proveedores/Proveedores'
import ProveedoresList from './features/proveedores/ProveedoresList'
import NewProveedor from './features/proveedores/NewProveedor'
import Proveedor from './features/proveedores/Proveedor'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} handle={{ name: 'Inicio' }}>
      <Route index element={<HomeView />} />
      <Route path="clientes/*" element={<ClientesView />} handle={{ name: 'Clientes' }} />
      <Route path="proveedores" element={<ProveedoresView />} handle={{ name: 'Proveedores' }}>
        <Route path=":proveedorId" element={<Proveedor />} />
        <Route path="nuevo" element={<NewProveedor />} handle={{ name: 'Crear Proveedor' }} />
        <Route index element={<ProveedoresList />} />
      </Route>
      <Route path="trabajos" element={<HomeView />} handle={{ name: 'Trabajos' }} />
      <Route path="agenda" element={<HomeView />} handle={{ name: 'Agenda' }} />
      <Route path="reclamos" element={<HomeView />} handle={{ name: 'Reclamos' }} />
      <Route path="*" element={<NotFoundView />} handle={{ name: '404' }} />
    </Route>
  )
)

export { router }
