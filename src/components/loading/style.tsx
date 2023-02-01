import { styled } from '@mui/system'

export const StyleLoading = styled('div')({
    height: '100vh', 
    width: '100bvw',   
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    "& .loadingIcon": {
        width: '20px'
    },
    "& .loadingSpotify": {
        width: '500px', 
    }
})