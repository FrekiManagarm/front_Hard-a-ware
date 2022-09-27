import { createContext, useState } from "react";

export const ConfigurationContext = createContext();

const ConfigurationProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);
    const initialConfiguration = {
        cpu: null,
        gpu: null,
        ssd: null,
        hdd: null,
        mb: null,
        case: null,
        ram: null,
        cooling: null
    }
    const [configuration, setConfiguration] = useState(initialConfiguration);

    return (
        <ConfigurationContext.Provider
            value={{
                activeStep,
                setActiveStep,
                configuration,
                setConfiguration
            }}
        >
            { children }
        </ConfigurationContext.Provider>
    )
}

export default ConfigurationProvider