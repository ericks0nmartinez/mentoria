// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = []

const data =[
  {
    especifico: 'Windows', aprofundado: [ 
      'Windows XP',
      'Windows 7',
      'Windows 10',
      'Windows 11',
    ]
  },
  {
    especifico: 'Linux', aprofundado: [ 
      'Ubuntu',
      'Mint',
      'Debian',
      'Fedora',
    ]
  },
  {
    especifico: 'QA', aprofundado: [
      '1 - Tipos de Teste',
      '1.1 - Tecnicas de testes',
      '1.1.1 - Teste caixa Preta',
      '1.1.2 - Teste caixa Cinza',
      '1.1.3 - Teste caixa Branca',
      '2 - Teste Manual',
      '2.1 - Tipos de testes funcionais',
      '2.1.1 - Teste Acessibilidade',
      '2.1.2 - Teste regressivo',
      '2.1.3 - Teste exploratório',
      '2.1.4 - Teste de usabilidade',
      '2.1.5 - Teste de Sanidade',
      '2.1.6 - Monkey testing',
      '2.1.7 - Visual testing',
      '2.2 - Tipos de teste não funcionais.',
      '2.2.1 - Teste de segurança',
      '2.2.2 - Teste de Stress',
      '2.2.3 - Teste de performace',
      '2.2.4 - Teste de carga',
      '2.2.5 - Testes por plataforma',
      '2.3 - Web  testing',
      '2.3.1 - API testing',
      '2.3.2 - Mobile testing',
      '2.3.3 - Database testing',
      '3 - Plano de teste',
      '3.1 - Criar massa de teste',
      '4 - Teste Automatizado',
      '4.1 - Testes com cypress',
      
  ]
  },
  {
    especifico: 'Front-end', aprofundado: [ 
      'HTML 5 e CSS 3',
      'Flex Box',
      'Bootstrap',
      'ReactJS',
      'Redux',
    ]
  },
  {
    especifico: 'Back-end', aprofundado: [ 
      'Fedora',
      'NodeJS',
      'MongoDB',
      'SQL(PostgreSQL)',
    ]
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const especificacoes = data.find((item) => item.especifico === req.query.especifico)
  res.status(200).json(especificacoes)
}
