const componentType = (type, config, current_step) => {

    let data = {}

    switch (type) {
        case "cpu_id":
            data = {
                cpu_id: config.cpu_id,
                current_step: current_step
            }
            return data;
        case "gpu_id":
            data = {
                gpu_id: config.gpu_id,
                current_step: current_step
            }
            return data;
        case "case_id":
            data = {
                case_id: config.case_id,
                current_step: current_step
            }
            return data
        case "ram_id":
            data = {
                ram_id: config.ram_id,
                current_step: current_step
            }
            return data
        case "cooling_id":
            data = {
                cooling_id: config.cooling_id,
                current_step: current_step
            }
            return data
        case "hdd_id":
            data = {
                hdd_id: config.hdd_id,
                current_step: current_step
            }
            return data
        case "psu_id":
            data = {
                psu_id: config.psu_id,
                current_step: current_step
            }
            return data
        case "ssd_id":
            data = {
                ssd_id: config.ssd_id,
                current_step: current_step
            }
            return data
        case "motherboard_id":
            data = {
                motherboard_id: config.motherboard_id,
                current_step: current_step
            }
            return data;
        default: 
            return data;
    }
}

export default componentType