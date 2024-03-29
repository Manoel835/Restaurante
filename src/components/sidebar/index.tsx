import { Container } from './styles'
import { useState } from 'react'
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import { NavLink } from 'react-router-dom'
import menuImg from '../../assets/menu.svg'
export function Sidenar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='Abrir e fechar menu' />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <BurgerIcon />
              <span>Hambúrgueres</span>
            </NavLink>
            <NavLink to='pizzas'>
              <PizzaIcon />
              <span>Pizza</span>
            </NavLink>
            <NavLink to='drinks'>
              <SodaIcon />
              <span>Bebidas</span>
            </NavLink>
            <NavLink to='ice-creams'>
              <IceCreamIcon />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
