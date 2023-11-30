import { Container } from "./styles"
import {ReactComponent as BurgerIcon} from "../../assets/burger.svg"
import {ReactComponent as PizzaIcon} from "../../assets/pizza.svg"
import {ReactComponent as SodaIcon} from "../../assets/soda.svg"
import {ReactComponent as IceCreamIcon} from "../../assets/ice-cream.svg"

import menuImg from '../../assets/menu.svg'
export function Sidenar(){
  return <Container>
    <button type="button">
      <img src={menuImg} alt=""/>
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
