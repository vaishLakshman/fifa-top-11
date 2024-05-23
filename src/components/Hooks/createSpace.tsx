import { createClient } from "contentful-management";

const client = createClient({
  accessToken: "nRhMteOfrbrVWH-_ML0PsxFc8tB9hdCHc4pSQvCfVK8",
});

client
  .createSpace(
    {
      name: "Sample space",
    },
    ""
  )
  .then((space) => console.log(space))
  .catch(console.error);
