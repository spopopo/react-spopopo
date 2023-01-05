const UserAccess = () => {
    const client_id = '1ab6ed6e5839430c8d6f235f05e10689'
    const client_secret = '4338d4c231c541d490e7a3c42d6e58c7'
    const redirect_uri = 'http://localhost:5500/info'

    const auth = new URLSearchParams({
        client_id: client_id,
        response_type: 'code',
        redirect_uri: redirect_uri,
        scope: 'user-read-private user-read-email playlist-read-private user-read-currently-playing playlist-modify-public playlist-modify-private'
    })

    const authorizeLink = 'https://accounts.spotify.com/authorize?' + auth

    return(
        <>
            <p>token</p>
            <button onClick={() => {window.location.href = authorizeLink}}>log-in</button>
        </>
    )
}

export default UserAccess