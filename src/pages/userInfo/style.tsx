import { styled } from '@mui/system'

const StyledUserInfo = styled('div')({
    color: 'white',
    "& .user": {
        backgroundImage: 'linear-gradient(to bottom, #360140, #161616)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20px'
    },
    "& .userPicture": {
        borderRadius: '200px',
        width: '100px',
        border: '1px solid '
    }
})

export { StyledUserInfo }