import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = (props) => {
    const urlHash = window.location.hash;
    const access_token = urlHash.substring(14, urlHash.indexOf('&token_type'));
    const [releases, setReleases] = useState(null);

    useEffect(() => {
        const headers = {
            'Authorization': 'Bearer ' + access_token,
        }
        axios.get(`https://api.spotify.com/v1/browse/new-releases`, { headers: headers })
            .then((response) => {
                setReleases(response.data?.albums?.items);
            }, (error) => {
                console.log(error);
            })
    });

    return (
        <div>
            <h1>Top 20 Releases</h1>
            {
                releases?.map(item => {
                    return <div key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item?.images[2]?.url} alt="album cover" />
                    </div>
                })
            }
        </div>
    );
}

export default Home;