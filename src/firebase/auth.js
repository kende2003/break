import { getAuth } from "firebase/auth";
import firebase from "./firebase";

const auth = getAuth(firebase)

export default auth