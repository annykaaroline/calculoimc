import { render } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";

/* class Pagina extends React.Component {
    acao = () => {
        alert("Evento de clique")
    }

    render () {
        return <button onClick={this.acao}>Clique Aqui !</button>
    }
}
ReactDom.render(<Pagina />, document.getElementById('root'));
*/

/*class Pagina extends React.Component {
    acao = (elemento) => {
    switch(elemento.target.value){
        case "Blumenau":
            alert("Cidade aonde é realizada a Oktoberfest")
            break
            case "Brusque": 
            alert("Cidade aonde é realizada a Fenareco")
            break
            default:
                alert("Favor selecionar uma cidade")
 }

}
render(){
    return(
        <select onChange={this.acao}>
        <option>Ecolha uma cidade</option>
        <option>Blumenau</option>
        <option>Brusque</option>
        </select>
    );
}
}
ReactDom.render(<Pagina />, document.getElementById('root'));
*/

class Pagina extends React.Component{
    acao = (evento) => {
        evento.preventDefault();

        alert("Enviando formulário");

    }

    render(){
        return(
            <form onSubmit={this.acao}>
                <input type="submit" />
            </form>
        );
    }
}
ReactDom.render(<Pagina />, document.getElementById('root'));