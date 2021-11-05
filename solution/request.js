const axios = require('axios')
const link = "https://79vo67ipp9.execute-api.eu-west-1.amazonaws.com/Prod/decrypt/challenges"

module.exports = {
    post : function(){
        axios
            .post(link)
            .then(res => {
                //console.log(`statusCode: ${res.status}`)
                //console.log(res)
                return res.data;
            })
            .catch(error => {
                console.error(error)
            })
    },
    get : function(kid){
        axios
            .get(link + '/' + kid)
            .then(res => {
                //console.log(`statusCode: ${res.status}`)
                //console.log(res)
                console.log(res.data)
                return res.data;
            })
            .catch(error => {
                console.error(error)
            })

    },
    del : function (kid,solution){

    }
}

