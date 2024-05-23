import React, { useEffect, useState } from "react";
import classes from "./Mainpage.module.css";
import useContentful from "../Hooks/useContentful";
import Formation from "../Formation/Formation";
import PlayerList from "../PlayerList/Playerlist";

const Mainpage = () => {
  const [authors, setAuthors] = useState<any>([]);
  const { getAuthors } = useContentful();

  useEffect(() => {
    console.log("hjeree");
    getAuthors().then((response) => {
      console.log("RESPONSE", response);
      setAuthors(response);
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.formation}>
        <Formation playerList={authors} />
      </div>
      <div className={classes.playerList}>
        {authors.map((player: any) => {
          return (
            <PlayerList
              name={player?.name}
              position={player?.position}
              image={player?.playerImage?.fields?.file?.url}
              country={player?.countryCode}
              logo={player?.countryLogo?.fields?.file?.url}
              link={player?.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Mainpage;
