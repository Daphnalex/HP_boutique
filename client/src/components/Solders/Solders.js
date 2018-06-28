import React, {Component} from 'react';
import {Table, Button, Glyphicon, Modal} from 'react-bootstrap';
import './Solders.css';
import AddFormulaire from '../AddFormulaire/AddFormulaire.js';
import UpdateFormulaire from '../UpdateFormulaire/UpdateFormulaire.js';
import {observable} from 'mobx';

class Solders extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      solders:[],
      activeAdd: false,
      activeUpdate: false,
      activeSolder: {},
      activeDelete: false
    }
    this.activeForm = this.activeForm.bind(this);
    this.activeUpdate = this.activeUpdate.bind(this);
  }


  componentDidMount(){
    fetch('http://localhost:3001/api/solders')
      .then(res => res.json())
      .then(solders => this.setState({solders}))
  }

  activeForm(e){
    this.setState({
      activeAdd: true
    });
    e.preventDefault();
  }

  activeUpdate(solder){
    this.setState({
      activeSolder: solder,
      activeUpdate: true
    })
    console.log('solder to update', solder);
  }

  deleteSolder(solder){
    console.log("solder",solder)
    this.setState({
      activeSolder: solder
    }, function(){
        console.log("vendeur en cours", this.state.activeSolder);
        this.setState({activeDelete: true})
    });
  }

  deleteConfirmation(solder){
    console.log('ici',solder)
    fetch('http://localhost:3001/api/solders/'+solder._id, {
      method: 'DELETE'
    }).then((solder) => {
                          console.log('solder', solder);
                          return solder; })
      .then((solder) =>  { console.log(solder); })
      .catch((error) => { console.log('That was en error'+ error); })
    this.setState({activeDelete: false});
  }

  cancelDelete(){
    this.setState({activeDelete: false});
  }

  render(){
    return(
      <div>
      {this.state.activeAdd==true ?
        <AddFormulaire/>
        :
        <div></div>
      }
      {this.state.activeUpdate==true ?
        <UpdateFormulaire data={this.state.activeSolder}/>
        :
        <div></div>
      }
      {this.state.activeDelete == true ?
        <div className="static-modal">
          <Modal.Dialog>
            <Modal.Body>
                <div>Etes-vous sûr de vouloir supprimer ce vendeur ?</div>
            </Modal.Body>

            <Modal.Footer>
              <Button  onClick={()=>this.cancelDelete}>Annuler</Button>
              <Button onClick={()=>this.deleteConfirmation(this.state.activeSolder)} bsStyle="primary">Supprimer</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        :
        <div></div>}
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
              <Glyphicon glyph="glyphicon glyphicon-pencil" onClick={()=>this.activeUpdate(solder)} />
              <Glyphicon glyph="glyphicon glyphicon-trash" onClick={()=>this.deleteSolder(solder)} />
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
