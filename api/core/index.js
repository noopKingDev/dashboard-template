const api = require("lambda-db")

api.get("/", (req, res) => {
    return {
        "Oi": true
    }
})

exports.handler = async (event, context) => {
    // Run the request
    return await api.run(event, context);
  };