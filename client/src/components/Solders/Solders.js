import React, {Component} from 'react';
import {Table, Button, Glyphicon} from 'react-bootstrap';
import './Solders.css';
import AddFormulaire from '../AddFormulaire/AddFormulaire.js';

class Solders extends Component {
  constructor(props){
    super(props);
    this.state = {
      solders:[],
      activeAdd: false,
      activeUpdate: false
    }
    this.activeForm = this.activeForm.bind(this);
    //this.updateSolder = this.updateSolder.bind(this);
  }


  componentDidMount(){
    fetch('http://localhost:3001/api/solders')
      .then(res => res.json())
      .then(solders => this.setState({solders}))
  }

  activeForm(e){
    this.setState({
      active: true
    });
    e.preventDefault();
  }

  updateSolder(solder){
    this.setState({activeSolder: solder})
    console.log('solder to update', solder);
    // fetch('http://localhost:3001/api/solders/'+solder._id, {
    //
    // })

  }

  render(){
    return(
      <div>
      {this.state.activeAdd==true ?
        <AddFormulaire/>
        :
        <div></div>
      }
      <Button onClick={this.activeForm} className='add' bsStyle="primary">Ajouter un vendeur</Button>
      <h1>Liste des vendeurs</h1>
      <Table responsive>
        <thead>
          <tr>
            <th width="10%"></th>
            <th width="10%">Nom</th>
            <th width="15%">Adresse</th>
            <th width="30%">description</th>
            <th width="30%">{"Liste d'articles"}</th>
            <th width='5%'></th>
          </tr>
        </thead>
        <tbody>
        {this.state.solders.map(solder =>
          <tr key={solder._id}>
            <td><img src={solder.picture} width='100%' alt={solder.name}/></td>
            <td>{solder.name}</td>
            <td>{solder.adress}</td>
            <td>{solder.description}</td>
            <td></td>
            <td>
              <Glyphicon glyph="glyphicon glyphicon-pencil" onClick={()=>this.updateSolder(solder)} />
            </td>
          </tr>
        )}
        </tbody>
      </Table>
    </div>
    )
  }
}

export default Solders;
