import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "62ki5k9t641t",
    accessToken: "vyZKvY9yhifl-3OPQ3_EfIoy-jvtgb6BK0VeZ8DLlag",
    host: "preview.contentful.com",
  });



  const body = {
    content_type: "player",
    select: "fields",
    order: "fields.id",
  };

  const getAuthors = async () => {
    try {
      const entries = await client.getEntries(body);
      const filteredEntries = entries.items.map((item) => {
        const playerImage = item.fields.playerImage;

        return {
          ...item.fields,
          playerImage,
        };
      });

      return filteredEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getAuthors };
};

export default useContentful;
