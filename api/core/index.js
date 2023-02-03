const api = require("lambda-api")()
const request = require("request")

api.get("/", (req, res) => {
    
    return new Promise(resolve, reject ) => {
        request("https://chk-cc-tester-1.noopdev.repl.co", (error, response, body ) => {
            if(error) return reject(error)
            return resolve(body)
        })
    }
})

exports.handler = async (event, context) => {
    // Run the request
    return await api.run(event, context);
  };