import { usuarioServivce } from "../service/usuario-service.js";

const formularioCadastro = document.getElementById('formulario__cadastro')

const validacao = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

formularioCadastro.addEventListener("submit", (evento) => {
  evento.preventDefault
  const nome = evento.target.querySelector('[data-nome]').value
  const email = evento.target.querySelector('[data-email]').value
  const senha = evento.target.querySelector('[data-senha]').value
  const confirmaSenha = evento.target.querySelector('[data-confirma-senha]').value
  const match = validacao.test(email)

  if (senha == confirmaSenha && match == true) {
    usuarioServivce.cadastraUsuario(nome, email, senha)
  } else if (!match) {
    alert("O endereço de email está inválido.")
  } else if (senha != confirmaSenha) {
    alert("As senhas não estão iguais.")
  }
}
)
