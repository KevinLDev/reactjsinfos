import React, {Component} From 'react';

class Equipe extends Component{
    render(){
return(
    <div>
    <Sobre nome={this.props.nome} cargo={this.props.cargo}
        idade={this.props.idade}/> 

        <hr/>
    
    </div>
);

    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
            <h2>Ola sou o(a) {this.props.nome}</h2>
            <h3>Cargo: {this.props.cargo} </h3>
            <h3>Idade: {this.props.idade}</h3>
            
            </div>
        );
    }
}

const Social = () =>{
    return(
        <div>
        <a>Facebook</a>
        <a>LinkedIn</a>

        </div>
    )
}

function App(){
    return(
        <div>

        <h1>Conheça nossa equipe:</h1>
        <Equipe nome="Kevin" cargo="Programador" idade="25"/>
        <Equipe nome="Gabriel" cargo="Designer" idade="20"/>
        
        </div>
    )
}

export default App;