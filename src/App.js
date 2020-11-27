import "./App.css";
import React from "react";
import {CreateBannerWrapper} from "./components/CreateBannerWrapper";
import {useTranslation} from "react-i18next";

function App() {
    const {t} = useTranslation();
    return (
        <div className="App">
            <CreateBannerWrapper t={t}/>
        </div>
    );
}

export default App;
