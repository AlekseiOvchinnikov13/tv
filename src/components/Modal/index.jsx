import React, {useEffect} from "react";
import './style.scss';
import ProgramRow from "../ProgramRow";
import {getProgram} from "../../api/api";
import {inject, observer} from "mobx-react";

const Modal = props => {
  useEffect(() => {
    props.store.currentChannel && getProgram(props.store.currentChannel).then(response => props.store.setProgramList(response[props.store.currentChannel.xvid]))
  }, [props.store, props.store.currentChannel])

  const closeHandler = (e) => {
    if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-window__close')) {
      props.store.closeModal();
    }
  }

  if (!props.store.visibleModal) return null;

  return (
    <div className='modal-overlay' onClick={(e) => closeHandler(e)}>
      <div className='modal-window'>
        <i className='modal-window__close' onClick={(e) => closeHandler(e)}>×</i>
        <div className='modal-window__header'>{props.store.currentChannel.title}</div>
        <div className='modal-window__body'>
          <ProgramRow/>
        </div>
      </div>
    </div>
  )
}

export default inject('store')(observer(Modal));
