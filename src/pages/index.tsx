import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { getOptionsForVote } from "../utils/getRandomPlayer";
import { PlayersContext } from "../context/PlayersContext";
import Link from "next/link";

const styles = {
  container: "h-screen w-screen flex flex-col justify-center items-center",
  menuBar: "flex gap-[3rem] xs:mb-[1rem] sm:mb-[3rem]",
  menuButton:
    "border-2 border-black p-2 rounded-[.2rem] px-[3rem] text-center hover:bg-[#000] hover:text-white cursor-pointer",
  title: "xs:text-3xl sm:text-3xl text-b text-center",
  main: "flex xs:flex-col sm:flex-col md:flex-row xl:flex-row justify-between items-center max-w-2xl xs:p-1 sm:p-8 ",
  card: "xs:w-[200px] sm:w-full h-full flex flex-col gap-[2rem] justify-center items-center object-contain 	transition ease-in-out",
  cardImage: "w-full h-full",
  selectButton:
    "border-2 border-black p-2 min-w-[200px] rounded-[.2rem] hover:bg-[#000] hover:text-white",
  divider: "xs:p-1 sm:p-8",
};

function Home() {
  const { players, submitToFirebase } = useContext(PlayersContext);

  const [firstPlayer, setFirstPlayer] = useState({
    id: Number,
    name: "",
    src: "",
    uid: "",
  });
  const [secondPlayer, setSecondPlayer] = useState({
    id: Number,
    name: "",
    src: "",
    uid: "",
  });

  useEffect(() => {
    const generateData = async () => {
      const [first, second] = getOptionsForVote();
      setFirstPlayer(players.find((player: any) => first == player.id));
      setSecondPlayer(players.find((player: any) => second == player.id));
    };
    generateData();
  }, []);

  function submitVote(selection: any) {
    submitToFirebase(selection);
    const [first, second] = getOptionsForVote();
    setFirstPlayer(players.find((player: any) => first == player.id));
    setSecondPlayer(players.find((player: any) => second == player.id));
  }

  if (firstPlayer == undefined || secondPlayer == undefined) {
    const firstPlayer = {
      id: 27,
      name: "Valentin Rosier",
      src: "https://firebasestorage.googleapis.com/v0/b/next-2ef7f.appspot.com/o/STSL-players%2FRosier.png?alt=media&token=154dad0f-8287-406c-9b66-831fc4a0a07f",
      uid: "HGQodL0hlC8zre9LVyDm",
    };
    const secondPlayer = {
      id: 1,
      name: "Dries Mertens",
      src: "https://firebasestorage.googleapis.com/v0/b/next-2ef7f.appspot.com/o/STSL-players%2FMertens.png?alt=media&token=a9b00258-23b9-4db1-8c87-a004edaf3a21",
      uid: "xsNXiatJ7WBtwDGk2GoL",
    };

    return (
      <div className={styles.container}>
        <div className={styles.menuBar}>
          <Link href={"/"}>
            <div className={styles.menuButton}> ⚽️ </div>
          </Link>
          <Link href={"/order"}>
            <div className={styles.menuButton}>🏆</div>
          </Link>
        </div>
        <div className={styles.title}>Which player is funnier? 🤪</div>
        <div className={styles.divider}></div>
        <div className={styles.main}>
          <div className={styles.card}>
            <Image
              className={styles.cardImage}
              src={firstPlayer?.src}
              width={722}
              height={940}
            />

            <button
              className={styles.selectButton}
              onClick={() => submitVote(firstPlayer.uid)}
            >
              {firstPlayer?.name}
            </button>
          </div>
          <div className={styles.divider}>Vs</div>
          <div className={styles.card}>
            <Image
              className={styles.cardImage}
              src={secondPlayer?.src}
              width={722}
              height={940}
            />

            <button
              className={styles.selectButton}
              onClick={() => submitVote(secondPlayer.uid)}
            >
              {" "}
              {secondPlayer?.name}{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.menuBar}>
        <Link href={"/"}>
          <div className={styles.menuButton}> ⚽️ </div>
        </Link>
        <Link href={"/order"}>
          <div className={styles.menuButton}>🏆</div>
        </Link>
      </div>
      <div className={styles.title}>Which player is funnier? 🤪</div>
      <div className={styles.divider}></div>
      <div className={styles.main}>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src={firstPlayer?.src}
            width={722}
            height={940}
          />

          <button
            className={styles.selectButton}
            onClick={() => submitVote(firstPlayer.uid)}
          >
            {firstPlayer?.name}
          </button>
        </div>
        <div className={styles.divider}>Vs</div>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src={secondPlayer?.src}
            width={722}
            height={940}
          />

          <button
            className={styles.selectButton}
            onClick={() => submitVote(secondPlayer.uid)}
          >
            {" "}
            {secondPlayer?.name}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
