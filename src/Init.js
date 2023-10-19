import React from "react";

let SettingsContext = null;
let SettingsProvider = null;
let SettingsConsumer = null;


class Init {
    constructor(settings) {
        SettingsContext = React.createContext(settings);
        SettingsProvider = SettingsContext.Provider;
        SettingsConsumer = SettingsContext.Consumer;
    }
}

export { SettingsConsumer, SettingsProvider };

export default Init;