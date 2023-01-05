import { styled } from '@mui/system'

const StyleLoading = styled('div')({
    height: '100vh', 
    width: '100bvw',   
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    "& .loadingIcon": {
        width: '50px'
    }
})

export { StyleLoading }