const {decryptChallenge} = require("./decrypt");
const {post} = require("./request");
const {get} = require("./request");
const {del} = require("./request");

losOp()

async function losOp() {
    const opgave = await get("1377048785")
    console.log(opgave)
}


/*
let promise = new Promise(function(resolve, reject) {

    const opgave = get("1377048785")

    if (1 == 1) {
        resolve("Resolved");
        console.log(opgave)
        return opgave
    } else {
        reject("Rejected");
    }
});
*/
//const kid = opgave['kid']
/*
const jsonKey = opgave.valueOf('key')
const jsonNonce = opgave.valueOf('nonce')
const jsonChallenge = opgave.valueOf('challenge')
*/
/*
//test
const jsonKey = "3dtnhbSprv6YR1NBLUUPzRQiBmfkjO7r2hNwaS7A7IY="
const jsonNonce = "T8wOAqZhQx4/aKRdKR0Aq32iW3dVN2Q0"
const jsonChallenge = "fyBkvJ86M8H56jMwG0cczFbhus4NhiF3Xs5UrjcrR3/iofJVb26CzHkMpfmtp6YIYbtZFPYDPXzJJqkUpl12XwXkLyAyQ5+zkPPNeVvSTp8fx3ajTDcJSbccgVapJoVlpCG6+7dHQ8VzuwqfN+Cg4Cy5a/OdTBIFfgztHZHmjT9KNaMx6elL8toSMxuZHUPB"
*/

//console.log(kid)

//decryptChallenge(jsonKey,jsonNonce,jsonChallenge);

