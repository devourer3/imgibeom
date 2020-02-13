import {action, computed, observable} from 'mobx'
import str from '../static/string'

export default class DefaultStore {

  @observable gender = "male"

  @action
  setGender = (gender) => {
    this.gender = gender;
  }

}
