import React, { useState } from "react";
import axios from "axios";

const AddPage = () => {
    const [formData, setFormData] = useState({ intituleFacture: "", montant: "" });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post("http://45.155.37.111:8055/api/v1/addFacture", formData);
          console.log("Données envoyées avec succès !", response.data);
          // Gérer la réponse de l'API ou rediriger l'utilisateur vers une autre page si nécessaire
        } catch (error) {
          console.error("Erreur lors de l'envoi des données :", error);
          // Gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
        }
      };
    


  return (
   <div className="container">
      <div className="row"> 
         <div  style={{alignItems: 'center',justifyContent: 'center'}} className="col-md-12 d-flex">
         <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label >Intitule de la facture</label>
    <input type="text" className="form-control" id="intituleFacture" name="intituleFacture" value={formData.intituleFacture}
            onChange={handleInputChange} placeholder="Intitule de la facture"/>
  </div>
  <div className="form-group">
    <label >Montant</label>
    <input type="text" name="montant" className="form-control" id="montant" value={formData.montant}
            onChange={handleInputChange} placeholder="Montant"/>
  </div>
  <div className="form-group">
     <button style={{marginTop: '20px'}} type="submit" className="form-control btn btn-primary">Submit</button>
     </div>
          </form>
         </div>
      </div>
   </div>
)};

export default AddPage;
