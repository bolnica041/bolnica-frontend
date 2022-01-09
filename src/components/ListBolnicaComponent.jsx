import React, { Component } from 'react';
import BolnicaService from '../services/BolnicaService';

class ListBolnicaComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bolnice: []
        }
    }

    componentDidMount(){
        BolnicaService.getBolnica().then((res) => {
            this.setState({bolnice: res.data})
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista Bolnica
                </h2>
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
                                this.state.bolnice.map(
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
}

export default ListBolnicaComponent;