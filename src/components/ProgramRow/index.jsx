import React, {useEffect, useState} from "react";
import './style.scss';
import {inject, observer} from "mobx-react";
import {toJS} from "mobx";

const ProgramRow = props => {
    const [program, setProgram] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        setTimer(setInterval(() => setCurrentTime(new Date()), 1000));
        return () => clearInterval(timer);
    }, [])

    useEffect(() => {
        setProgram(toJS(props.store.programList));
    }, [props.store.programList])

    const formatter = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric"
    });

    return (
        <div className='program-row'>
            {program && program.map(item =>
                <div className='program-row__inner' key={item.start}>
                    <div className='program-row__title'>{item.title}</div>
                    {Date.parse(item.start) - currentTime > 0
                        ? <p className='program-row-start'>{formatter.format(Date.parse(item.start))}</p>
                        : <p className='program-row-start past'>
                            {`${formatter.format(Date.parse(item.start))} `}
                            {(Math.round((+currentTime - Date.parse(item.start)) / 10 / item.duration) > 0
                                && Math.round((+currentTime - Date.parse(item.start)) / 10 / item.duration) < 100)
                            && `(${Math.round((+currentTime - Date.parse(item.start)) / 10 / item.duration)}%)`}
                        </p>}
                    <p className='program-row__desc'>{item.desc}</p>
                </div>
            )}
        </div>
    )
}

export default inject('store')(observer(ProgramRow));
