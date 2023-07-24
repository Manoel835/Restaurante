import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useState, useEffect } from "react"
import { getBurgers } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"
export default function Burgers(){
  const [burgers, setBurgers] = useState<SnackData[]>([])

  useEffect(() =>
  {
    ;(async () =>{
      const burgerRequest = await getBurgers()
      setBurgers(burgerRequest.data)
    })()
  },[])

  return(
  <>
    <Head title="Hambúrgueres" />
    <SnackTitle>Hambúrgues</SnackTitle>
    <Snacks snacks={burgers}></Snacks>
  </>
  )
}

