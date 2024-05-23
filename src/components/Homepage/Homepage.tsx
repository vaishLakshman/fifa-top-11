import classes from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";
import { createClient } from "contentful-management";

const Homepage = () => {
  const navigate = useNavigate();
  // const client = createClient({
  //   accessToken: "nRhMteOfrbrVWH-_ML0PsxFc8tB9hdCHc4pSQvCfVK8",
  // });

  const client = createClient({
    space: "62ki5k9t641t",
    accessToken: "vyZKvY9yhifl-3OPQ3_EfIoy-jvtgb6BK0VeZ8DLlag",
    host: "preview.contentful.com",
  });

  const data: any = {
    name: "Sample",
    fields: [
      {
        id: 1,
        name: "Title",
        required: true,
        localized: false,
        type: "Text",
      },
    ],
  };

  const handleClick = () => {
    navigate("/home");
    // client
    //   .createSpace(
    //     {
    //       name: "Sample space",
    //     },
    //     ""
    //   )
    //   .then((space) => console.log("Space response", space))
    //   .catch(console.error);

    client.getSpace("62ki5k9t641t").then((space) =>
      space.getEnvironment("amazing").then((env) => {
        console.log("ENVMRNT", env);
      })
    );
    // space.getEnvironment("master").then(
    //   (environment) => console.log("MASTER?", environment)
    // environment
    //   // .createContentType(data)
    //   .getContentType("player")
    //   .then((contentType) => console.log("ContentType", contentType))
    //   .catch(console.error)
    // );
    // );
  };

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <h3>Welcome to Top 11 of FIFA - 2020</h3>
        <button onClick={handleClick}>Enter</button>
      </div>
    </div>
  );
};

export default Homepage;
