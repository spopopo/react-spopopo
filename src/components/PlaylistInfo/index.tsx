import { StylePlaylistInfo } from "./style"

type PlaylistInfoType = {
    onClickBtn: any
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

export function PlaylistInfo({onClickBtn, children, ...props}: PlaylistInfoType) {
    return(
        <StylePlaylistInfo>
            <button onClick={onClickBtn}>{children}</button>
        </StylePlaylistInfo>
    )
}