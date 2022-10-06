import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";
// import SchoolPride from "../components/Confetti";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const styles = {
  container: "h-screen w-screen flex flex-col justify-center items-center",
  menuBar: "flex gap-[3rem] mb-[3rem]",
  menuButton:
    "border-2 border-black p-2 rounded-[.2rem] px-[3rem] text-center hover:bg-[#000] hover:text-white cursor-pointer",
  title: "text-3xl text-bold text-center",
  main: "flex flex-col justify-between items-center max-w-[375px] p-8",
  card: "xs:w-[200px] sm:w-full h-full flex flex-col gap-[2rem] justify-center items-center object-contain 	transition ease-in-out",
  cardImage: "w-full h-full",
  selectButton:
    "border-2 border-black p-2 min-w-[200px] rounded-[.2rem] hover:bg-[#000] hover:text-white",
  divider: "my-[2rem] border-[1px] border-[#292929] w-full",
  top10: "flex justify-center items-center flex-wrap gap-[1rem]",
};

const SchoolPride = dynamic(() => import("../components/Confetti"), {
  suspense: true,
});

function order() {
  const { players } = useContext(PlayersContext);

  const funniest = players
    .sort((a: any, b: any) => (a.vote > b.vote ? -1 : 1))
    .slice(0, 1);

  const top10 = players
    .sort((a: any, b: any) => (a.vote > b.vote ? -1 : 1))
    .slice(1, 10);

  return (
    <div className={styles.container}>
      <Suspense fallback={`Loading...`}>
        <SchoolPride />
      </Suspense>
      <div className={styles.menuBar}>
        <Link href={"/"}>
          <div className={styles.menuButton}> ⚽️ </div>
        </Link>
        <Link href={"/order"}>
          <div className={styles.menuButton}>🏆</div>
        </Link>
      </div>
      <h1 className={styles.title}>Funniest Player</h1>
      <div className={styles.main}>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src={funniest[0]?.src}
            width={722}
            height={940}
          />

          <button className={styles.selectButton}>{funniest[0]?.name}</button>
        </div>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.top10}>
        {top10.map((player: any, index: any) => (
          <div key={player.id}>{player.name}</div>
        ))}
      </div>
    </div>
  );
}

export default order;
