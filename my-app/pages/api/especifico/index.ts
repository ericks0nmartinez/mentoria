// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = []

const data =[
  {
    basico: "Sistema-Operacional" ,especifico: [ 
      'Windows',
      'Linux',
      'MacOs',
      'Rede de computadores',
    ]
  },
  {
    basico: "Desenvolvimento-de-software" ,especifico: [
    'Javascript',
    'QA',
    'HTML 5 + CSS 3',
    'Javascript moderno (ES6+)',
    'Typescript',
    'JSON',
    'Dev Tools',
    'HTTP - HTTPs - APIs REST',
    'Front end',
    'Back end',
    'Criação de portfólio',
  ]
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const especificacoes = data.find((item) => item.basico === req.query.basico)
  res.status(200).json(especificacoes)
}
