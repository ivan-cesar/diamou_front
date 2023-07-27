import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function HomePage() {
    const [data, setData] = useState([]); // Modifier ici pour initialiser à un tableau vide
    const [loading, setLoading] = useState(true);
    // Fonction pour formater la date
    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = String(dateObj.getDate()).padStart(2, "0");
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const year = dateObj.getFullYear();
        return `${day}-${month}-${year}`;
      };
    useEffect(() => {
      // Fonction pour charger les données depuis l'API
      const fetchData = async () => {
        try {
          const response = await axios.get("http://45.155.37.111:8055/api/v1/findAllFactures");
  
          // Remplacez l'URL par l'adresse de votre API
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error);
          setLoading(false);
        }
      };
  
      fetchData();
      
    }, []);
  
    return (
      <div>
        <h1 className="text-center mt-5 mb-3"> Bienvenue chez Diamou sarl </h1>
        {loading ? (
          <p>Chargement en cours...</p>
        ) : (
          /*<ul>
            {data['content'].map((item) => (
              <li key={item.id}>
                {item.intituleFacture}{""}
                {item.montant}{""}
                {item.dateAdded}{""}
                
              </li>
            ))}
          </ul>*/
        
   
  <div>
    
    <div>
  
      
     <div className="text-center">
        <Link to="/factures" className="btn btn-success">Payer</Link>
        <Link Style={'margin-left: 20px'} className="btn btn-primary" to="/add_facture">Ajouter une facture</Link>
     </div>
    </div>
  
   <div className="container">
  
    <div className="row">
      <div className="col-md-12">
      <table class="table table-bordered mt-5 table-striped">
    <thead className="thead-light">
      <tr>
        <th className="text-center" scope="col">Intitule Facture</th>
        <th className="text-center" scope="col">Montant</th>
        <th className="text-center" scope="col">Date</th>
        <th className="text-center" scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {data['content'].slice()
                      .reverse().map((item) => (
  
  
              <tr key={item.id}>
                <td className="text-center">{item.intituleFacture}</td>
                <td className="text-center">{item.montant}</td>
                <td className="text-center"> {formatDate(item.dateAdded)}</td>
                <td className="text-center"> <Link className="btn btn-success" to="">
                <i class="fa-solid fa-credit-card"></i>
                         
                         </Link>
                </td>

              </tr>
           
    
    ))}
    </tbody>
  </table>
      </div>
    </div>
   </div>
   </div>     
        )
        
        }
      
  
     </div> 
    );
  }

export default HomePage;
