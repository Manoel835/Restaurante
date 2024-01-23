import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import PizzaPage from './pages/Main/Pizza'
import DrinksPage from './pages/Main/Drinks'
import IceCreams from './pages/Main/IceCreams'
export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzaPage />} />
        <Route path='drinks' element={<DrinksPage />} />
        <Route path='ice-creams' element={<IceCreams />} />
      </Route>
    </Routes>
  )
}
