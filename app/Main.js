import { useState, useEffect } from 'react';

export default function Main({userData}) {
    console.log(userData);
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        fetch(`https://corsproxy.io/?${encodeURI(userData.profile_pic_url)}`)
            .then(data => data.blob())
            .then(url => setAvatar(URL.createObjectURL(url)));

        return URL.revokeObjectURL(avatar);
    }, [])

    return (
        <>
        <h1>StalkInsta</h1>
            <img src={avatar} style={{borderRadius : '50%'}} />
        </>
    );
}