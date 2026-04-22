// middleware/errorHandler.mjs
// basic error-handling middleware for Express
// source: https://expressjs.com/en/guide/error-handling.html
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
}

export default errorHandler;
