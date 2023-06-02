import { useEffect, useState, useRef } from "react"
import { playlistsStore, userStore, tokenStore, currentSongStore, createPlaylistStore } from '../../store/store'
import { Loading } from "../../components/loading/index"
import { StyledUserInfo } from "./style"
import { Background } from "../../components/Background"
import noPicture from "../../assets/noPicture.jpeg"
import { Pagination } from "../../components/Pagination/index"

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

    const fetchCreatePlaylist = createPlaylistStore((state: any) => state.fetch)

    const userInfoHide: any = useRef("")

    const client_id = '1ab6ed6e5839430c8d6f235f05e10689'
    const client_secret = '4338d4c231c541d490e7a3c42d6e58c7'
    const redirect_uri = 'http://localhost:5500/info'
    const authCode = window.location.href.split('=')[1]
    
    const tokenObj = new URLSearchParams({
        grant_type: 'authorization_code',
        code: authCode,
        redirect_uri: redirect_uri
    })

    const createdPlaylistObj = new URLSearchParams({
        name: "testes",
        description: "New playlist description",
        public: "false",
    })

    function logOut() {
        localStorage.clear()
        window.location.href = 'http://localhost:5500'
    }

    function msMinutes(ms: any) {
        var minutes: any = Math.floor(ms / 60000);
        var seconds: any = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }  

    // const objTeste =  new URLSearchParams({
    //     grant_type: 'refresh_token',
    //     refresh_token: String(localStorage.getItem('refresh_token'))
    // })

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            fetchToken('https://accounts.spotify.com/api/token', 'POST', client_id, client_secret, tokenObj)
        }
        // setTimeout(() => {
        //     fetch('https://accounts.spotify.com/api/token', {
        //     method: 'POST',
        //     headers: {
        //         "Authorization": 'Basic ' + btoa(`${client_id}:${client_secret}`),
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     body: objTeste
        // }).then(response => response.json().then((data) => {console.log(data);
        // }))}, 5000)  

        setInterval(() => {
            fetchCurrentSong('https://api.spotify.com/v1/me/player/currently-playing', localStorage.getItem('token'), 'GET')
        }, 1000 )
    }, [])

    useEffect(() => {
        if (!localStorage.getItem('token') && tokenData.access_token !== undefined) {
            localStorage.setItem('token', tokenData.access_token)
            localStorage.setItem('refresh_token', tokenData.refresh_token)
        }
        if (localStorage.getItem('token') !== undefined && localStorage.getItem('token')) {
            fetchUser('https://api.spotify.com/v1/me', localStorage.getItem('token'), 'GET')
            fetchPlaylist('https://api.spotify.com/v1/me/playlists', localStorage.getItem('token'), 'GET')
            fetchCurrentSong('https://api.spotify.com/v1/me/player/currently-playing', localStorage.getItem('token'), 'GET')
        }
    }, [tokenData])   

    useEffect(() => {
        localStorage.setItem('userId', userData.id)
    }, [userData])

    window.onclick = function (event) {
        if (event.target == userInfoHide.current) {
            userInfoHide.current.style.display = "none";
        }
    }

    return (
        <>
            {!playlistData.href ? <Loading /> :
                <StyledUserInfo>
                    <div className="hide" ref={userInfoHide} id='modal'>
                        <Background onClick={() => { console.log('ola222') }}>
                            <h2>{userData.display_name}</h2>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: '30px' }}>
                                    <p>seguidores: {userData.followers.total}</p>
                                    <p>id: {userData.id}</p>
                                </div>
                                <div>
                                    <p>{userData.country}</p>
                                    <p>{userData.email}</p>
                                </div>
                            </div>
                            {currentSongData.item === undefined || currentSongData.item === null ?
                                <p>não ouvindo nada</p> :
                                <div>
                                    <p>Playing: {currentSongData.item.name}</p>
                                    <p>{msMinutes(currentSongData.progress_ms)}</p>
                                    <p>{msMinutes(currentSongData.item.duration_ms)}</p>
                                </div>
                            }
                            <a href={userData.external_urls.spotify} target='_blank'><button className="bttn">Perfil</button></a>
                        </Background>
                    </div>
                    <div className="user">
                        {!userData.images[0] ? 
                        <img src={noPicture} alt="" className="userPicture" onClick={() => { userInfoHide.current.style.display = 'flex' }} /> : 
                        <img src={userData.images[0].url} alt="" className="userPicture" onClick={() => { userInfoHide.current.style.display = 'flex' }} /> 
                        }
                        <h1>Olá <span style={{ color: '#1DCC5A' }}>{userData.display_name}</span> :)</h1>
                    </div>
                        <Pagination fetchData={playlistData.items} />
                        <input type="text" onChange={(e: any) => {
                            setCreatedPlaylist(e.target.value)
                        }}/>
                        <button onClick={() => {fetchCreatePlaylist(`https://api.spotify.com/v1/users/${localStorage.getItem('userId')}}/playlists`, localStorage.getItem('token'), 'POST', createdPlaylistObj)}}>Create Playlist</button>
                    <button onClick={logOut}>logout</button>
                </StyledUserInfo>
            }
        </>
    )
}

export default UserInfo
