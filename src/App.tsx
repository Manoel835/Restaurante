import { BrowserRouter } from 'react-router-dom'
import { createContext} from 'react'
import { AppRoutes } from './routes'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackProvider} from './contexts/SnackContext'
import { SnackData } from './interfaces/SnackData'

interface SnackContexProt{
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}
 export const SnackContext = createContext({} as SnackContexProt)


export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
