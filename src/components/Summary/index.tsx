import Entradas from '../../assets/Entradas.svg';
import Saídas from '../../assets/Saídas.svg';
import Total from '../../assets/Total.svg';
import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Entradas} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Saídas} alt="Saída"/>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={Total} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}