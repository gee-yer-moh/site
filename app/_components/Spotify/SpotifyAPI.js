import querystring from "querystring";
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

const getAccessToken = async (client_id, client_secret, refresh_token) => {

    if (!client_id || !client_secret || !refresh_token) {
        throw new Error('Missing required credentials');
    }


    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Token refresh failed: ${error}`);
    }

    return response.json();
};

export const getNowPlaying = async (client_id, client_secret, refresh_token) => {
    const { access_token } = await getAccessToken(
        client_id,
        client_secret,
        refresh_token
    );
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const getRecentlyPlayed = async (client_id, client_secret, refresh_token) => {
    const { access_token } = await getAccessToken(
        client_id,
        client_secret,
        refresh_token
    );
    return fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export default async function getItems(
    client_id,
    client_secret,
    refresh_token
) {
    const recentlyPlayed = await getRecentlyPlayed(client_id, client_secret, refresh_token);
    const nowPlaying = await getNowPlaying(client_id, client_secret, refresh_token);

    const recentlyPlayedSong = await recentlyPlayed.json();
    let nowPlayingSong = null;

    try {
        nowPlayingSong = await nowPlaying.json();
    } catch (error) {
        // do nothing
    }
    
    return {
        recentlyPlayedSong,
        nowPlayingSong,
    };
}