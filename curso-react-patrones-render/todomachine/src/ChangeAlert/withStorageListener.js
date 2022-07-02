import React from 'react';

const withStorageListener = (WrappedComponent) => {
    return function WrappedComponentWithStorageListener(props){
        const [storageChange, setStorageChange] = React.useState(false);

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={setStorageChange}
            />
        );
    }
};

export default withStorageListener;