import React, {Component, Fragment} from 'react';
import InputSearch from "./modules/inputSearch";
import ShowFilms from './modules/showFilms';
import Pages from "./modules/pages";



export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            keyAPI: '1f6c9231',
            films:[],
            numberPage:0,
            titleFilm:'',
            idPages: 1,
            flag:true
        }
    }

    render() {
        console.log('фильмы', this.state.films);
        return(
            <div id={'allContent'}>
                <InputSearch keyAPI={this.state.keyAPI}
                             foundData={this.foundData}/>
                {this.state.films.length!==0?<ShowFilms films={this.state.films}
                                                        foundData={this.foundData}/>:null}
                {/*{this.state.numberPage.length!==1?<Pages foundData={this.foundData}*/}
                {/*                                         keyAPI={this.state.keyAPI}*/}
                {/*                                         numberPage={this.state.numberPage}*/}
                {/*                                             titleFilm={this.state.titleFilm}*/}
                {/*/>:null}*/}
            </div>
        );
    }

    foundData = (keyAPI,name,flag) => {
        this.setState({
            idPages:1
        });
            fetch(`http://www.omdbapi.com/?apikey=${keyAPI}&s=${name}&page=${this.state.idPages}`)
            .then((response) => response.json())
            .then((items) => {
                this.setState({
                    numberPage:Math.ceil((+items.totalResults)/10),
                    films: items.Search,
                });
            });
        flag?
        this.setState({
            titleFilm: document.getElementById('search').value
        }):null;
        window.addEventListener('scroll',this.scrollShowFilms)
    };


    scrollText=()=>{
        let scrollValueBottom = (document.documentElement.scrollHeight -
                                document.documentElement.scrollTop -
                                document.documentElement.clientHeight);
        scrollValueBottom===1?console.log(123):null;
        console.log(pageYOffset)
    };

    scrollShowFilms=()=>{
        let scrollValueBottom = (document.documentElement.scrollHeight -
            document.documentElement.scrollTop -
            document.documentElement.clientHeight);

        if(scrollValueBottom<2 && this.state.numberPage!==this.state.idPages && this.state.flag) {
            this.setState({
                idPages: this.state.idPages+1,
                flag:!this.state.flag
            });
            fetch(`http://www.omdbapi.com/?apikey=${this.state.keyAPI}&s=${this.state.titleFilm}&page=${this.state.idPages}`)
                .then((response) => response.json())
                .then((items) => {
                    this.setState({
                        films: [...this.state.films,...items.Search],
                        flag:!this.state.flag
                    });
                })
        }
    }
}
