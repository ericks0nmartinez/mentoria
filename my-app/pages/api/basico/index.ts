// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = []

const data =[
  {
    conteudo: "Hardware", basico: [ 
      'Periféricos',
      'Sistema Operacional',
      'Modem',
      'Roteadores',
      'Servidores',
    ]
  },
  {
    conteudo: "Software", basico: [
    'Github',
    'Logica de programação',
    'HTML 5',
    'Desenvolvimento de software'
  ]
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const basicos = data.find((item) => item.conteudo === req.query.conteudo)
  res.status(200).json(basicos)
}
