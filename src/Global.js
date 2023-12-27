import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  c_businessName,
  c_email,
  emailPublicKey,
  emailServiceID,
} from "./Constants";
import emailjs from "@emailjs/browser";
import { renderToString } from "react-dom/server";

const firebaseConfig = {
  apiKey: "AIzaSyC0RAfAODot6nc0dI1KMmWfZR6UErzoZ8Q",
  authDomain: "iicweblinetemplate.firebaseapp.com",
  projectId: "iicweblinetemplate",
  storageBucket: "iicweblinetemplate.appspot.com",
  messagingSenderId: "747381820614",
  appId: "1:747381820614:web:05ae5b7cca41a3f02e5bc7",
  measurementId: "G-P39ZZ3P6R6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth();
export var me = {};
export var myID = "";
export var myToken = "";

export const screenHeight = window.innerHeight;
export const screenWidth = window.innerWidth;

export function randomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
export function function_sendEmail(toEmail, subject, HTML, templateID) {
  emailjs.send(
    emailServiceID,
    templateID,
    {
      toEmail: toEmail,
      fromName: c_businessName,
      subject: subject,
      fromEmail: c_email,
      replyTo: c_email,
      HTML: renderToString(HTML),
    },
    emailPublicKey
  );
}
export function function_sendBusinessEmail(
  fromEmail,
  subject,
  HTML,
  templateID
) {
  emailjs.send(
    emailServiceID,
    templateID,
    {
      toEmail: c_email,
      fromName: c_businessName,
      subject: subject,
      fromEmail: fromEmail,
      replyTo: fromEmail,
      HTML: renderToString(HTML),
    },
    emailPublicKey
  );
}

// FUNCTIONS
export async function auth_IsUserSignedIn(
  setLoading,
  navigation,
  ifLoggedIn,
  ifNotLoggedIn,
  setter
) {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      myID = uid;
      setter(uid);
      firebase_UpdateToken(myToken);
      firebase_GetMe(uid);
      navigation(ifLoggedIn);
      setLoading(false);
    } else {
      setLoading(false);
      navigation(ifNotLoggedIn);
    }
  });
}
export function auth_SignIn(setLoading, email, password, navigation, redirect) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const userID = user.uid;
      myID = userID;
      firebase_UpdateToken(myToken);
      firebase_GetMe(userID);
      console.log(userID);
      setLoading(false);
      navigation(redirect);
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      setLoading(false);
      alert(errorMessage);
    });
}
export function auth_SignOut(setLoading, navigation, redirect) {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      setLoading(false);
      console.log("USER SIGNED OUT");
      navigation(redirect);
    })
    .catch((error) => {
      // An error happened.
      setLoading(false);
      alert(error);
    });
}
export function auth_CreateUser(
  setLoading,
  email,
  password,
  args,
  navigation,
  redirect
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      const uid = user.uid;
      myID = uid;
      firebase_UpdateToken(myToken);
      firebase_CreateUser(args, uid).then(() => {
        setLoading(false);
        navigation(redirect);
      });
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      setLoading(false);
      // ..
    });
}
export function auth_ResetPassword(email) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      alert("Please check your email for a reset password link.");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
}
export async function firebase_CreateUser(args, uid) {
  await setDoc(doc(db, "Users", uid), args);
}
export async function firebase_GetMe(uid) {
  const docRef = doc(db, "Users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const user = {
      id: docSnap.id,
      ...docSnap.data(),
    };
    me = user;
    console.log(me);
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
export async function firebase_GetDocument(
  setLoading,
  table,
  documentID,
  setter
) {
  const docRef = doc(db, table, documentID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const thing = {
      id: docSnap.id,
      ...docSnap.data(),
    };
    setter(thing);
    setLoading(false);
    console.log("GET DOCUMENT");
  } else {
    console.log("No such document!");
    setLoading(false);
  }
}
export async function firebase_GetAllDocuments(
  setLoading,
  table,
  setter,
  docLimit,
  order,
  orderField,
  whereField,
  whereCondition,
  whereValue
) {
  console.log("GETTING DOCS");
  const collectionRef = collection(db, table);
  let queryRef = collectionRef;

  if (docLimit > 0) {
    if (whereField !== "" && whereField !== null && whereField !== undefined) {
      queryRef = query(
        queryRef,
        where(whereField, whereCondition, whereValue),
        orderBy(orderField, order),
        limit(docLimit)
      );
    } else {
      queryRef = query(queryRef, orderBy(orderField, order), limit(docLimit));
    }
  } else {
    if (whereField !== "" && whereField !== null && whereField !== undefined) {
      queryRef = query(
        queryRef,
        where(whereField, whereCondition, whereValue),
        orderBy(orderField, order)
      );
    } else {
      queryRef = query(queryRef, orderBy(orderField, order));
    }
  }

  const querySnapshot = await getDocs(queryRef);
  const things = [];

  querySnapshot.forEach((doc) => {
    const thing = {
      id: doc.id,
      ...doc.data(),
    };
    things.push(thing);
  });

  setter(things);
  setLoading(false);
}
export function firebase_GetAllDocumentsListener(
  setLoading,
  table,
  setter,
  docLimit,
  order,
  orderField,
  whereField,
  whereCondition,
  whereValue
) {
  console.log("GETTING DOCS");
  const collectionRef = collection(db, table);
  let queryRef = collectionRef;

  if (docLimit > 0) {
    if (whereField !== "" && whereField !== null && whereField !== undefined) {
      queryRef = query(
        queryRef,
        where(whereField, whereCondition, whereValue),
        orderBy(orderField, order),
        limit(docLimit)
      );
    } else {
      queryRef = query(queryRef, orderBy(orderField, order), limit(docLimit));
    }
  } else {
    if (whereField !== "" && whereField !== null && whereField !== undefined) {
      queryRef = query(
        queryRef,
        where(whereField, whereCondition, whereValue),
        orderBy(orderField, order)
      );
    } else {
      queryRef = query(queryRef, orderBy(orderField, order));
    }
  }

  const _ = onSnapshot(queryRef, (querySnapshot) => {
    const things = [];
    querySnapshot.forEach((doc) => {
      const thing = {
        id: doc.id,
        ...doc.data(),
      };
      things.push(thing);
    });
    setter(things);
    setLoading(false);
  });
}
export async function firebase_CreateDocument(args, table, documentID) {
  await setDoc(doc(db, table, documentID), args);
}
export async function firebase_UpdateDocument(
  setLoading,
  table,
  documentID,
  args
) {
  const washingtonRef = doc(db, table, documentID);
  await updateDoc(washingtonRef, args);
  setLoading(false);
}
export async function firebase_DeleteDocument(setLoading, table, documentID) {
  await deleteDoc(doc(db, table, documentID));
  setLoading(false);
}
export async function firebase_DeleteDocuments(
  setLoading,
  table,
  whereField,
  whereValue
) {
  const collectionRef = collection(db, table);
  let queryRef = collectionRef;
  queryRef = query(queryRef, where(whereField, "==", whereValue));
  const querySnapshot = await getDocs(queryRef);
  const things = [];

  querySnapshot.forEach((doc) => {
    const id = doc.id;
    firebase_DeleteDocument(setLoading, table, id);
  });
  setLoading(false);
}
export async function firebase_UpdateToken(token) {
  const washingtonRef = doc(db, "Users", myID);

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    Token: token,
  });
}
export async function storage_UploadImage(setLoading, image, path) {
  setLoading(true);
  try {
    // Convert the data URL to a Blob
    const imageBlob = await fetch(image).then((res) => res.blob());

    // Upload the Blob to Firebase Storage
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, imageBlob);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle progress changes, if needed
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Handle errors
        console.error("Error uploading image:", error);
        setLoading(false); // Update loading state in case of an error
      },
      async () => {
        // Handle successful completion
        setLoading(false); // Update loading state
      }
    );
  } catch (error) {
    console.error("Error creating document: ", error);
    setLoading(false); // Update loading state in case of an error
  }
}
export async function storage_DownloadImage(path, setter) {
  const storageRef = ref(storage, path);

  try {
    const url = await getDownloadURL(storageRef);

    // Now, you can use the obtained URL directly without XMLHttpRequest
    setter(url);
  } catch (error) {
    // Handle any errors
    console.error("Error downloading image:", error.message);
  }
}
