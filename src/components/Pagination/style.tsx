import { styled } from "@mui/system";
import ReactPaginate from 'react-paginate';

export const StyleReactPaginate = styled('div')({
    "& .paginationBttns": {
        display: 'flex',
        justifyContent: 'flex-end',
        listStyle: 'none',
        width: '80%',
        height: '30%',
        "& a": {
            padding: '5px 10px',
            margin: '10px',
            borderRadius: '50px',
            border: '1px solid #1DCC59',
            cursor: 'pointer',
            ":hover":{
                backgroundColor: '#1DCC59',
                color: '#FFFDFD'
            }
        }
    },

    "& .paginationActive": {
        "& a":{
            backgroundColor: '#1DCC59',
            color: '#FFFDFD'
        }
    },

    "& .containerContent": {
        display: 'flex',
    },
})