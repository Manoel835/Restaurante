import { Sidenar } from './../../components/sidebar/index'
import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import logoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidenar/>
      <section>
        <img src={logoImg} alt="Logo" />
        <Outlet/>
      </section>
    </Container>
  )
}
