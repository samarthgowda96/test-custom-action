

import * as core from "@actions/core";
import { createRemoteJWKSet, jwtVerify } from "jose";


export async function validateToken(
        token
    ) {
        const jwks = createRemoteJWKSet(
            new URL("https://token.actions.githubusercontent.com/.well-known/jwks"),
        );
        const { payload } = await jwtVerify(token, jwks, {
            issuer: "https://token.actions.githubusercontent.com",
        });
    return payload;
  }
(
    async () => {
        try{
            const token = await core.getIDToken();
            const res = validateToken(token);
            core.notice("calling our custom action", token)
            core.notice("token verified woooo babyyy:", res)
        }catch(e){
            core.setFailed(e.message)
        }
    }
)()