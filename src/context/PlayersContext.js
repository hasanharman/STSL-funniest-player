import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase";

const PlayersContext = createContext();

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const querySnapshot = await getDocs(collection(db, "players"));
      setPlayers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.data().id,
            name: doc.data().name,
            src: doc.data().src,
            vote: doc.data().vote,
            uid: doc.data().uid
          };
        })
      );
    };
    getPlayers();
  }, []);

  async function submitToFirebase(selection) {
    const voteValueRef = doc(db, "players", selection)
    await updateDoc(voteValueRef, {
      vote: increment(1)
    })

    // await setDoc(doc(db, "players", selection ), {
    //   vote: + 1
    // },
    // {merge: true})
  }

  return (
    <PlayersContext.Provider value={{ players, submitToFirebase }}>
      {children}
    </PlayersContext.Provider>
  );
};

export { PlayersContext, PlayersProvider };
