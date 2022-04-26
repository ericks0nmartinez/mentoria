
import type { NextPage } from 'next'
import { useRouter } from "next/router"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from '../../../../../src/Components/Banner/styles'

const Home: NextPage = () => {
  const [dados, setDados] = useState([])
  const [query, setQuery] = useState([])
  const router = useRouter()
  const handler = async (params: any) => {
    console.log(params)
    const response = await axios.get(`http://localhost:3000/api/especifico?basico=${params}`)
    setDados(response.data['especifico'])
  }

  useEffect(() => {
    console.log(router.query)
    handler(router.query.basico)
  }, [router.query])
  return (
      <>
        <h1>{`${router.query.basico}`.replaceAll('-',' ')}</h1>
        {dados?.map((item: any, index: number) => <Button key={index}><a href={`/${router.query.skill}/${router.query.nivel}/${router.query.conteudo}/${router.query.basico}/${item.replaceAll(' ','-')}`}>{item}</a></Button>)}
      </>
    )
  }



export default Home