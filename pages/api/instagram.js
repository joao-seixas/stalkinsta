import { IgApiClient } from 'instagram-private-api';

export default async function handler(req, res) {
    const ig = new IgApiClient();
    process.env.IG_USERNAME = req.headers.login;
    process.env.IG_PASSWORD = req.headers.password;

    ig.state.generateDevice(process.env.IG_USERNAME);

    const loggedInUser = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
    process.nextTick(async () => await ig.simulate.postLoginFlow());
    res.status(200).json(loggedInUser);
}