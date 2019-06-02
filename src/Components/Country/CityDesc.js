import React, { Component } from 'react'
import fetchJsonp from'fetch-jsonp'
import './animations.css'
import './CityDesc.css'



export default class CityDesc extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            pageid: '',
            content: '',
            slide: false
        };
        this.handleText = this.handleText.bind(this); 
        this.gotData = this.gotData.bind(this)   
    }

    componentDidMount(){
        this.handleText();
    }

    loadDesc = (site) =>{
        let searchUrl ="https://en.wikipedia.org/w/api.php?action=query&list=search&srwhat=text&format=json&srsearch="+ site ;
        

        if (site !== " "){
            fetchJsonp(searchUrl)
                .then(function(response) {
                    return response.json()               
                })
                .then((json)=>{
                    this.gotData(json)
                    console.log(json)
                })                     
                .catch(function(ex) {
                    console.log('parsing failed', ex)
                })
        }      
        
    }
    gotData(data) {
        console.log(data)
        let cityID = data.query.search[0].pageid;
        let title = data.query.search[0].title;
        title = title.replace(/\s+/g, '_');
        let contentUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&redirects=1&format=json&titles="+title;
        if (title !== " "){
            fetchJsonp(contentUrl)
                .then(function(response) {
                    return response.json()                    
                })
                .then((json)=>{
                    this.content(json, cityID);

                })                     
                .catch(function(ex) {
                    console.log('parsing failed', ex)
                })               
        }              
    }

    content(element, id){
        let page = element.query.pages[id].extract
        this.setState({
            content: page
        })
    }

    handleText(){       
        
        if (this.props.city){            
            this.loadDesc( this.props.city);                       
        }        
    }

    getAlert(){
        alert("klik");
    }

    render() {

        return (
            <div className="Accordion__desc slideDownDesc">{this.state.content}</div>
        )
    }
}
