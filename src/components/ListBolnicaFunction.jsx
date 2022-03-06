import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BolnicaService from '../services/BolnicaService';


function ListBolnicaFunction() {

    let [bolnice, setBolnice] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        BolnicaService.getBolnica()
             .then((response) => {
              setBolnice(response.data);
            });
      }, []);



    return (
        <div>
                <h2 className="text-center">Lista Bolnica
                </h2>
                    <button className='btn btn-primary' onClick={()=>navigate("/createBolnica")}>Add Bolnica</button>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Naziv</th>
                                <th>Adresa</th>
                                <th>Telefon</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                bolnice.map(
                                    bolnica =>
                                        <tr key={bolnica.id}>
                                            <td>{bolnica.naziv}</td>
                                            <td>{bolnica.adresa}</td>
                                            <td>{bolnica.telefon}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default ListBolnicaFunction;
