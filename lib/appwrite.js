import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform:'com.vast.exaltatus.app',
    projectId: '66f987d0001f5e5509ca',
    databaseId: '66f989fd00205f12865d',
    userCollectionId: '66f98a660022df1679a2',
}

const client = new Client();
client
.setEndpoint(config.endpoint)
.setProject(config.projectId)
.setPlatform(config.platform)

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;
         

        const avatarUrl = avatars.getInitials(username);

        
        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }
        );

        return newUser;
    } catch (error) {
        console.error('Error creating user:', error.message || error);
        throw new Error(error.message || 'An error occurred while creating the user');
    }
};

//delete a session

export const signIn = async (email, password) => {
    try {
      await account.deleteSession("current");
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw new Error(error);
    }
  };

  //create a session
//export async function signIn(email,password){
    //try {
        //const session = await account.createEmailPasswordSession(email, password)
        //return session;
    //} catch (error) {
        //throw new Error(error);
        
   // }
//} 
