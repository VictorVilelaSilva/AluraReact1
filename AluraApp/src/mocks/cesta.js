import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import Abobora from '../../assets/frutas/Abóbora.png';
import Batata from '../../assets/frutas/Batata.png';
import Pepino from '../../assets/frutas/Pepino.png';
const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
    botao: "Comprar",
  },
  itens:{
    titulo: "Itens da cesta",
    lista:[
      {
      nome: "Tomate",
      imagem : tomate,
      },
      {
      nome: "Brócolis",
      imagem : brocolis,
      },
      {
      nome: "Abóbora",
      imagem : Abobora,
      },
      {
      nome: "Batata",
      imagem : Batata,
      },  
      {
      nome: "Pepino",
      imagem : Pepino,
      },
    ]
  }
}

export default cesta;