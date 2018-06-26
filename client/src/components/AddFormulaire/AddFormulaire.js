import React, {Component} from 'react';
import {Modal,Button,FormGroup,ControlLabel,FormControl, HelpBlock} from 'react-bootstrap';

class AddFormulaire extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      adress: '',
      description: '',
      picture: ''
    };
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeAdress(e){
    this.setState({adress: e.target.value});
  }

  handleChangeDescription(e){
    this.setState({description: ''});
  }

  handleChangePicture(e){
    this.setState({picture: ''});
  }

  render(){
    return(
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Ajouter un vendeur</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Nom du vendeur</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.name}
                  placeholder="Entrer son nom"
                  onChange={this.handleChangeName}/>
              </FormGroup>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Adresse de la boutique</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.adress}
                  placeholder="Entrer l'adresse de la boutique"
                  onChange={this.handleChangeAdress}/>
              </FormGroup>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Description de la boutique</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.description}
                  placeholder="Entrer la description de la boutique"
                  onChange={this.handleChangeDescription}/>
              </FormGroup>
              <FormGroup controlId="formBasicText">
                <ControlLabel>{"Url de l'image"}</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.picture}
                  placeholder="Entrer l'url de l'image du vendeur"
                  onChange={this.handleChangePicture}/>
            </FormGroup>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  }
}

export default AddFormulaire;
