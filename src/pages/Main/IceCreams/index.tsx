import React from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'

export default function IceCreams() {
  const data = [
    {
      id: 1,
      snack: 'ice-cream',
      name: 'Casquinha',
      description: 'A tradicional casquinha de sorvete.',
      price: 4.5,
      image: 'https://i.imgur.com/YGmeoCm.jpg',
    },
    {
      id: 2,
      snack: 'ice-cream',
      name: 'Chocolate com granulado',
      description: 'Sorvete de chocolate com granulado de chocolate para você se deliciar.',
      price: 5.5,
      image: 'https://i.imgur.com/osAHOLe.jpg',
    },
    {
      id: 3,
      snack: 'ice-cream',
      name: 'Flocos',
      description: 'Tradicional sorvete de floco para você se deliciar.',
      price: 5.5,
      image: 'https://i.imgur.com/qgnFLiy.jpg',
    },
  ]
  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
