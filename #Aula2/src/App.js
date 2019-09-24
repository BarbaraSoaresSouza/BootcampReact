import React, {Component} from 'react';


class MeuBtn extends Component{
    render(){

        return <button onClick={()=>this.props.change(this.props.text)}>{this.props.text}</button>
    }
}

    class MeuTitulo extends Component{
        render(){
    
            return <h2> Você clicou no {this.props.title}</h2>
        }


}
export default class App extends Component{

    constructor(props){
        super(props);
this.state={

    btnAtual:''
}

    }



handleChange = (nome) =>{

    this.setState({


        btnAtual:nome


    })

}


render(){

    console.log(this.state);

return( 
<div>

        <MeuTitulo title={this.state.btnAtual} />
        <MeuBtn change = {this.handleChange} text="Botao 01"/>
        <MeuBtn change = {this.handleChange} text="Botao 02"/>
        <MeuBtn change = {this.handleChange}  text="Botao 03"/>

        </div>


    )

}


}

