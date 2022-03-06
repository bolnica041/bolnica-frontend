// import React from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function CreateBolnicaFunction(props) {


//     let [naziv, setNaziv] = useState('');
//     let [adresa, setAdresa] = useState('');
//     let [telefon, setTelefon] = useState('');
//     let navigate = useNavigate();


//     function saveBolnica(e){
//         e.preventDefault();
//         let bolnica = {
//             naziv: useState(naziv),
//             adresa: useState(adresa),
//             telefon: useState(telefon)
//         };

//     }

//     //ovo je dobro


//     function changeNazivHandler (e){
//         setNaziv({naziv :e.target.value});
//     }

//     function changeAdresaHandler (e){
//         setAdresa({adresa : e.target.value});
//     }

//     function changeTelefonHandler (e){
//         setTelefon({telefon : e.target.value});
//     }



//     return (
//             <div>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
//                             <h3 className='text-center'>Kreiraj Bolnicu</h3>
//                             <div className='card-body'>
//                                 <form>
//                                     <div className='form-group'>
//                                         <label>Naziv:</label>
//                                     <input placeholder='Naziv' name='naziv' className='form-control'
//                                     value={naziv} onChange={(e)=>changeNazivHandler(e)}/>
//                                     </div>
//                                     <div className='form-group'>
//                                         <label>Adresa:</label>
//                                     <input placeholder='Adresa' name='adresa' className='form-control'
//                                     value={adresa} onChange={(e)=>changeAdresaHandler(e)}/>
//                                     </div>
//                                     <div className='form-group'>
//                                         <label>Telefon</label>
//                                     <input placeholder='Telefon' name='telefon' className='form-control'
//                                     value={telefon} onChange={(e)=>changeTelefonHandler(e)}/>
//                                     </div>

//                                     <button className='btn btn-success' onClick={saveBolnica()}>Save</button>
//                                     <button className='btn btn-danger' onClick={()=>navigate("/bolnica")} style={{marginLeft: "10px"}}>Cancel</button>
//                                 </form>
//                             </div>  
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     );
// }

// export default CreateBolnicaFunction;