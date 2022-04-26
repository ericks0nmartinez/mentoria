// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = []

const data =[
  {
    nivel: "Informatica-Basica" ,conteudo: [ 
      'História da computação',
      'Dispositivos',
      'Digitação',
      'Editores de textos',
      'Planilhas de calculo',
      'Gerador de apresentação',
      'Internet'
    ]
  },
  {
    nivel: "Informatica-intermediaria" ,conteudo: [
    'Windows 11',
    'Instalação de programas',
    'Word',
    'Excel',
    'Power point',
    'Internet - Conceitos e aplicaçoẽs',
    'Navegação segura na Internet',
    'Internet das coisas - O que é?',
    'Pacote Office'
  ]
  },
  {
    nivel: "Avançado" ,conteudo: [ 'Hardware', 'Software']
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const conteudo = data.find((item) => item.nivel === req.query.nivel)
  res.status(200).json(conteudo)
}
