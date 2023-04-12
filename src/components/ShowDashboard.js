import React, { useEffect, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import Search from './Search';
import EditModal from './EditModal';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const ShowDashboard = () => {
    // const { count, movies } = useLoaderData();
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [editMovieInfo, setEditMovieInfo] = useState();

    const pages = Math.ceil(count / size);


    const searchFilm = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchName = form.searchName.value;
        console.log(searchName)
        search(searchName);

    }
    const search = async (name) => {
        fetch(`https://server-wheat-ten.vercel.app/search?film=${name}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.movies);
                setCount(data.count);
            })
    }
    useEffect(() => {
        fetch(`https://server-wheat-ten.vercel.app/showData?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.movies);
                setCount(data.count);
            })
    }, [page, size])
    return (
        <>

            <Search searchFilm={searchFilm} setMovies={setMovies} setCount={setCount}></Search>
            <div className="overflow-x-auto my-5" >
                <table className="table text-center table-compact w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Film</th>
                            <th>Genre</th>
                            <th>Lead Studio</th>
                            <th>Audience score %</th>
                            <th>Profitability</th>
                            <th>Rotten Tomatoes %</th>
                            <th>Worldwide Gross</th>
                            <th>Year</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.length === 1 ?
                                movies?.map((movie, index) =>
                                    <tr key={index}>
                                        <th>{page > 0 ? (page * 10) + (index + 1) : index + 1}</th>
                                        <td>{movie.Film}</td>
                                        <td>{movie.Genre}</td>
                                        <td>{movie["Lead Studio"]}</td>
                                        <td>{movie["Audience score %"]}</td>
                                        <td>{movie.Profitability}</td>
                                        <td>{movie["Rotten Tomatoes %"]}</td>
                                        <td>{movie["Worldwide Gross"]}</td>
                                        <td>{movie.Year}</td>
                                        <td>
                                            <label htmlFor="edit-modal" className="btn btn-warning mr-2" onClick={() => setEditMovieInfo(movie)}><FiEdit></FiEdit></label>
                                            <label htmlFor="delete-modal" className="btn btn-error" onClick={() => setEditMovieInfo(movie)}><MdDeleteForever></MdDeleteForever></label>
                                        </td>
                                    </tr>)
                                :
                                movies?.map((movie, index) =>
                                    <tr key={index}>
                                        <th>{page > 0 ? (page * 10) + (index + 1) : index + 1}</th>
                                        <td>{movie.Film}</td>
                                        <td>{movie.Genre}</td>
                                        <td>{movie["Lead Studio"]}</td>
                                        <td>{movie["Audience score %"]}</td>
                                        <td>{movie.Profitability}</td>
                                        <td>{movie["Rotten Tomatoes %"]}</td>
                                        <td>{movie["Worldwide Gross"]}</td>
                                        <td>{movie.Year}</td>
                                        <td>
                                            <label htmlFor="edit-modal" className="btn btn-warning mr-2" onClick={() => setEditMovieInfo(movie)}><FiEdit></FiEdit></label>
                                            <label htmlFor="delete-modal" className="btn btn-error" onClick={() => setEditMovieInfo(movie)}><MdDeleteForever></MdDeleteForever></label>
                                            
                                        </td>
                                    </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <EditModal editMovieInfo={editMovieInfo} setMovies={setMovies} setCount={setCount}></EditModal>
            <DeleteModal editMovieInfo={editMovieInfo} setMovies={setMovies} setCount={setCount}></DeleteModal>
            {
                movies.length === 1 ?
                    <div className='flex justify-center'><button onClick={()=>window.location.reload()} className="btn btn-link text-center">All</button></div>
                    :
                    <div className='flex justify-center my-2'>
                        <div className='btn-group pagination'>
                            {
                                [...Array(pages).keys()].map(number => <button key={number} onClick={() => setPage(number)} className={page === number ? 'btn btn-active' : 'btn'}>{number}</button>)
                            }
                        </div>
                        <select onChange={event => setSize(event.target.value)} className="ml-2 select select-bordered w-xs max-w-xs">
                            <option value={5}>5</option>
                            <option value={10} selected>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
            }
        </>
    );
};

export default ShowDashboard;