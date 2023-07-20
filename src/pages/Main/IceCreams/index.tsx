import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useEffect, useState } from "react"
import { getIceCreams } from "../../../services/api"
export default function IceCreams(){
  const [IceCreams , setIceCreams ] = useState([])

  useEffect(() =>
  {
    ;(async () =>{
      const IceCreamsRequest = await getIceCreams()
      setIceCreams(IceCreamsRequest.data)
    })()
  },[])

  return(

    <>
      <Head title="Sorvetes"/>
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={IceCreams}></Snacks>
    </>
    )
  }
