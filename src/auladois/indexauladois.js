import React from "react";
import  ReactDOM  from "react-dom";

/*
const mensagem1 = <h1>UTILIZANDO React JSX!</h1>;
ReactDOM.render(mensagem1, document.getElementById('root'));
*/

/*
const mensagem = React.createElement ('h1',{}, 'Não utlizando jsx:(');
ReactDOM.render (mensagem, document.getElementById('root'));
*/

/*
const expressoes = <h1>{5 + 5}</h1>;
ReactDOM.render(expressoes, document.getElementById('root'));
*/

class Curso extends React.Component{
    render() {
        return <p>O curso que faço na Apex é Front-End</p>;
    }
}

class Pessoa extends React.Component{
    render() {
        return(
            <div>
                <h1>Olá, meu nome é Ana</h1>
                <Curso />
            </div>
        );
    }
}
ReactDOM.render(<Pessoa />, document.getElementById('root'));