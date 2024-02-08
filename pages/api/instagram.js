import { IgApiClient } from 'instagram-private-api';

export default async function handler(req, res) {
    const ig = new IgApiClient();
    process.env.IG_USERNAME = req.headers.login;
    process.env.IG_PASSWORD = req.headers.password;
    let serialized;

    ig.state.generateDevice(process.env.IG_USERNAME);

    ig.request.end$.subscribe(async () => {
        serialized = await ig.state.serialize();
        delete serialized.constants;
        console.log(serialized);
      });

    const infos = {'userData': await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD), 'sessionData': serialized};
    process.nextTick(async () => await ig.simulate.postLoginFlow());
    
    res.status(200).json(infos);
}