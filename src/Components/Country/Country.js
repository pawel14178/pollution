import React, {Component} from 'react';
import "./Country.css";
import request from 'superagent';
import Accordion from './Accordion';
import CityDesc from './CityDesc';
import './animations.css';
import LazyHero from 'react-lazy-hero';
import chimney from '../../assets/poll.jpg'


class Country extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             isTyped: false
        }

        this.arr = [
            "Poland", "Germany", "France", "Spain"
        ];        

        this.state = {
            suggestion: [],
            text: '',
            city: []
        };    

         this.loadCities = this.loadCities.bind(this)
    }

    checkCountry = (value) => {
        switch (value.toLowerCase()) {
            case "poland":    this.loadCities ("PL") ;     
                 
                break; 
            case "germany": this.loadCities ("DE") ; 
           
            break;
            case "france": this.loadCities ("FR") ; 
            
            break;
            case "spain": this.loadCities ("ES") ; 
            
            break;
        
            default:  this.loadCities ("") ; 
                break;
        }
    }

    onTextChanged = (e) => {
        const value = e.target.value; 
        this.checkCountry (value);
        let suggestions = [];       
        if (value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.arr.sort().filter(v => regex.test(v));                        
        }
        this.setState({suggestion: suggestions, text: value}); 
        if (suggestions.length > 0){
            if (value.length === suggestions[0].length){
                this.setState({suggestion: [], text: value});
            } 
        }
    }
//13 enter
    handleKey = (e) =>{
        let value;
        let pos = parseInt(-1);

        if (e.keyCode === 40 || e.keyCode === 38){
            if (e.keyCode === 40){                
                    value = this.state.suggestion[++pos]  
                                
               
            }
            if (e.keyCode === 38){
                    value = '';
            }

            this.setState({
                text: value
            })            
        }

        if (e.keyCode === 13){
            this.suggestionSelected(this.state.text);            
        }         
    }

    loadCities (x){
        if (x !== ""){
            request
            .get("https://api.openaq.org/v1/latest?country="+ x +"&order_by=measurements[0].value&sort=desc&limit=10")
            .end((err, resp) => {
                if (!err){
                    const cities = [];
                    console.log(JSON.parse(resp.text));
                    JSON.parse(resp.text).results.map((city) => (
                        cities.push(city.city)
                        
                    ))        
                    this.setState({
                        city: cities
                    })           
                }                
            }) 
        }  
        else{            
            this.setState({
                city: []
            })
        }         
    }

    suggestionSelected (value) {
        this.setState({
            text: value,
            suggestion: []
        })
        this.checkCountry (value);
    }

    clearInput(){
        if (this.state.text){
            this.setState({
                text: '',
                suggestion: []
            })
        }
    }

    renderSuggestion(){

        if (this.state.suggestion.length === 0){
            return null;
        } 
        return(
            <ul className="slideDown">
                {this.state.suggestion.map((item) => <li key={item.city}  onClick={()=> this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    renderCity(){

        const arrCity = this.state.city;

         if (this.state.text){
            return(
                <div className="Accordion-wrap">
                        {arrCity.map((item, i) => 
                        <Accordion header={item}>
                            <CityDesc city={arrCity[i]}></CityDesc>
                        </Accordion>
                        )}                            
  
                </div>
            )
        }
        else{
            return(
                <div className="welcome">
                    <h1>
                        Welcome
                    </h1>
                    <p>
                        In this app you can check the most polluted cities currently in Poland, Germany, Spain and France (by OpanAQ.org) and read about that cities short description (by Wikipedia.org).
                    </p>
                </div>
            );
        } 
    }

    render() {       
        
        return (
            <div className="Wrapper">
                <div className="Country">
                <LazyHero imageSrc={chimney} opacity="0.5" minHeight="50vh" parallaxOffset="50">
                    <h1>Polluted countries</h1>
                    <input valuetype="text" value={this.state.text} onKeyDown={this.handleKey} onClick={(e) => this.clearInput(this.state.text)} onChange={this.onTextChanged} className="Country__input" placeholder="Country"></input>
                    {this.renderSuggestion()}   
                </LazyHero>                 
                </div>
                {this.renderCity()} 
            </div>
        )
    }
}

export default Country;