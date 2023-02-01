import ReactPaginate from 'react-paginate';
import { useState, useEffect, useRef } from 'react';
import { StyleReactPaginate } from './style';
import { PlaylistInfo } from '../PlaylistInfo/index'

type PaginationProps = {
    fetchData: any,
}

export function Pagination({fetchData, ...props}: PaginationProps){
    const [playlist, setPlaylists] = useState(fetchData)
    const [pageNumber, setPageNumber] = useState(0)
    const playlistMusicRef: any = useRef("")
    const playlistRef: any = useRef("")

    const playlistPerPage = 1
    const pagesVisited = pageNumber * playlistPerPage

    const displayPlaylist = playlist
    .slice(pagesVisited, pagesVisited + playlistPerPage)
    .map((el: any, index: number) => {
        return(
            <PlaylistInfo onClickBtn={() => {fetchInfo(el.id)}} key={index}>{el.name}</PlaylistInfo>
        )
    })
    

    const pageCount = Math.ceil(playlist.length / playlistPerPage)   
    const changePage = ({selected}: any )=> {
        setPageNumber(selected)
    }

    function fetchInfo(el: any) {
        fetch(`https://api.spotify.com/v1/playlists/${el}/tracks`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
            }).then((reponse: any) => reponse.json().then((data: any) => {
            playlistMusicRef.current.innerHTML = data.items.map((element: any) => (
                `<p>${element.track.name} </p>`))
            
        }))
    }

    return (
        <>
        <StyleReactPaginate>
            {displayPlaylist}
            <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
        </StyleReactPaginate>
        <div ref={playlistMusicRef}></div>
        </>
    )
}
