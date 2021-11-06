const {decryptChallenge} = require("./decrypt");
const {post} = require("./request");
//const {get} = require("./request");
const {del} = require("./request");

const solve = async () => {
    const postReturn = await post()
    const postData = postReturn.data
    console.log(postData);

    const kid = postData.kid
    const jsonKey = postData.key
    const jsonNonce = postData.nonce
    const jsonChallenge = postData.challenge

    const decrypted = await decryptChallenge(jsonKey,jsonNonce,jsonChallenge);
    await del(kid, decrypted)
}

solve();
