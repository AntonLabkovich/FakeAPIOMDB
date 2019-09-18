import React, {Component, Fragment} from 'react';


export default class Pages extends Component{
    constructor(props){
        super(props);
        this.state={
            flag:false
        }
    }
    render() {
        let rows =[];
        for (let i=1; i<=this.props.numberPage; i++) {
            rows.push(<span key={i} id={i} onClick={()=>this.props.foundData(this.props.keyAPI,
                                                        this.props.titleFilm,
                                                        this.state.flag,
                                                        i)}> {i} </span>)
        }
        console.log(this.props);
        return(
            <div>{rows}</div>
        );
    }
}

{/*{*/}
{/*    for(i=1; i<=this.props.numberPage; i++){*/}
{/*        <span id={i} onClick={()=>this.props.foundData(this.props.keyAPI,*/}
{/*                                            document.getElementById('search').value,*/}
{/*                                            i)}> {item}</span>*/}
{/*    }*/}
{/*}*/}