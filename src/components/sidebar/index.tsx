import { Container } from "./styles"
import { useState } from "react"
import {ReactComponent as BurgerIcon} from "../../assets/burger.svg"
import {ReactComponent as PizzaIcon} from "../../assets/pizza.svg"
import {ReactComponent as SodaIcon} from "../../assets/soda.svg"
import {ReactComponent as IceCreamIcon} from "../../assets/ice-cream.svg"

import menuImg from '../../assets/menu.svg'
export function Sidenar(){

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
  return <Container isMenuOpen={menuOpen}>
    <button type="button" onClick={handleToggleMenu}>
      <img src={menuImg} alt="Abrir e fechar menu"/>
    </button>
    <nav>
      <ul>
        <li>
          <a href="#" className="active">
            <BurgerIcon/>
            <span>Hambúrgueres</span>
          </a>
          <a href="#" >
            <PizzaIcon/>
            <span>Pizza</span>
          </a>
          <a href="#" >
            <SodaIcon/>
            <span>Bebidas</span>
          </a>
          <a href="#" >
            <IceCreamIcon/>
            <span>Sorvetes</span>
          </a>
        </li>
      </ul>
    </nav>
  </Container>
}
