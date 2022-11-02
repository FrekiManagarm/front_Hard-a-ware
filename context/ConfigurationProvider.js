import { createContext, useState } from "react";

export const ConfigurationContext = createContext();

const ConfigurationProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);
    const initialConfiguration = {
        use: 0,
        cpu: null,
        gpu: null,
        ssd: null,
        hdd: null,
        mb: null,
        case: null,
        ram: null,
        cooling: null,
        psu: null
    }
    const [config, setConfig] = useState(initialConfiguration);

    const pushToDraft = (item, type) => {
        // TO DO 
        // in this function we need to push some data for each step of the configurator and the current step
    }

    const saveCurrentStep = () => {
        // TO DO
        // In this function we need to save the current step for the last config of the user
    }

    return (
        <ConfigurationContext.Provider
            value={{
                activeStep,
                setActiveStep,
                config,
                setConfig,
                pushToDraft,
                saveCurrentStep
            }}
        >
            { children }
        </ConfigurationContext.Provider>
    )
}

export default ConfigurationProvider