import { useRouter } from "next/router";
import { createContext, useState } from "react";
import PostAPIData from '../helpers/post_api_data';
import PatchAPIData from '../helpers/patch_api_data';

export const ConfigurationContext = createContext();

const ConfigurationProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);
    const router = useRouter();
    
    const initialConfiguration = {
        configId: null,
        use: 0,
        processeur: null,
        carte_graphique: null,
        ssd: null,
        disque_dur: null,
        carte_mere: null,
        boitier: null,
        ram: null,
        cooling: null,
        alim: null
    }
    const [config, setConfig] = useState(initialConfiguration);

    const createDraftConfig = async () => {
        const data = {
            status: 'draft',
            activeStep: activeStep
        }

        const response = await PostAPIData(`/api/Config`, data).then(() => {
            setActiveStep(activeStep + 1)
        })

        return response
    }

    const updateDraft = async (type, item) => {
        const data = {
            [type] : item 
        }

        const responseAPI = await PatchAPIData(`/api/Config`, data).then(() => {
            
        })

        return responseAPI
    }

    const pushToResume = async (configId) => {
        // TO DO 
        const data = {
            status: "done"
        }

        const confirmConfigRequest = await PostAPIData(`/api/Config/${configId}`, data).then((response) => {
            router.push('/configurator/resume', {query: { configId: configId }})
        })

        return confirmConfigRequest
    }

    return (
        <ConfigurationContext.Provider
            value={{
                activeStep,
                setActiveStep,
                config,
                setConfig,
                createDraftConfig,
                pushToResume,
                updateDraft
            }}
        >
            { children }
        </ConfigurationContext.Provider>
    )
}

export default ConfigurationProvider