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
        cooling: null,
        psu: null
    }
    const [component, setComponent] = useState(initialConfiguration);

    const pushToDraft = (item, type) => {
        
    }

    const saveCurrentStep = () => {

    }

    return (
        <ConfigurationContext.Provider
            value={{
                activeStep,
                setActiveStep,
                component,
                setComponent,
                pushToDraft,
                saveCurrentStep
            }}
        >
            { children }
        </ConfigurationContext.Provider>
    )
}

export default ConfigurationProvider