import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
    const [fan, setFan] = useState("");

    const handleCreateFan = ({ name }) => {
        setFan(name);
    };
    const [theme, setTheme] = useState("dark");


    const handleSetTheme = (theme) =>{
        console.log(theme);
        if(theme === "dark"){
            setTheme("light");
        }else{
            setTheme("dark")
        }
    }
    
    return (
        <DefaultContext.Provider value={{ handleCreateFan, handleSetTheme }}>
            <Header fan={fan} handleSetTheme = {handleSetTheme} theme = {theme} />
            <hr />
            <Content handleSetTheme = {handleSetTheme} theme = {theme}/>
            <hr/>
            <Footer handleSetTheme = {handleSetTheme} theme = {theme}/>
        </DefaultContext.Provider>
    );
}
