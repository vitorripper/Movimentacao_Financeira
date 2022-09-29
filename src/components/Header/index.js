import { Link } from "react-router-dom";
import './style.css';
import logo from './bolsa-de-dinheiro.png';

function Header(){



    return(

        <header>
            
        <nav>
            <a href ="/"><img className = "logo"  src = {logo} alt="mestre"></img></a>
            

            <ul className="list">
                <li><a href ="/">Home</a></li>
                <li><a href ="/cadastro">Cadastro</a></li>
                <li><a href ="/contacorrente">Conta Corrente</a></li>
                <li><a href ="/financiamento">Financiamento</a></li>
                <li><a href ="/sobrenos">Sobre Nós</a></li>
                    
            </ul>

            <div className="menu">
                <button><img className="icon" src=""></img></button>
            </div>
            
        </nav>

        </header>
        
    )
}

export default Header;



