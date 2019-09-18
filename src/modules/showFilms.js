import React, {Component, Fragment} from 'react';
import './show.less'


export default class ShowFilms extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return(
            <Fragment>
                {this.props.films.map((item,i)=>(
                    <div key={i} className={'filmsItem'}>
                        <p><img src={item.Poster} alt="Нет постера"/></p>
                        <p>{item.Title}</p>
                        <p>{item.Year}</p>
                        <p>{item.Type}</p>
                    </div>
                ))}

            </Fragment>
        );
    }

}