import React, {Component, Fragment} from 'react';


export default class InputSearch extends Component{
    constructor(props){
        super(props);
        this.state={
            flag:true
        }
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <input type="text" id={'search'}/>
                <button onClick={()=>this.props.foundData(this.props.keyAPI,
                                    document.getElementById('search').value,
                                    this.state.flag)}>
                    Search
                </button>
            </div>
        );
    }
}