import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { useState, useEffect } from 'react'
import Snacks from '../../../components/Snacks'
import { getBurgers } from '../../../services/api'
export default function Burgers() {

  const [burgers, setBurgers] = useState([])
  useEffect(() => {
    (async() =>{
      const burgerRequest = await getBurgers()
      setBurgers(burgerRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Hambúrgueres' description='Os melhores Hambúrgues' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
