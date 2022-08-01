const form = document.getElementById("formulario__cadastro")

const cadastraUsuario = (nome, email, senha) => {
  return fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({nome: nome, email: email, senha: senha})
  })
  .then(resposta => {
    return resposta.body
  })
}

const verificaUsuarios = () => {
  return fetch('http://localhost:3000/usuarios')
  .then ( data => {
    if(data.ok){
      return data.json()
    }
    throw new Error('Não foi possível carregar o banco de dados.')
    }
  )
}

const tokenUsuario = () => {
  sessionStorage.getItem('token')
} 



export const usuarioServivce = {
  cadastraUsuario,
  verificaUsuarios
}