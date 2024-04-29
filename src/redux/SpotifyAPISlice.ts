import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Artist } from '../types/Artist'
import { RootState } from './store';
import { Track } from '../types/Track';

export const SpotifyAPISlice = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        //const state: RootState = getState();
          baseUrl: 'https://api.spotify.com/v1/search/',
          prepareHeaders: (headers, api) => {
            const state = api.getState() as RootState;
            const token = state.auth.accessToken;
            const authHeader = `Bearer ${token}`;
            if (token) {
            
              headers.set('Authorization', authHeader);
            }
            return headers;
          },
      }),    
      endpoints: (builder) => ({
        searchTrack: builder.query<
            {tracks: {
                items: Array<Track>
            }},
            { query: string }
        >({
            query: ({ query }) => `?q=${query}&type=track`,
        }),
        searchAlbums: builder.query<Artist, { query: string }>({
            query: ({ query }) => `?q=${query}&type=albums`,
        }),
        searchPlaylist: builder.query<Artist, { query: string }>({
            query: ({ query }) => `?q=${query}&type=playlists`,
        }),
        searchArtists: builder.query<Artist, { query: string }>({
            query: ({ query }) => `?q=${query}&type=artists`,
        }),
    }),
})

export const {
    useSearchTrackQuery,
    useSearchAlbumsQuery,
    useSearchPlaylistQuery,
    useSearchArtistsQuery,
} = SpotifyAPISlice
