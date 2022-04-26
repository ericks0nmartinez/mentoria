
import type { NextPage } from 'next'
import { useRouter } from "next/router"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from '../../../../src/Components/Banner/styles'

const Home: NextPage = () => {
  const [dados, setDados] = useState([])
  const [query, setQuery] = useState([])
  const router = useRouter()
  const handler = async (params: any) => {
    console.log(params)
    const response = await axios.get(`http://localhost:3000/api/basico?conteudo=${params}`)
    setDados(response.data['basico'])
  }

  useEffect(() => {
    console.log(router.query.conteudo)
    handler(router.query.conteudo)
  }, [router.query])
  return (
      <>
        <h1>{`${router.query.conteudo}`.replaceAll('-',' ')}</h1>
        <h2>Opções de especilicações basicas</h2>
        {dados?.map((item: any, index: number) => <Button key={index}><a href={`/${router.query.skill}/${router.query.nivel}/${router.query.conteudo}/${item.replaceAll(' ','-')}`}>{item}</a></Button>)}
      </>
    )
  }



export default Home