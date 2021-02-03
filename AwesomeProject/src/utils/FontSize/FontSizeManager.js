import React,{useContext,createContext,useState,useEffect} from 'react';
import {getfontsize} from './fontsize';
import {getfontsizeData,storefontsize} from './fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
 

 

//initiate Context

export const ManagefontsizeContext = createContext({
    fontsizeMode:{},
    fontsizeData:{},
tooglefontsize:()=>{}
});

//define usefontsize hook for functional components
export const usefontsize =()=> useContext(ManagefontsizeContext);


export const FontsizeManager = (props)=>{

    
const [fontsize , setfontsize] = useState('');
const fontsizeData = getfontsizeData(fontsize); 


    getfontsize().then(data=>{
        if(!data){
           setfontsize('M')
        }
        else{
            setfontsize( data.fontsizeMode);
        }
    
    });


const changefontsize =   (fontsizeparam)=>{

   storefontsize(fontsizeparam).then(item=>{
    getfontsize().then(data=>{
        console.log("1",data);
        if(!data){
           setfontsize('M')
        }
        else{
            console.log(typeof item.fontsizeMode);
            setfontsize(item.fontsizeMode);
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
    <ManagefontsizeContext.Provider value = {
        {
        fontsizeMode : fontsize,
        fontsizeData : fontsizeData,
        tooglefontsize:changefontsize
        }
    }>
{props.children}
        </ManagefontsizeContext.Provider>

)

}

