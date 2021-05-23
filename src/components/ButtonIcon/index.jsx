import React from "react";
import PropTypes from 'prop-types';
import {inject, observer} from "mobx-react";

const ButtonIcon = props => {
  const domain = 'https://epg.domru.ru';
  const onClick = () => {
    props.store.setCurrentChannel(props.item);
    props.store.openModal();
  }

  return (
    <>
      <button className='channel-card-wrapper__btn' onClick={onClick}>
        <img
          src={`${domain}${props.item.logo}`}
          alt={props.item.title}
          className='channel-card-wrapper__img'
        />
      </button>
    </>
  )
}

ButtonIcon.propTypes = {
  item: PropTypes.object.isRequired,
}

export default inject('store')(observer(ButtonIcon));