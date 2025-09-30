export default async function handler(req, res) {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  const response = await fetch(
    `https://cdn.contentful.com/spaces/${space}/environments/master/entries?access_token=${accessToken}&content_type=service`
  );

  const data = await response.json();
  res.status(200).json(data);
}