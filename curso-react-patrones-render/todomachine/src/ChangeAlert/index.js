import React from 'react';
import withStorageListener from './withStorageListener';

const ChangeAlert = ({show, toggleShow}) => {
    if(show){
        return (
            <div>
                Hubo Cambios!
            </div>
        );
    }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export default ChangeAlert;