import React, { useState, useContext } from 'react';
import Draggable from 'react-draggable';
import { WIDGETS } from '../common/util/db';
import { ConfigContext } from '../common/util/contexts';
import { X } from 'react-feather';
import classes from './Widget.module.scss';

const Widget = (props) => {
    const { id, meta, style: userStyle, className: userClass, } = props;
    const [pos, setPos] = useState(meta.pos);

    const { editMode, removeWidget } = useContext(ConfigContext);

    const handleReposition = async (rePos) => {
        setPos({ x: rePos.x, y: rePos.y });
        const updatedMeta = { ...meta, pos: { x: rePos.x, y: rePos.y } }
        const wData = await WIDGETS.getItem(id);
        wData.meta = updatedMeta;
        await WIDGETS.setItem(id, wData);
    }

    const EditWidget = () => {
        return (
            <div className={classes.EditWidget}>
                <X
                    className={classes.closeBtn}
                    onClick={() => removeWidget(id)}
                />
            </div>
        )
    }

    return (
        <Draggable
            // bounds="body"
            position={pos}
            onDrag={(e, rePos) => handleReposition(rePos)}
        >
            <div className={userClass} style={userStyle}>
                {editMode && <EditWidget />}
                {props.children}
            </div>
        </Draggable>
    )
}

export default Widget;