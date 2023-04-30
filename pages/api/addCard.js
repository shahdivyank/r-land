import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  updateDoc(doc(db, "users", req.body.uid), {
    cardList: {
      [req.body.card]: { [req.body.number]: true },
    },
  })
    .then(() => {
      console.log(req.body.card);
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json();
      return;
    });
  res.status(200).json();
}
