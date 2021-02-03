import AsyncStorage from '@react-native-async-storage/async-storage';
 
export const fontsize = {
    

}

export const getfontsizeData = (data)=>{
    let fontsizeDatas = {};
    for(let key in fontsize){
if(key == data){
fontsizeDatas = fontsize[data];

}    }
 return fontsizeDatas;
}

export const getfontsize = async()=>{
    try{    
    
        let currentfontsize = await AsyncStorage.getItem('fontsizeMode');
        console.log("*****************",currentfontsize);
    if(currentfontsize){
        //  console.log("111",currentfontsize);
        return {'fontsizeMode':currentfontsize};
    }
    else{
   
 await AsyncStorage.setItem('fontsizeMode','M');
        //  console.log("11","eng");
       
        return {'fontsizeMode':'M'}
    }
  
        
  
        
        
    }
    catch(err){
         console.log("Error fetching fontsize",err);
    }
    
}


export const storefontsize = async(font)=>{
try{
  await AsyncStorage.setItem('fontsizeMode', font)
  let currentfontsize = await AsyncStorage.getItem('fontsizeMode');
  if(currentfontsize){
      //  console.log("111",currentfontsize);
      return {'fontsizeMode':currentfontsize};
  }}
catch(err){
    console.log("Error saving fontsize",err);
}
}