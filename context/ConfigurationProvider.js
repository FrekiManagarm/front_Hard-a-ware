import { useRouter } from "next/router";
import { createContext, use, useState } from "react";
import PostAPIData from '../helpers/post_api_data';
import PatchAPIData from '../helpers/patch_api_data';

export const ConfigurationContext = createContext();

const ConfigurationProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);
    const router = useRouter();
    
    const initialConfiguration = {
        use: 0,
        status: "draft",
        cpu_id: null,
        gpu_id: null,
        ssd_id: null,
        hdd_id: null,
        motherboard_id: null,
        case_id: null,
        ram_id: null,
        cooling_id: null,
        psu_id: null
    }
    const [config, setConfig] = useState(initialConfiguration);
    const [configId, setConfigId] = useState(null);

    const createDraftConfig = async () => {
        const data = {
            status: 'draft',
            activeStep: activeStep,
            use: config.use
        }

        const response = await PostAPIData(`/api/Config`, data).then((response) => {
            setActiveStep(activeStep + 1);
            console.log(response, 'config created');
        })

        return response
    }

    const pushToDraft = async () => {

        const data = {
            ...config,
            activeStep: activeStep
        }

        const responseAPI = await PatchAPIData(`/api/Config/${configId}`, data).then((response) => {
            console.log(response, 'response update draft')
        })

        return responseAPI
    }

    const draftToConfig = async () => {

        const confirmConfigRequest = await PostAPIData(`/api/config/${configId}`, config).then((response) => {
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
                draftToConfig,
                pushToDraft
            }}
        >
            { children }
        </ConfigurationContext.Provider>
    )
}

export default ConfigurationProvider