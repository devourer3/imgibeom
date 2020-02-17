import {action, computed, observable} from 'mobx'
import str from '../static/string'
import data from '../static/data'

export let DATA_URL = 'https://gibeomport.s3.ap-northeast-2.amazonaws.com/';

class BaseStore {

  @observable str;
  @observable data;
  @observable popupOpt;
  @observable popup

  constructor() {
    this.str = str;
    this.data = data;
    this.popupOpt = {
      "popupOn": false,
      "popupMsg": ""
    }
    this.popup = true
  }

  @action
  setPopupOption = (key, value) => {
    this.popupOpt[key] = value;
  }

  // @action
  // setPopup = () => {
  //   this.popup = false;
  // }

  // @computed get getPopupOpt() {
  //   return this.popupOpt;
  // }

  // @action setNickName = (name) => {
  //   this.nickName = name;
  // }

  // @computed get getStr() {
  //   return this.getStr;
  // }

  // @computed get getName() {
  //   return this.nickName;
  // }
}

export default new BaseStore();
