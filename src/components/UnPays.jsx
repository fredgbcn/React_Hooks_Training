import React, {useState, useEffect} from "react";
import{useParams} from "react-router-dom";
import axios from "axios";
import Title from "./Title/Title";
import './UnPays.css';

    const UnPays = (props) => {

        const {id} = useParams();
        let datas = "";
        let [alldata, dataMounted] = useState(datas);
        useEffect(()=>{
            axios.get(`https://restcountries.com/v3.1/name/${id}?fullText=true`)
            .then(response =>{
      
                datas = response.data[0];
                dataMounted(alldata = datas);

            })
            .catch(error=>{
                console.log(error);
            })  

        }, [])
        

        return(
        <div className="unpays-container">
            <div className="text-unpays">
                <div className="country-name">{alldata.name?.common.toUpperCase()}</div>
                <div>CAPITALE : {alldata.capital}</div>
                <div>REGION : {alldata.region}</div>
                <div>SUB-REGION : {alldata.subregion}</div>
                <div>Population : {alldata.population}</div>
            </div>
            <img  className="flag" src={alldata.flags?.svg}/>{console.log(alldata)}
            
        </div>
    )
        }

export default UnPays;