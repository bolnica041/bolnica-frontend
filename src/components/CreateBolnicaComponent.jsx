import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


class CreateBolnicaComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            naziv: ' ',
            adresa: ' ',
            telefon: ' '
        }

        this.changeNazivHandler = this.changeNazivHandler.bind(this);
        this.changeAdresaHandler = this.changeAdresaHandler.bind(this);
        this.changeTelefonHandler = this.changeTelefonHandler.bind(this);
        this.saveData = this.saveData.bind(this);

    }

    saveData = (e) =>{
        e.preventDefault();
        let bolnica = {
            naziv: this.state.naziv, 
            adresa: this.state.adresa,
            telefon: this.state.telefon
        };

    }

    changeNazivHandler = (e) =>{
        this.setState({naziv : e.target.value});
    }

    changeAdresaHandler = (e) =>{
        this.setState({adresa : e.target.value});
    }

    changeTelefonHandler = (e) =>{
        this.setState({telefon : e.target.value});
    }

    cancel(){
        return 
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
                            <h3 className='text-center'>Kreiraj Bolnicu</h3>
                              <div className='card-body'>
                                  <form typeof='submit'>
                                      <div className='form-group'>
                                          <label>Naziv:</label>
                                      <input placeholder='Naziv' name='naziv' className='form-control'
                                      value={this.state.naziv} onChange={this.changeNazivHandler}/>
                                      </div>
                                      <div className='form-group'>
                                          <label>Adresa:</label>
                                      <input placeholder='Adresa' name='adresa' className='form-control'
                                      value={this.state.adresa} onChange={this.changeAdresaHandler}/>
                                      </div>
                                      <div className='form-group'>
                                          <label>Telefon</label>
                                      <input placeholder='Telefon' name='telefon' className='form-control'
                                      value={this.state.telefon} onChange={this.changeTelefonHandler}/>
                                      </div>

                                    <button className='btn btn-success' onClick={this.saveData}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                  </form>
                              </div>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBolnicaComponent;