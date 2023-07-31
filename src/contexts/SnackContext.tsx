import { createContext, useState, useEffect, ReactNode} from 'react'
import { SnackData } from '../interfaces/SnackData'
import { getBurgers, getPizzas, getDrinks, getIceCreams } from '../services/api'

interface SnackContexProt{
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}
interface SnackProviderProps{
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContexProt)

export function SnackProvider({
  children
}: SnackProviderProps){
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() =>
  {
    ;(async () =>{
      const burgerRequest = await getBurgers()
      const pizzaRequest = await getPizzas()
      const drinksRequest = await getDrinks()
      const iceCreamRequest = await getIceCreams()

      const requests = [burgerRequest, pizzaRequest, drinksRequest, iceCreamRequest]

      const[{ data: burgerResponse}, { data: pizzaResponse}, { data: drinksResponse}, { data: iceCreamResponse}] = await Promise.all(requests)

      setBurgers(burgerResponse)
      setPizzas(pizzaResponse)
      setDinks(drinksResponse)
      setIceCreams(iceCreamResponse)

    })()
  },[])
  return(
    <SnackContext.Provider value={{burgers, pizzas,drinks, iceCreams}}>
      {children}
    </SnackContext.Provider>
  )
}
