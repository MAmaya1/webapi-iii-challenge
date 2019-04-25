// code away!
const server = require('./server');

const port = process.env.PORT || 5000; // for dynamic port

server.listen(port, () => {
    console.log('\n *** Server running on http://localhost:5000 *** \n')
});