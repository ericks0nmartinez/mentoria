import Link from 'next/link'
import foto from '../../../public/senior.png'
import iconSeta from '../../../public/seta-direita.png'
import * as S from './styles'
import Image from 'next/image'


const Perfil = () => {
    return(
        <S.Container>
            <S.IntroPerfil>
                <h1>{`I'm Erickson Martinez QA and Front end Develop`}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magni obcaecati fugit deserunt iure dolores pariatur illum vel, nemo tempora, temporibus optio enim labore perferendis, quasi officia? Soluta, optio repudiandae.</p>
                <S.Button><Link href="/hard-skills/avancado/software/html-5">HIRE ME</Link><Image width={16} height={16} src={iconSeta}/></S.Button>
            </S.IntroPerfil>
            <Image width={300} height={400} src={foto} />
        </S.Container>
    )
}

export default Perfil