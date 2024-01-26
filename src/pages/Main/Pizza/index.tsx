import React from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'

export default function Pizza() {
  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Calabresa',
      description: 'A tradicional pizza de calabresa.',
      price: 26.5,
      image: 'https://i.imgur.com/5rjJGkV.jpg',
    },
    {
      id: 2,
      snack: 'pizza',
      name: 'Portuguesa',
      description: 'Pizza recheada com presunto, queijo, ovos, cebola e azeitonas.',
      price: 25.5,
      image: 'https://i.imgur.com/WCoyGoI.jpg',
    },
  ]
  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
