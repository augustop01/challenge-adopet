const listaPets = () => {
  return fetch('http://localhost:3000/pets')
  .then ( data => {
    if(data.ok){
      return data.json()
    }
    throw new Error('Não foi possível carregar a lista de pets disponíveis.')
    }
  )
}

export const homeService = {
  listaPets
}