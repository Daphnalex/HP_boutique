import React, {Component} from 'react';
import {Modal,Button,FormGroup,ControlLabel,FormControl, HelpBlock} from 'react-bootstrap';

class AddFormulaire extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      adress: '',
      description: '',
      picture: '',
      articles: ['']
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAdress = this.handleChangeAdress.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangePicture = this.handleChangePicture.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChangeName(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  handleChangeAdress(e){
    e.preventDefault();
    this.setState({adress: e.target.value});
  }

  handleChangeDescription(e){
    e.preventDefault();
    this.setState({description: e.target.value});
  }

  handleChangePicture(e){
    e.preventDefault();
    this.setState({picture: e.target.value});
  }

  validateForm(){
    console.log('name dans validate',this.state.name)
    var solder = {
      name: this.state.name,
      description: this.state.description,
      adress: this.state.adress,
      picture: this.state.picture,
      articles: this.state.articles
    }
    console.log('donnée à envoyer', solder)
    fetch('http://localhost:3001/api/solders', {
      method: 'POST',
      headers : {'Content-Type':'application/json'},
      body: JSON.stringify(solder)
    }).then((solder) => {
                          console.log('solder', solder);
                          return solder; })
      .then((solder) =>  { console.log(solder); })
      .catch((error) => { console.log('That was en error'+ error); })
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
            <Button onClick={this.validateForm} bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  }
}

export default AddFormulaire;
