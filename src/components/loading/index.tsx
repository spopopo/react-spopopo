import { StyleLoading } from "./style"
import loadingSpotifyGif from '../../assets/loadingSpotify.gif'
import loadingGif from '../../assets/loading.gif'

export function Loading(){
    return(
        <>
            <StyleLoading>
                <img src={loadingSpotifyGif} alt="spotify" className="loadingSpotify"/>
                <img src={loadingGif} alt="loading..." className="loadingIcon"/>
            </StyleLoading>
        </>
    )
}