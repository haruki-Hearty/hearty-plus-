import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'heartyplus',
  apiKey: process.env.API_KEY,
});
