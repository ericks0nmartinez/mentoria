// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const data = [
    { id: 1, name: "Hard skills", sesssion:[
    {name: "Informatica básica", subSession: ["História da Computação", "Dispositivos", "Digitação", "Editores de textos", "Planilhas e calculos", "Geradores de Apresentações", "Internet"]},
    {name: "Informatica Intermediaria",subSession: ["Windows 11", "Instalar programas", "Word - Modulo Intermediario", "Excel - Modulo Intermediario", "Power Point- Modulo Intermediario", "Internet - Conceitos e Aplicações", "Navegação Segura na internet", "O que é internet das coisas?", "Pacote Office"]},
    {name: "Avançada",subSession: [{name:"HardWare",session:["Periféricos",{name: "Sistema Operacional", subSession: [{name: "Windows", session:["Windows XP","Windows 7","Windows 10","Windows 11"]},{name: "Linux", session: ["Ubuntu", "Mint", "Debian", "Fedora"]},"MacOS"]},"Rede de Computadores", "Modem", "Roteadores", "Servidores"]},
    {name: "Software",session: ["GitHub", "Logica de Programação", {name: "HTML 5", session: [
    {tag: "<header></header>", description:"definem cabeçalho, todo conteúdo que estiver dentro dela faz parte de um cabeçalho da pagina."},
    {tag: "<main></main>", description:"o conteúdo principal relacionado com o tópico central da página"},
    {tag: "<section></section>", description:" definem uma sessão para sua página"},
    {tag: "erickson", description: "Martinez"},
    {tag: "<article></article>", description:" definem um artigo da sua página. Utilizadas para separar o conteúdo da sua página."},
    {tag: "<aside></aside>", description:" representam uma seção de uma página cujo conteúdo é tangencialmente relacionado ao conteúdo do seu entorno, que poderia ser considerado separado do conteúdo"},
    {tag: "<nav></nav>", description:" define um conteúdo de navegação,  listas e na criação de menus"},
    {tag: "<div></div>", description:" Define uma divisão da página. Desta forma, funciona como um container para conteúdo de fluxo."},
    {tag: "<footer></footer>", description:" definem um rodapé para a página"},]}, {name: "Desenvolvimento de Software", subSession: [ "Javascript", {name: "QA",session: ["Teste Manual", "Teste automatizado"]}, "Javascript Moderno (ES6+)", "Typescript", "JSON", "Dev Tools", "HTTPS - APIs REST",
    {name: "front End", session: ["HTML5 + CSS 3", "BootStrap", "React JS", "Redux"]},
    {name: "Back End", session: ["Node JS", "MongoDB", "SQL (PostgreSQL)"]} ,"Criação de Portfolio"]}]}]}]},
    { id: 2, name: "Soft skills", sesssion: ["Foco no cliente", "Empatia", "Comunicação", "Pensamento critico", "AutoConhecimento", "Atitude positiva", "Inteligência emocional", "Iniciativa", "Trabalho em equipe", "Ética no trabalho"]}
    ]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse//<Data>
) {
  res.status(200).json(data)
}
