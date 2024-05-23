import React, { useEffect, useState } from "react";
import classes from "./Formation.module.css";
import gif from "./loading.gif";

interface FormationProps {
  playerList: any;
}

const Formation = ({ playerList }: FormationProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  console.log("Formation Props", playerList);

  const handleImages = (id: number) => {
    let src: string = "";
    playerList.map((player: any) => {
      if (player.id === id) {
        src = player?.playerImage?.fields?.file?.url;
      }
    });
    return src;
  };

  return (
    <div className={classes.container}>
      {!loading ? (
        <div className={classes.data}>
          <div className={classes.player1}>
            <img src={handleImages(1)} alt="player" />
          </div>
          <div className={classes.secondLine}>
            <div className={classes.player20}>
              <img src={handleImages(2)} alt="player" />
            </div>
            <div className={classes.player21}>
              <img src={handleImages(3)} alt="player" />
            </div>
          </div>
          <div className={classes.thirdLine}>
            <div className={classes.player30}>
              <img src={handleImages(5)} alt="player" />
            </div>
            <div className={classes.player31}>
              <img src={handleImages(4)} alt="player" />
            </div>
            <div className={classes.player32}>
              <img src={handleImages(6)} alt="player" />
            </div>
          </div>
          <div className={classes.defenseLine}>
            <div className={classes.player40}>
              <img src={handleImages(9)} alt="player" />
            </div>
            <div className={classes.player41}>
              <img src={handleImages(7)} alt="player" />
            </div>
            <div className={classes.player42}>
              <img src={handleImages(8)} alt="player" />
            </div>
            <div className={classes.player43}>
              <img src={handleImages(10)} alt="player" />
            </div>
          </div>
          <div className={classes.goalie}>
            <img src={handleImages(11)} alt="player" />
          </div>
        </div>
      ) : (
        <div className={classes.loading}>
          <img src={gif} alt="loading" />
        </div>
      )}
    </div>
  );
};

export default Formation;
