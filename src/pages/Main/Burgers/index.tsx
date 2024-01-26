import React from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'
export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description:
        'O artesanal tamanho família recheado com três carnes succulentas, queijo, bacon, alface, tomate, cebola roxa e molho especial da casa.',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra Bacon',
      description:
        'Criado para os amantes de bacon, o artesanal recheado com duas carnes, queijo, bacon e molho especial da casa.',
      price: 25.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
  ]
  return (
    <>
      <Head title='Hambúrgueres' description='Os melhores Hambúrgues' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
