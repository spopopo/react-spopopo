import axios from 'axios'
import create from 'zustand'

export const playlistsStore = create((set) => ({
    playlists: {},
    fetch: async (url: string, token: string, methodUser: string) => {
        const reponse = await fetch(url, {
            method: methodUser,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await reponse.json()
        set({playlists: data})
    }
}))

export const userStore = create((set) => ({
    user: {},
    fetch: async (url: string, token: string, methodUser: string) => {
        const reponse = await fetch(url, {
            method: methodUser,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await reponse.json()
        set({user: data})
    }
}))

export const tokenStore = create((set) => ({
    token: {},
    fetch: async (url: string, methodUser: string, client_id: string, client_secret: string, body: string) => {
        const reponse = await fetch(url, {
            method: methodUser,
            headers: {
                'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        })
        const data = await reponse.json()
        set({token: data})
    }
}))

export const currentSongStore = create((set) => ({
    song: {},
    fetch: async (url: string, token: string, methodUser: string) => {
        const reponse = await fetch(url, {
            method: methodUser,
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        const data = await reponse.json()
        set({song: data})
    }
}))

export const createPlaylistStore = create((set) => ({
    createdPlaylist: {},
    fetch: async (url: string, token: string, methodUser: string, bodyUser: string) => {
        const reponse = await fetch(url, {
            method: methodUser,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: bodyUser
        })
        const data = await reponse.json()
        set({createdPlaylist: data})
    }
}))

export const musicPlaylistStore = create((set) => ({
    musicsPlaylist: {},
    fetch: async (url: string, token: string, methodUser: string) => {
        const reponse = await fetch(url, {
            method: methodUser,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        const data = await reponse.json()
        set({musicsPlaylist: data})
    }
}))

export const useProjectsStore = create((set) => ({
    projects: [],
    fetch: async (url: string) => {
        const reponse = await axios.get(url)
        set({projects: await reponse.data})
    }
}))

export const useProjectsStoreFiltred = create((set) => ({
    projects: [],
    fetch: async (url: string) => {
        const reponse = await axios.get(url)
        set({projects: await reponse.data})
    }
}))



// https://api.spotify.com/v1/users/{user_id}/playlists