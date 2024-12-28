# site
My personal website. Feel free to look around.

- **Framework**: Next.js
- **Deployment**: Vercel
- **Analytics**: PostHog
- **Styling**: Pure CSS

# run locally

```bash
git clone https://github.com/leerob/site.git
cd site
npm install
npm run dev
```

Optionally, create a `.env` file with the following variables:

```
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
SPOTIFY_REFRESH_TOKEN
NEXT_PUBLIC_POSTHOG_KEY
NEXT_PUBLIC_POSTHOG_HOST
```

I used [this guide](https://medium.com/@stvehayes/working-with-spotifys-api-to-display-currently-playing-with-react-99544f8797d8) to get the Spotify API working.

# improvements
- tailwind over pure css
- motion for animations
- internationalization thru library
- optimize for ssr

# license
Use this as inspiration. Please do not copy it directly. Credit is appreciated.

# inspiration
- [leerob.com](https://leerob.com/)
- [pranathiperi.com](https://pranathiperi.com/)
