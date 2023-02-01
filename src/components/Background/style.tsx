import { styled } from '@mui/system'

export const StyledBackground = styled('div')({
    backgroundColor: "rgb(0, 0, 0, 0.8)",
    width: 'fit-content',
    height: 'fit-content',
    padding: '30px 50px',
    textAlign: 'center',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '15px 15px #1DCC5A',
    "& h2": {
        color: '#1DCC5A'
    },
    "& .bttn": {
        backgroundColor: '#1DCC5A',
        border: 'none',
        width: '100%',
        height: '30px',
        borderRadius: '20px',
        cursor: 'pointer'
    }
})