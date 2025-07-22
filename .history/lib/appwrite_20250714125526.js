import { Client, Account, Avatars } from 'react-native-appwrite';

const client = new Client()
  .setProject('6870b04e00337d871e6b') //project ID 
  .setPlatform('dev.darae.second'); //platform ID bundle

export const account = new Account(client) //to create new instance connecting client which is my backend
export const avatars = new Avatars(client)
