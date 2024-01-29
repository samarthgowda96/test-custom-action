const core = require("@actions/core");
const github = require("@actions/github");

(
    async () => {
        try{
           core.notice("calling our custom action")
        }catch(e){
            core.setFailed(e.message)
        }
    }
)()