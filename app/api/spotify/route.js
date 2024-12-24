import getItems from "../../_components/Spotify/SpotifyAPI";

export const revalidate = 0;

export async function GET() {
    console.log('Checking env vars:', {
        hasClientId: !!process.env.SPOTIFY_CLIENT_ID,
        hasClientSecret: !!process.env.SPOTIFY_CLIENT_SECRET,
        hasRefreshToken: !!process.env.SPOTIFY_REFRESH_TOKEN
    });
    try {
        const response = await getItems(
            process.env.SPOTIFY_CLIENT_ID,
            process.env.SPOTIFY_CLIENT_SECRET,
            process.env.SPOTIFY_REFRESH_TOKEN
        );
        
        if (!response) {
            return Response.json({ error: "No data received from Spotify" }, { status: 404 });
        }
        
        return Response.json(response);
    } catch (error) {
        console.error('Error fetching Spotify data:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}