import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { app } from "../../firebase-config";

async function CreateUser(userid, userEmail, userName) {
  try {
    const db = getFirestore(app);
    const usersCollection = collection(db, "users");
    const userDocRef = doc(usersCollection, userid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (!userDocSnapshot.exists()) {
      const userData = {
        cart: [],
        uid: userid,
        email: userEmail,
        name: userName,
        phonenumber: "NotSet",
      };

      await setDoc(userDocRef, userData);
      console.log("User document created:", userData);
    } else {
      console.log("User document already exists. Skipping creation.");
    }
  } catch (error) {
    console.error("Error creating user document:", error);
    throw error; 
  }
}

export default CreateUser;
