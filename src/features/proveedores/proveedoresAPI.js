const apiUrl = `${process.env.REACT_APP_APIURL}/proveedor`

export function fetchProveedores() {
  return fetch(apiUrl).then(r => r.json())
}

export function fetchProveedor(id) {
  return fetch(`${apiUrl}/${id}`).then(r => r.json())
}

export function createProveedor(data) {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(r => r.json())
}

export function updateProveedor(id, data) {
  return fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(r => r.json())
}

export function deleteProveedor(id) {
  return fetch(`${apiUrl}/${id}`, { method: 'DELETE' }).then(r => r.json())
}
