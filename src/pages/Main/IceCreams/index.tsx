import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useContext, useEffect, useState } from "react"
import { getIceCreams } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"
import { SnackContext } from "../../../App"
export default function IceCreams(){
  const {iceCreams} = useContext(SnackContext)

  return(

    <>
      <Head title="Sorvetes"/>
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
    )
  }
