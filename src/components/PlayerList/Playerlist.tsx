import classes from "./Playerlist.module.css";
import arrow from "./arrow.png";

interface ListProps {
  name: string;
  position: string;
  image: string;
  country: string;
  logo: string;
  link: string;
}

const PlayerList = ({
  name,
  position,
  image,
  country,
  logo,
  link,
}: ListProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={image} alt="player" />
      </div>
      <div className={classes.infoContainer}>
        <h2>{name}</h2>
        <h3>{position}</h3>
        <div className={classes.subContainer}>
          <h4>{country}</h4>
          <div className={classes.logoContainer}>
            <img src={logo} alt="country flag" />
          </div>
        </div>
      </div>
      <div className={classes.navigator}>
        <a href={link} target="_blank">
          <img src={arrow} alt="country flag" />
        </a>
      </div>
    </div>
  );
};

export default PlayerList;
