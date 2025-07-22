import { Client, Account, Avatars } from 'react-native-appwrite';

const client = new Client()
  .setProject('6870b04e00337d871e6b')
  .setPlatform('dev.darae.second');

export const account = new Account(client) //to create new instance connecting client which is my backend
export const avatars = new Avatars(client)
