const axios = require('axios');

const link = "https://79vo67ipp9.execute-api.eu-west-1.amazonaws.com/Prod/decrypt/challenges"

const post = async () => {
    return await axios
        .post(link)
        .catch(error => {
            console.error(error)
        })
}
const get = async (kid) => {
    return await axios
        .get(link + '/' + kid)
        .catch(error => {
            console.error(error)
        })
}
const del = async (kid, data) => {
    await axios
        .delete(link + '/' + kid, {data : {plaintext : data}})
        .then(ret => console.log(ret.status))
        .catch(error => {
            console.error(error)
        })
}

module.exports = {
 post,get,del
}

