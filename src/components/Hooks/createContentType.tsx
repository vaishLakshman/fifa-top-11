import {
  ContentFields,
  KeyValueMap,
  createClient,
} from "contentful-management";
import { SampleContentType } from "../../interfaces/Interfaces";
import { ContentTypeAllowedResources } from "contentful";

const client = createClient({
  accessToken: "nRhMteOfrbrVWH-_ML0PsxFc8tB9hdCHc4pSQvCfVK8",
});

// const resource: ContentTypeAllowedResources[] = [
//   {
//     type: "dsfsdf",
//     source: "sdfsdf",
//     contentTypes: ["sdfsf", "sdfdsf"],
//   },
// ];

// const fields: ContentFields<KeyValueMap>[] = [
//   {
//     id: "0",
//     name: "sample",
//     required: true,
//     localized: false,
//     allowedResources: resources,
//   },
// ];

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

client
  .getSpace("62ki5k9t641t")
  .then((space) => space.getEnvironment("master"))
  .then((environment) => environment.createContentType(data))
  .then((contentType) => console.log(contentType))
  .catch(console.error);
