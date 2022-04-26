import type { NextPage } from 'next'
import { useRouter } from "next/router"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from '../../../src/Components/Banner/styles'

const Home: NextPage = () => {
  const [dados, setDados] = useState([])
  const [query, setQuery] = useState([])
  const router = useRouter()
  const handler = async (params: any) => {
    console.log(params)
    const response = await axios.get(`http://localhost:3000/api/conteudo?nivel=${params}`)
    setDados(response.data['conteudo'])
  }

  useEffect(() => {
    console.log(router.query)
    handler(router.query.nivel)
  }, [router.query])
  return (
      <>
        <h1>{`${router.query.nivel}`.replaceAll('-',' ')}</h1>
        <h2>Opções de conteudo de estudo</h2>
        {dados?.map((item: any, index: number) => <Button key={index}><a href={`/${router.query.skill}/${router.query.nivel}/${item.replaceAll(' ','-')}`}>{item}</a></Button>)}
      </>
    )
  }



export default Home