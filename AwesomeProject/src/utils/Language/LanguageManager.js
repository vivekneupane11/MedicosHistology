import React,{useContext,createContext,useState,useEffect} from 'react';
import {getLanguage} from './language';
import {getLanguageData,storeLanguage} from './language';
import AsyncStorage from '@react-native-async-storage/async-storage';
 

 

//initiate Context

export const ManageLanguageContext = createContext({
    languageMode:{},
    languageData:{},
toogleLanguage:()=>{}
});

//define useLanguage hook for functional components
export const useLanguage =()=> useContext(ManageLanguageContext);


export const LanguageManager = (props)=>{

    
const [language , setLanguage] = useState({});
const LanguageData = getLanguageData(language); 


    getLanguage().then(data=>{
        if(!data){
           setLanguage('eng')
        }
        else{
            setLanguage( data.languageMode);
        }
    
    });


const changeLanguage =   (languageparam)=>{

   storeLanguage(languageparam).then(item=>{
    getLanguage().then(data=>{
        console.log("1",data);
        if(!data){
           setLanguage('eng')
        }
        else{
            console.log(typeof item.languageMode);
            setLanguage(item.languageMode);
        }
    
    });

   });
  
   
    //    if(data){
    //        console.log("true");
    //        
    //    }
    // console.log("heraae",isStored);
   
   
  
}

return(
    <ManageLanguageContext.Provider value = {
        {
        languageMode : language,
        languageData : LanguageData,
        toogleLanguage:changeLanguage
        }
    }>
{props.children}
        </ManageLanguageContext.Provider>

)

}

