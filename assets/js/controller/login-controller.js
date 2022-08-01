import { usuarioServivce } from "../service/usuario-service.js";

if (sessionStorage.getItem('Usuario')) {
  window.location.href = 'http://127.0.0.1:5500/perfil.html'
} else {

let formularioLogin = document.querySelector('.formulario__container')

// console.log(formularioLogin)

let acessaUsuarios = await usuarioServivce.verificaUsuarios()

localStorage.setItem('usuarios', JSON.stringify(acessaUsuarios))

let listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) 

console.log(listaUsuarios[4])

formularioLogin.addEventListener("submit", (evento) => {
  evento.preventDefault
  const email = evento.target.querySelector('[data-email').value
  const senha = evento.target.querySelector('[data-senha]').value

console.log('wesley@email.com' == email)

for (let i=0; i < listaUsuarios.length; i++) {
  let comparaEmail = listaUsuarios[i].email === email
  let comparaSenha = listaUsuarios[i].senha === senha
  const usuarioValido = {
    "Email": email,
    "Senha": senha
  }
  if (comparaSenha == true && comparaEmail == true) {
    sessionStorage.setItem('Usuario', JSON.stringify(usuarioValido))
    console.log("Uhum")
    break}
  }
})}
// for (let i=0; i < listaUsuarios.length; i++) {
//   let comparaEmail = listaUsuarios[i].email === email
//   let comparaSenha = listaUsuarios[i].senha === senha
//   if (comparaSenha == true && comparaEmail == true) {
//     sessionStorage.setItem('token', "ValidSession")
//     console.log("Uhum")
//     break}
//   }




// try {
//   listaUsuarios.forEach(usuario => {
//     const comparaEmail = usuario.email === email
//     const comparaSenha = usuario.senha === senha

//     if (comparaSenha == true && comparaEmail == true) {
//       sessionStorage.setItem('token', "ValidSession")
//       window.location.href
//       throw 'Break';
//     }})} catch (erro) {
//       if (erro !== 'Break') throw erro
//     }})