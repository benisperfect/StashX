import { defineEventHandler, getCookie } from 'h3';

export default defineEventHandler(async (event) => {
  const username = getCookie(event, 'username');
  return { username };
});
