import { Container } from "./styles"
import {ReactComponent as BurgerIcon} from "../../assets/burger.svg"
import menuImg from '../../assets/menu.svg'
export function Sidenar(){
  return <Container>
    <button type="button">
      <img src={menuImg}/>
    </button>
    <nav>
      <ul>
        <li>
          <a href="#" className="active">
            <BurgerIcon/>
            <span>Hambúrgueres</span>
          </a>
        </li>
      </ul>
    </nav>
  </Container>
}
