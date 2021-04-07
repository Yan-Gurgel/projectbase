import { Container } from './styles'
import homeImg from '../../assets/home.svg'

export function Header() {
    return (

        <Container>
            <button>
                <img className="home" src={homeImg} alt="Home" />
            </button>
            <ul className="menu">
                <li><a href="/">Início</a></li>

                <li><a href="/">O que é RFID</a>
                    <ul className="submenu-1-rfid">
                        <li><a href="/">Identificação por Radiofrequência (RFID)</a></li>
                        <li><a href="/">Aplicação do RFID na indústria</a></li>
                        <li><a href="/">Aplicação no varejo</a></li>
                    </ul>
                </li>

                <li><a href="/">VRA</a>
                    <ul className="submenu-1">
                        <li><a href="/">Antenas</a></li>
                        <li><a href="/">Acessórios</a></li>
                        <li><a href="/">Clientes</a></li>
                        <li><a href="/">Parceiros</a></li>

                    </ul>
                </li>

                <li><a href="/">VRS</a>
                    <ul className="submenu-1">
                        <li><a href="/">Serviços</a></li>
                        <li><a href="/">Equipamentos</a></li>
                        <li><a href="/">Clientes</a></li>
                        <li><a href="/">Parceiros</a></li>
                    </ul>
                </li>

                <li><a href="/">Quem somos</a>
                    <ul className="submenu-1-quem">
                        <li><a href="/">Nossa História</a></li>
                        <li><a href="/">Motivação</a></li>
                    </ul>
                </li>

            </ul>
        </Container>
    );
}