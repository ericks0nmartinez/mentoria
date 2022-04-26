import type { NextPage } from 'next'
import Portfolio from '../src/Components/Portfolio'
import axios from 'axios'

const Home: NextPage = ({dados}: any) => {
  return (
    <>
      <Portfolio />
        {dados.map((item: any, index: any) => <button key={index}><a href={`/${item.replaceAll(' ','-')}`}>{item}</a></button>)}
    </>
  )
}

Home.getInitialProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/skills`)
  return {dados: response.data}
}

export default Home
