const _sodium = require('libsodium-wrappers')

module.exports = {
     decryptChallenge : async function(jsonKey,jsonNonce,jsonChallenge) {
        await _sodium.ready
        const key = _sodium.from_base64(jsonKey,_sodium.base64_variants.ORIGINAL)
        const nonce = _sodium.from_base64(jsonNonce,_sodium.base64_variants.ORIGINAL)
        const challenge = _sodium.from_base64(jsonChallenge,_sodium.base64_variants.ORIGINAL)

        const solution = _sodium.crypto_secretbox_open_easy(challenge,nonce,key);

        console.log(solution);

        return solution;
    }
}

