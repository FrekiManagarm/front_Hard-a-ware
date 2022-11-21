export const displayButton = (type, config) => {
    switch(type) {
        case "processeur":
            return config.cpu_id;
        case "carte_graphique":
            return config.gpu_id;
        case "boitier":
            return config.case_id;
        case "cooling":
            return config.cooling_id;
        case "disque_dur":
            return config.hdd_id;
        case "carte_mere":
            return config.motherboard_id;
        case "alim":
            return config.psu_id;
        case "ram":
            return config.ram_id;
        case "ssd":
            return config.ssd_id;
    }
}