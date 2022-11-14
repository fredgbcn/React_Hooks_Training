import React, {Component} from "react";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import axios from "axios";
import Pays from "./Pays/Pays";
import "./PaysManager.css";

class PaysManager extends Component {
   state ={
       listePays: [],
       loading : false,
       regionSelection: null,
       numeroPageActuelle:1
   }
   componentDidMount = () =>{
     this.handleSelectCountryByRegion('all')
   }

   handleSelectCountryByRegion = (region) => {
    let param ='';
    if (region ==='all') param=region;
    else param = `region/${region}`;

    this.setState({loading:true});
    axios.get(`https://restcountries.com/v3.1/${param}`)
    .then(response => {
        const listePays = response.data.map(pays =>{
            return{
                nom : pays.name,
                nomFrancais : pays.translations.fra,
                capitale : pays.capital,
                region : pays.region,
                drapeau : pays.flags,
                population : pays.population,
                area : pays.area
            } 
                   
        })
        this.setState({
            loading:false,
            listePays,
            regionSelection:region,
            numeroPageActuelle: 1
        });
    })
    .catch(error =>{
     console.log(error);
     this.setState({loading:false});
    })
   }
    render(){
        let pagination = [];
        let listePays= "";
        if(this.state.listePays) {
            let fin = this.state.listePays.length/10;
            if(this.state.listePays.length%10 !== 0) fin++;
            for(let i=1; i<= fin; i++){
                pagination.push(
                <Button key={i} 
                    myStyle="btn-info" 
                    selected={this.state.numeroPageActuelle ===i}
                    clic={()=> this.setState({numeroPageActuelle:i})}
                >{i}</Button>);
            }
            const debut = (this.state.numeroPageActuelle-1)*10;
            const finListe = (this.state.numeroPageActuelle)*10 + 10;
            const listeReduite = this.state.listePays.slice(debut, finListe);
            listePays = listeReduite.map(pays =>{
                return (<div key={pays.population + pays.area} className="col-12 col-md-6"><Pays key={pays.nom} {... pays} {...this.props}/>
                    </div>
                );
            })
        }
        return(
            <div className="container">
                <Title>Liste des Pays</Title>
                <Button myStyle="btn-info" clic={() => this.handleSelectCountryByRegion("all")} selected={this.state.regionSelection === "all"}>Tous</Button>
                <Button myStyle="btn-info" clic={() => this.handleSelectCountryByRegion("Africa")} selected={this.state.regionSelection === "Africa"}>Afrique</Button>
                <Button myStyle="btn-info" clic={() => this.handleSelectCountryByRegion("Americas")} selected={this.state.regionSelection === "Americas"}>Amérique</Button>
                <Button myStyle="btn-info" clic={() => this.handleSelectCountryByRegion("Asia")} selected={this.state.regionSelection === "Asia"}>Asie</Button>
                <Button myStyle="btn-info" clic={() => this.handleSelectCountryByRegion("Oceania")} selected={this.state.regionSelection === "Oceania"}>Océanie</Button>
                <Button myStyle="btn-info" clic={() => this.handleSelectCountryByRegion("Europe")} selected={this.state.regionSelection === "Europe"}>Europe</Button>
                Nombre de Pays : <span>{this.state.listePays.length}</span>
                <div className="paysDiv">
                {
                    this.state.loading 
                ? <div>CHARGEMENT...</div>
                : <div className="country">
                   {listePays}
                </div>
                 }
                 </div>
                <div>{pagination}</div>
            </div>
        );
    }
}

export default PaysManager;