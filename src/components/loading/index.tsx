import { StyleLoading } from "./style"
import loadingSpotifyGif from '../../assets/loadingSpotify.gif'
import loadingGif from '../../assets/loading.gif'

export function Loading(){
    return(
        <>
            <StyleLoading>
                <img src={loadingSpotifyGif} alt=""/>
                <br />
                <img src={loadingGif} alt="" className="loadingIcon"/>
            </StyleLoading>
        </>
    )
}