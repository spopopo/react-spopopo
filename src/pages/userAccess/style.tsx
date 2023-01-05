import { styled } from '@mui/system'

const StyledUserAccess = styled('div')({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    "& .bttn": {
        backgroundColor: '#1DCC5A',
        border: 'none',
        width: '100%',
        height: '30px',
        borderRadius: '20px',
        cursor: 'pointer'
    }
})

export { StyledUserAccess }