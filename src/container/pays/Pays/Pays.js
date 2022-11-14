import React from "react";
import { NavLink } from "react-router-dom";

    const Pays = (props) => {
        return(
        <div className="row no-gutters">
            <div className="col-4">
                <img src={props.drapeau.png} width="100%" className="p-2" alt={props.nom} />
            </div> 
            <div className="col">
                    <h2>Nom : {props.nomFrancais.official}</h2>
                    <div>Capitale : {props.capitale} </div>
                    <div>Region : {props.region}</div>
                    <NavLink to={`/PM/${props.nom.common}`}>{console.log(props)}Voir la fiche du pays</NavLink>
            </div>
            

        </div>
        )}

export default Pays;