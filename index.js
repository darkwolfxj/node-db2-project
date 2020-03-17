const server = require("./api/server")
const PORT = 5000
server.listen(PORT, () => console.log(` \n** API Listening on http://localhost:${ PORT } **\n `))

module.exports = server