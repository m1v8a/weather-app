import data from "./data.json";

export default async function testFetch() {
  return Promise.resolve(
    new Response(JSON.stringify(data), {
      headers: {
        "Content-type": "application/json",
      },
    })
  );
}
