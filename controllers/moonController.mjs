// controllers/moonController.mjs
// handles moon phase API proxy and health check
// source: https://www.freeastroapi.com/docs/utilities/moon-phase

// moon phase API proxy
async function getMoonPhase(req, res) {
  try {
    const url = new URL('https://astro-api-1qnc.onrender.com/api/v1/moon/phase');
    url.searchParams.append('date', new Date().toISOString());
    url.searchParams.append('include_visuals', 'true');
    url.searchParams.append('style_moon_color', '#c9b3ff');

    const response = await fetch(url, {
      headers: { 'x-api-key': process.env.ASTRO_API_KEY }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching moon data:', error);
    res.status(500).json({ error: 'Failed to fetch moon phase data' });
  }
}

// health check
function getHealth(req, res) {
  res.json({ status: 'healthy', server: 'Lunary', timestamp: new Date().toISOString() });
}

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
export { getMoonPhase, getHealth };
