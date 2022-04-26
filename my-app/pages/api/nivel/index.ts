// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = []

const data =[
  {
    skill: "Hard-skills", nivel: ['Informatica Basica', 'Informatica intermediaria', 'Avançado' ]
  },
  {
    skill: "Soft-skills", nivel: [
      'Foco no cliente',
      'Empatia',
      'Comunicação',
      'Pensamento Critico',
      'Autoconhecimento',
      'Atitude positiva',
      'Inteligencia Emocional',
      'Iniciativa',
      'Trabalho em equipe',
      'Ética no trabalho',
      'Inglês',
    ]
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const skills = data.find((item) => item.skill === req.query.skill)
  res.status(200).json(skills)
}
