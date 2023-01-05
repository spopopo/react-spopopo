import { useEffect, useState, useRef} from "react"
import { playlistsStore, userStore, tokenStore, currentSongStore, createPlaylistStore } from '../../store/store'
import { Loading } from "../../components/Loading"
import { StyledUserInfo } from "./style"
import { Background } from "../../components/Background"

const UserInfo = () => {
    const [createdPlaylist, setCreatedPlaylist] = useState('') 
    
    const tokenData = tokenStore((state: any) => state.token)
    const fetchToken = tokenStore((state: any) => state.fetch)

    const playlistData = userStore((state: any) => state.user)
    const fetchPlaylist = userStore((state: any) => state.fetch)

    const userData = playlistsStore((state: any) => state.playlists)
    const fetchUser = playlistsStore((state: any) => state.fetch)

    const currentSongData = currentSongStore((state: any) => state.song)
    const fetchCurrentSong = currentSongStore((state: any) => state.fetch)

    // const createPlaylist = createPlaylistStore((state: any) => state.createPlaylist)
    // const fetchCreatePlaylist = createPlaylistStore((state: any) => state.fetch)

    const playlistRef: any = useRef("")
    const playlistMusicRef: any = useRef("")

    const client_id = '1ab6ed6e5839430c8d6f235f05e10689'
    const client_secret = '4338d4c231c541d490e7a3c42d6e58c7'
    const redirect_uri = 'http://localhost:5500/info'
    const authCode = window.location.href.split('=')[1]

    const tokenObj = new URLSearchParams({
        grant_type: 'authorization_code',
        code: authCode,
        redirect_uri: redirect_uri
    })

    function logOut(){
        localStorage.clear()
        window.location.href = 'http://localhost:5500'
    }

    useEffect(() => {
        if(!localStorage.getItem('token')){
            fetchToken('https://accounts.spotify.com/api/token', 'POST', client_id, client_secret, tokenObj)
        } else {
            console.log('ola');
        }
    }, [])

    useEffect(() => {
        if(!localStorage.getItem('token') && tokenData.access_token !== undefined){
            localStorage.setItem('token', tokenData.access_token)
        }
        if(localStorage.getItem('token') !== undefined && localStorage.getItem('token')){
            fetchUser('https://api.spotify.com/v1/me', localStorage.getItem('token'), 'GET')
            fetchPlaylist('https://api.spotify.com/v1/me/playlists', localStorage.getItem('token'), 'GET')
            fetchCurrentSong('https://api.spotify.com/v1/me/player/currently-playing', localStorage.getItem('token'), 'GET')
        }   
    }, [tokenData])

    useEffect(() => {
        if(playlistData.href !== undefined){    
            playlistData.items.map((el: any) => {
                let playlist = document.createElement('button')
                playlist.textContent = el.name
                playlist.addEventListener('click', () => {
                    fetch(`https://api.spotify.com/v1/playlists/${el.id}/tracks`, {
                        method: 'GET',
                        headers:{
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    }).then(reponse => reponse.json().then(data => {
                        playlistMusicRef.current.innerHTML = data.items.map((element: any) => (
                            `<p>${element.track.name} </p>`))
                    }))
                })
                playlistRef.current.appendChild(playlist)
            })
        }
    }, [playlistData])

    useEffect(() => {
        if(currentSongData.item !== undefined){
            fetchCurrentSong('https://api.spotify.com/v1/me/player/currently-playing', localStorage.getItem('token'), 'GET')
        }
    }, [currentSongData])

    useEffect(() => {
        console.log(userData);
        
    }, [userData])

    return(
        <>
        {!playlistData.href ? <Loading /> : 
        <StyledUserInfo>
            <div className="user">
                <img src={userData.images[0].url} alt="" className="userPicture"/>
                <h1>Olá <span style={{color: '#1DCC5A'}}>{userData.display_name}</span> :)</h1>
            </div>
            <div ref={playlistRef}></div>
            <div ref={playlistMusicRef}></div>

            {currentSongData.item === undefined || currentSongData.item === null ? 
            <p>não ouvindo nada</p> : 
            <p>Playing: {currentSongData.item.name}</p>}

            {/* <input type="text" onChange={(e) => {setCreatedPlaylist(e.target.value)}}/> */}
            <button onClick={logOut}>logout</button>
        </StyledUserInfo>
        }
        </>
    )
}

export default UserInfo