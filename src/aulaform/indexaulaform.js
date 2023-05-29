import React from "react";
import ReactDOM from "react-dom";

import Div1 from "./Div";
import Agrupamento from "./Divh1h2";
import Calendario from "./Calendario";
import Tabela from "./Tabela";
import Video from "./Video";

const lista = (
 <div>
    <Div1 />
    <Agrupamento />
    <Calendario />
    <Tabela />
    <Video />
    
 </div>

);


ReactDOM.render(lista, document.getElementById('root'))


