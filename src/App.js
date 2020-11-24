import "./App.css";
import React from "react";
import {CreateBannerWrapper} from "./components/CreateBannerWrapper/CreateBannerWrapper";
import {useTranslation} from "react-i18next";

function App() {
    const {t, i18next} = useTranslation();
    return (
        <div className="App">
            <CreateBannerWrapper t={t}/>
        </div>
    );
}

export default App;
