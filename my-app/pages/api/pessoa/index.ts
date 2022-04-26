import type { NextApiRequest, NextApiResponse } from 'next'

type Pessoa = {
  name: string
  cpf: number
  idade: string
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Pessoa>
  ) {
    res.status(200).json({name: "Erickson", cpf: 9999999, idade: "09/08/1988"})
  }