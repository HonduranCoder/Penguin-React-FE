import request from 'superagent';

const URL = 'http://localhost:7890';


export async function searchBooks(query) {
  const { body } = await request.get(`${URL}/search?q=${query}`);

  return body;
}