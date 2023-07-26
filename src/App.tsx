import { BrowserRouter } from 'react-router-dom'
import { createContext, useState, useEffect} from 'react'
import { AppRoutes } from './routes'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackData } from './interfaces/SnackData'
import { getBurgers, getDrinks, getIceCreams, getPizzas } from './services/api'

interface SnackContexProt{
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}
 export const SnackContext = createContext({} as SnackContexProt)


export default function App() {
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
  return (
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider value={{burgers, pizzas,drinks, iceCreams}}>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
        </SnackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}
