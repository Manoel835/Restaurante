import React from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'

export default function Drinks() {
  const data = [
    {
      id: 1,
      snack: 'drink',
      name: 'Coca-Cola 2l',
      description:
        'A tradicional Coca-Cola em sua versão de 2 litros.',
      price: 12,
      image: 'https://i.imgur.com/Lg3aKhf.jpg',
    },
    {
      id: 2,
      snack: 'drink',
      name: 'Guaraná Antartica',
      description:
        'O tradicional Guaraná Antartica que a família brasileira adora.',
      price: 6.5,
      image: 'https://i.imgur.com/hOBrOIm.jpg',
    },
    {
      id: 3,
      snack: 'drink',
      name: 'Suco de Abacaxi',
      description:
        'Suco natural de abacaxi com leves incrementos de hortelã.',
      price: 6.5,
      image: 'https://i.imgur.com/VV9qTMh.jpg',
    },
  ]
  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}></Snacks>

    </>
  )
}
