import {useEffect} from 'react';
import {BuildTheme} from '../../../assets/global/Theme-variable';
import {useSelector} from "react-redux";

const ThemeSettings = () =>{
    const customizer = useSelector((state) => state.CustomizerReducer);
    const theme = BuildTheme({
      direction: customizer.activeDir,
      theme: customizer.activeTheme
    });
    //console.log(customizer);
    useEffect(() => {
      document.dir = customizer.activeDir;
    }, [customizer]);
  
    return theme;
  }
export default ThemeSettings; 