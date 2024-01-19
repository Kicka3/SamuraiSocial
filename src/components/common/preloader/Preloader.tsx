import React from 'react';
import preloader from "../../../assets/images/things/loader.svg";


type PreloaderType = {
    isFetching?: boolean
}

export const Preloader: React.FC<PreloaderType> = ({isFetching}) => {
    return (
        <div>
            {isFetching ? <img src={preloader} alt={preloader}/> : null}
        </div>
    );
};

