import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
export default function Burgers(){
  const data = [{
    id: 1,
    snack: 'burger',
    name: 'Mega',
    description:'O artesanal tamanho família recheado com trÊs carnes suculentas, queijo e bacon',
    price: 25.5,
    image:'https://i.imgur.com/upjIUnG.jpg',
  },
  {
    id: 2,
    snack: 'burger',
    name: 'Extra bacon',
    description:'Para os amantes de bacon, possui em todas as suas camadas bacn bem assado',
    price: 23.5,
    image:'https://i.imgur.com/B4J04AJ.jpg',
  }]
  return(
  <>
    <Head title="Hambúrgueres" />
    <SnackTitle>Hambúrgues</SnackTitle>
    <Snacks snacks={data}></Snacks>
  </>
  )
}

