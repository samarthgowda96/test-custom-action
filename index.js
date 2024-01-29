
const auth = require("@ihr-radioedit/service-auth");
const core = require("@actions/core");
const github = require("@actions/github");

(
    async () => {
        try{
            const client = AuthClient.auto();
            const me = await client.getMyPrincipal().ifLeft(e => console.error(e)).orDefault(null);
            console.log(me);
            core.notice("calling our custom action", me)
        }catch(e){
            core.setFailed(e.message)
        }
    }
)()