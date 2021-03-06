import React, {useEffect} from "react";
import './style.scss'
import {inject, observer} from "mobx-react";
import {getChannels} from "../../api/api";
import Modal from "../Modal";

const Container = props => {
  useEffect(() => {
    getChannels().then(response => props.store.setChannelList(response))
  }, [props.store])

  return (
    <div className='container'>
      {props.children}
      <Modal/>
    </div>
  )
}

export default inject('store')(observer(Container));
