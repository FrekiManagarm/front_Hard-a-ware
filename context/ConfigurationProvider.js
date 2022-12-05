import { useRouter } from "next/router";
import { createContext, use, useState } from "react";
import PostAPIData from '../helpers/post_api_data';
import PatchAPIData from '../helpers/patch_api_data';
import componentType from "./common";

export const ConfigurationContext = createContext();

const ConfigurationProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(null);
    const router = useRouter();
    
    const initialConfiguration = {
        use: 0,
        draft: true,
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

    console.log(config, "config state");

    const createDraftConfig = async () => {
        const data = {
            draft: config.draft,
            current_step: activeStep,
            use: config.use
        }

        const response = await PostAPIData(`/api/config`, data).then((response) => {
            setConfigId(response.id)
            setActiveStep(activeStep + 1);
        })

        return response
    }

    const pushToDraft = async (type) => {

        const data = {
            use: config.use,
            draft: config.draft,

        }

        const responseAPI = await PatchAPIData(`/api/config/${configId}`, componentType(type, config, activeStep)).then((response) => {
            console.log(response, 'response update draft')
            setConfigId(response.id)
            setActiveStep(activeStep + 1)
        })

        return responseAPI
    }

    const draftToConfig = async () => {

        const confirmConfigRequest = await PatchAPIData(`/api/config/${configId}`, config).then((response) => {
            console.log(response, "response update draft to config")
            router.push(`/configurator/resume?configId=${configId}`)
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