import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import {useState, useEffect, useContext} from "react"
import {getDrinks} from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"
import { SnackContext } from "../../../App"
export default function Drinks(){
  const {drinks} = useContext(SnackContext)

  return(
    <>
      <Head title="Bebidas"/>
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
    )
}
