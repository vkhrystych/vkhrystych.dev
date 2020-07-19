import fetch from "node-fetch";

export default async () => {
  const response = await fetch("https://api.kanye.rest");
  const json = await response.json();

  return json.quote;
};
