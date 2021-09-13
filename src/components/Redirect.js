import React, { useEffect } from 'react';

const Redirect = (props) => {
    const clientId = 'd2929aa8ee6e45e59ee7b9b1710b3d4c';
    const redirect_uri = 'http://localhost:3000/home';

    useEffect(() => {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=token&state=123`;
    }, []);

    return (
        <div>
        </div>
    );
}

export default Redirect;