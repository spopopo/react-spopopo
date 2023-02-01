import { styled } from '@mui/system'
import { Background } from '../../components/Background'

const StyledUserInfo = styled('div')({
    color: 'white',
    "& .user": {
        backgroundImage: 'linear-gradient(to bottom, #494949, #161616)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20px'
    },
    "& .userPicture": {
        borderRadius: '200px',
        width: '100px',
        cursor: 'pointer'
    },
    "& .hide": {
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgb(0,0,0,0.35)',
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export { StyledUserInfo }