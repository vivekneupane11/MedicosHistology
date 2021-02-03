import AsyncStorage from '@react-native-async-storage/async-storage';
 
export const language = {
    'ind':{
        'home':'होम',
        'bookmarks':'बुकमार्क',
        'notes':'नोट्स',
        'search':'खोज',
        'settings':'सेटिङ्स',
        'accounts':'अकाउन्ट',
        'pushnotification':'पुश नोटीफिकेशन',
        'fontsize':'फन्ट साइज',
        'language':'भाषा',
        'joinourcommunity':'जोइन आवर कम्युनिटी',
        'privacypolicy':'प्राइभेसि  पोलिसी',
        'termsofservices':'टर्म अफ सर्भिसेज',
        'invitemorefriends':'न्भाइटइ मोर फ्रेनड्स',
        'aboutus':'एबौत अस',
        'rateus':'रेट अस',
        'logout':'लॉग आउट',
        'darkmode':'डार्क मोड'
    },
    'spa': {
         'home':'página de inicio',
        'bookmarks':'marcadores',
        'notes':'notas',
        'search':'buscar',
        'settings':'ajustes',
        'accounts':'cuenta',
        'pushnotification':'notificación de inserción',
        'fontsize':'tamaño de fuente',
        'language':'idioma',
        'joinourcommunity':'Únete a nuestra comunidad',
        'privacypolicy':'política de privacidad',
        'termsofservices':'términos de servicio',
        'invitemorefriends':'Invitar a más amigas',
        'aboutus':'Sobre nosotras',
        'rateus':'Nos califica',
        'logout':'cerrar sesión',
        'darkmode':'modo oscuro'
    },
    'ara': {
       'home':'الصفحة الرئيسية',
        'bookmarks':'إشارات مرجعية',
        'notes':'ملاحظات',
        'search':'بحث',
        'settings':'الإعدادات',
        'accounts':'الحساب',
        'pushnotification':'دفع الإخطارات',
        'fontsize':'حجم الخط',
        'language':'لغة',
        'joinourcommunity':'انضم إلى مجتمعنا',
        'privacypolicy':'سياسة خاصة',
        'termsofservices':'شروط الخدمة',
        'invitemorefriends':'ادعو المزيد من الاصدقاء',
        'aboutus':'معلومات عنا',
        'rateus':'قيمنا',
        'logout':'تسجيل خروج',
        'darkmode':'الوضع المظلم'
    },
    'rus': {
         'home':'Главная',
        'bookmarks':'Закладки',
        'notes':'Заметки',
        'search':'Поиск',
        'settings':'Настройки',
        'accounts':'учетная запись',
        'pushnotification':'Отправить уведомление',
        'fontsize':'Размер шрифта',
        'language':'Язык',
        'joinourcommunity':'Присоединяйтесь к нашему сообществу',
        'privacypolicy':'Политика конфиденциальности',
        'termsofservices':'Условия предоставления услуг',
        'invitemorefriends':'Пригласите больше друзей',
        'aboutus':'О нас',
        'rateus':'Оцените нас',
        'logout':'выйти',
        'darkmode':'Темный режим'
},
'eng': {
     'home':'Home',
        'bookmarks':'Bookmarks',
        'notes':'Notes',
        'search':'Search',
        'settings':'Settings',
        'accounts':'Accounts',
        'pushnotification':'Push Notification',
        'fontsize':'Font Size',
        'language':'Language',
        'joinourcommunity':'Join Our Community',
        'privacypolicy':'Privacy Policy',
        'termsofservices':'Terms Of Services',
        'invitemorefriends':'Invite more Friends',
        'aboutus':'About us',
        'rateus':'Rate us',
        'logout':'Log Out',
        'darkmode':'Dark Mode'
}
}

export const getLanguageData = (data)=>{
    let languageDatas = {};
    for(let key in language){
if(key == data){
languageDatas = language[data];

}    }
 return languageDatas;
}

export const getLanguage = async()=>{
    try{    
    
        let currentLanguage = await AsyncStorage.getItem('languageMode');
    if(currentLanguage){
        //  console.log("111",currentLanguage);
        return {'languageMode':currentLanguage};
    }
    else{
   
 await AsyncStorage.setItem('languageMode','eng');
        //  console.log("11","eng");
       
        return {'languageMode':'eng'}
    }
  
        
  
        
        
    }
    catch(err){
         console.log("Error fetching Language",err);
    }
    
}


export const storeLanguage = async(lan)=>{
try{
  await AsyncStorage.setItem('languageMode', lan)
  let currentLanguage = await AsyncStorage.getItem('languageMode');
  if(currentLanguage){
      //  console.log("111",currentLanguage);
      return {'languageMode':currentLanguage};
  }}
catch(err){
    console.log("Error saving Language",err);
}
}