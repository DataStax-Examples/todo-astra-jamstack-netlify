const fetch = require('cross-fetch')
const ENDPOINT = `https://${process.env.ASTRA_DB_ID}-${process.env.ASTRA_DB_REGION}.apps.astra.datastax.com/api/rest/v1`;
const ASTRA_DB_USERNAME = process.env.ASTRA_DB_USERNAME;
const ASTRA_DB_PASSWORD = process.env.ASTRA_DB_PASSWORD;

module.exports = async function getAuthToken() {
  try {
    const response = await fetch(`${ENDPOINT}/auth`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: ASTRA_DB_USERNAME,
        password: ASTRA_DB_PASSWORD,
      }),
    });
    return await response.json();
  } catch (e) {
    throw new Error('Could not authenticate with the Astra API');
  }
}
