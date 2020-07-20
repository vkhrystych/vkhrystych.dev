import fetch from "node-fetch";

export default async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();

  return json;
};
