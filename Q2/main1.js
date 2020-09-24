
const statExpress = require('./statExpress');
const PORT = process.env.PORT || 3232;

statExpress.listen(PORT);
console.log('server running', PORT);

