import {observable} from "mobx";
import soldersService from '../services/soldersService.js';

class listSoldersViewStore {

  @observable solders;
  @observable choiceTypeOfComponent;
  @observable insight;
  @observable typeOfComponent;
  @observable reporting;
  @observable component;

  constructor(){
    this.solders = soldersService.getAllSolders();
    console.log("liste des vendeurs", this.solders);
  }

}

export default new listSoldersViewStore();
