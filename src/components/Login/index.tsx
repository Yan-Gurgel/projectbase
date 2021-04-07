import { Container } from './styles';
import logoImg from '../../assets/logo.png';


export function Body() {
    return (

        <Container>

            <div className="quadro">
                <div className="logo">
                    <img className="logo" src={logoImg} alt="Logo" />
                    <span>VOTU RFID</span>
                </div>

                <form action="">
                    <section>

                        <div>
                            <div>
                                <img src="" alt="" />
                                <input id="login" name="Login" type="text" placeholder="E-mail" />
                            </div>
                        </div>

                        <div>
                            <div>
                                <img src="" alt="" />
                                <input id="password" name="password" type="password" placeholder="Senha" />
                                <a href="" /*tabIndex="-1"*/></a>
                                <img src="" alt="" />
                            </div>
                        </div>

                    </section>
                    <a href="">Esqueci minha senha</a>
                    <button type="submit">Entrar</button>
                    <div>
                        Sem acesso?
                   <a href="">Registri-se</a>
                    </div>
                    <div>
                        _____
               </div>
                    <a href="">SITE VOTU</a>
                </form>
            </div>

        </Container>

    );
}