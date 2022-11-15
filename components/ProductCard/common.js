export const displayButton = (type, config) => {
    switch(type) {
        case "processeur":
            return config.processeur;
        case "carte_graphique":
            return config.carte_graphique;
        case "boitier":
            return config.boitier;
        case "cooling":
            return config.cooling;
        case "disque_dur":
            return config.disque_dur;
        case "carte_mere":
            return config.carte_mere;
        case "alim":
            return config.alim;
        case "ram":
            return config.ram;
        case "ssd":
            return config.ssd;
    }
}