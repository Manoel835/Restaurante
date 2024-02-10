import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'
import { getPizzas } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'

export default function Pizza() {
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  useEffect(() => {
    (async() =>{
      const pizzasRequest = await getPizzas()
      setPizzas(pizzasRequest.data)
    })()
  }, [])
  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
