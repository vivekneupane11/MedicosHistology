import firestore from '@react-native-firebase/firestore';

const users = await firestore().collection('Allhistologydata').get();
const user = await firestore()
  .collection('Allhistologydata')
  .doc('Tcfx8PDKef1MJCtWR0ix')
  .get();

console.log(users, 'USSSSSSSSSSSSSSERRRRRRRRRRRRRRRSSSSSSSSSSSSSSSSSSS');
console.log(user, 'USERRRRRRRRRRRRRRRRRRRRRRRRRRRR');
