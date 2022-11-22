export const displayButton = (type, config) => {
    switch(type) {
        case "cpu_id":
            return config.cpu_id;
        case "gpu_id":
            return config.gpu_id;
        case "case_id":
            return config.case_id;
        case "cooling_id":
            return config.cooling_id;
        case "hdd_id":
            return config.hdd_id;
        case "motherboard_id":
            return config.motherboard_id;
        case "psu_id":
            return config.psu_id;
        case "ram_id":
            return config.ram_id;
        case "ssd_id":
            return config.ssd_id;
    }
}