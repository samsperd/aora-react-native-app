import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config ={
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.crash.aora",
    projectId: '6726bfa9000a9f230041',
    databaseId: '6726c4b6001f98d3c89e',
    userCollectionId: '6726c55000175658d390',
    videoCollectionId: '6726c5ad0011cf6df3b9',
    storageId: '6727e03800115758c848'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

const avatars = new Avatars(client)

const databases = new Databases(client)

// Register User
export const createUser = async({email, password, username}: { email: string; password: string; username: string}) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username)

        if (!newAccount) {
            throw Error
        }

        const avatarUrl = avatars.getInitials(username)
        await signIn({email, password})

        const newUser = await databases.createDocument(config.databaseId, config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

        return newUser
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
        throw new Error(errorMessage);
        
    }

}

export const signIn = async ({email, password}: {email: string, password:string}) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
        throw new Error(errorMessage);
    }
}

export const getCurrentUser = async() => {
    try {
        const currentAccount = await account.get()

        if (!currentAccount) {
            throw Error
        }

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if (!currentUser) {
            throw Error
        }

        return currentUser.documents[0]
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
        throw new Error(errorMessage);
    }
}