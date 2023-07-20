import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useState, useEffect} from "react"
import { getPizzas } from "../../../services/api"
export default function Pizzas(){
  const [Pizzas , serPizzas ] = useState([])

  useEffect(() =>
  {
    ;(async () =>{
      const IceCreamsRequest = await getPizzas()
      serPizzas(IceCreamsRequest.data)
    })()
  },[])

  return(
    <>
      <Head title="Pizzas"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={Pizzas}></Snacks>
    </>
    )
}
