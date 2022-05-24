import React, { Component } from 'react' ;

class App extends Component{
constructor(props){  /* PRIMEIRA COISA A SER CARREGADA SERA O CONSTRUTOR AO CHAMAR O COMPONENTE APP. */
    super(props)
    this.state = {
        hora: '00:00:00'
     };
}

componentDidMount(){ /* RODA ELEMENTOS OQUE TEM DENTRO DA FUNÇÃO, EXEMPLO = CONSUMIR API OU NESSE CASO É STARTAR A HORA NA TELA*/
    setInterval(()=>{
        this.setState({hora: new Date()})
        this.setState({hora: new Date().toLocaleTimeString() }) 
    }, 1000);

}

componentDidUpdate(){ /* TODA VEZ QUE ATUALIZA ALGUMA STATE EM ALGUM COMPONENTE A GENTE PODE FAZER ALGUMA COISA */
    console.log('Atualizou!!!');
}

 /*shouldComponentUpdate() ELE RETORNA UM TRUE OU FALSE */ 



    render(){
        return(
            <div>
                <h1>Meu projeto!!{this.state.hora} </h1>
            </div>
        );
    }
   


}

export default App;
