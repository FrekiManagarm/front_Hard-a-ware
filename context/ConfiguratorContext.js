import { createContext, useState } from "react";

const ConfiguratorContext = createContext();

const ConfiguratorProvider = ({children}) => {

    return (
        <ConfiguratorContext.Provider>
            {children}
        </ConfiguratorContext.Provider>
    )

}

export default ConfiguratorProvider;