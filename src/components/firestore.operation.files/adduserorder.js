import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { app } from "../../firebase-config";
import ResetCart from "./resetcart";

async function AddUserOrder(userid, order) {
  try {
    const db = getFirestore(app);
    const ordersCollection = collection(db, "orders");
    const userDocRef = doc(ordersCollection, userid);
    const userDocSnapshot = await getDoc(userDocRef);
    const existingData = userDocSnapshot.exists() ? userDocSnapshot.data() : {};
    await setDoc(userDocRef, {
      ...existingData,
      orders: [...(existingData.orders || []), order],
    });
    console.log("Order added successfully.");
    await ResetCart(userid);
  } catch (error) {
    console.error("Error adding order:", error);
    throw error;
  }
}

export default AddUserOrder;
