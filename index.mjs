
import {AuthClient} from "@ihr-radioedit/service-auth";
import { notice, setFailed } from "@actions/core";
import github from "@actions/github";

(
    async () => {
        try{
            const client = AuthClient.auto();
            const me = await client.getMyPrincipal().ifLeft(e => console.error(e)).orDefault(null);
            console.log(me);
            notice("calling our custom action", me)
        }catch(e){
            setFailed(e.message)
        }
    }
)()