import {action, observable} from 'mobx'

export default class DefaultStore {

  @observable gender = "male"

  @action
  setGender = (gender) => {
    this.gender = gender;
  }

}
