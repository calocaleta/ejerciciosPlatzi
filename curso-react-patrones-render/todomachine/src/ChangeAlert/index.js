import React from 'react';
import withStorageListener from './withStorageListener';

const ChangeAlert = ({show, toggleShow}) => {
    if(show){
        return (
            <div>
                <p>Hubo Cambios!</p>
                <button
                    onClick={() => toggleShow(false)}
                >Refrescar la información</button>
            </div>
        );
    }
    else {
        return null;
    }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export default ChangeAlertWithStorageListener;