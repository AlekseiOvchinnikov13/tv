import React, {useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import {toJS} from "mobx";
import './style.scss';
import ButtonIcon from "../ButtonIcon";

const ChannelCard = props => {
  const [channelArray, setChannelArray] = useState(null)

  useEffect(() => {
    setChannelArray(toJS(props.store.channelList));
  }, [props.store.channelList])

  return (
    <div className='channel-wrapper'>
      {channelArray && channelArray
        .filter(item => item.hd === '1')
        .map(item =>
          <div className='channel-card-wrapper' key={item.chid}>
            <ButtonIcon
              item={item}
            />
            <a
              className="channel-card-wrapper__title"
              href={item.url}
            >
              {item.title}
            </a>
          </div>
        )}
    </div>
  )
}

export default inject('store')(observer(ChannelCard));
