import { homeService } from "../service/home-service.js"

const lista__pets = document.querySelector('.lista__disponiveis')

const inserePet = (imagem, nome, idade, porte, personalidade, local) => {
const inserePetSlot = document.createElement('li')
const petSlot = 
  `
  <img class="cartao__pet__foto" src="assets/img/${imagem}" alt="Foto de ${nome}">
  <div class="cartao__descricao">
    <h4 class="cartao__nome">${nome}</h4>
    <p class="cartao__detalhes">${idade}</p>
    <p class="cartao__detalhes">${porte}</p>
    <p class="cartao__detalhes">${personalidade}</p>
    <p class="cartao__localizacao">${local}</p>
    <a href="#" class="cartao__mensagem">
      <img src="assets/img/icone_mensagem.svg" alt="" class="cartao__mensagem__icone">
      <p class="cartao__mensagem__texto">Falar com responsável</p>
    </a>
  </div>`

inserePetSlot.innerHTML = petSlot
inserePetSlot.classList.add('cartao__pet')

return inserePetSlot
}

const render = async () => {
  try {
    const lista = await homeService.listaPets()

    lista.forEach(pet => {
      lista__pets.appendChild(inserePet(pet.imagem,pet.nome,pet.idade,pet.porte,pet.personalidade,pet.local))
    })
  }
  catch(erro) {
    console.log("Não foi possível carregar.")
    window.location.href = '#'
  }
}

render()
