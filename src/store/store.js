import {action, makeAutoObservable, observable} from 'mobx'

class Store {
  constructor() {
    makeAutoObservable(this)
  }

  visibleModal = false;
  openModal = action(() => {
    this.visibleModal = true
  })
  closeModal = action(() => {
    this.visibleModal = false
  })

  channelList = observable([]);
  setChannelList = action(data => {
     this.channelList = data;
  })

  programList = observable([]);
  setProgramList = action(data => {
    this.programList = data;
  })

  currentChannel = null;
  setCurrentChannel = action(item => {
    this.currentChannel = item
  })
}

export default new Store();