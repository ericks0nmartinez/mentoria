import type { NextPage } from 'next'
import { useRouter } from "next/router"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from '../../src/Components/Banner/styles'

const Home: NextPage = () => {
  const [dados, setDados] = useState([])
  const [query, setQuery] = useState([])
  const router = useRouter()
  const handler = async (params: any) => {
    const response = await axios.get(`http://localhost:3000/api/nivel?skill=${params}`)
    setDados(response.data['nivel'])
  }

  useEffect(() => {
    handler(router.query.skill)
  }, [router.query])
  return (
      <>
        <h1>{router.query.skill} </h1>
        <h2>{router.query.skill === "Hard-skills"? "Opções de nivel de conhecimento": "Opções de comportamentos"}</h2>
        {dados?.map((item: any, index: number) => <Button key={index}><a href={`/${router.query.skill}/${item.replaceAll(' ','-')}`}>{item}</a></Button>)}
      </>
    )
  }



export default Home