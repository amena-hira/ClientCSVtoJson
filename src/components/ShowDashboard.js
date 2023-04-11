import React, { useEffect, useState } from 'react';
import bg from '../images/bg.jpeg';
import TableData from './TableData';
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from 'react-router-dom';

const ShowDashboard = () => {
    // const { count, movies } = useLoaderData();
    const [movies, setMovies] = useState();
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const pages = Math.ceil(count / size);
    useEffect(() => {
        fetch(`http://localhost:5000/showData?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.movies);
                setCount(data.count);
            })
    }, [page,size])
    return (
        <>
            <div className="overflow-x-auto" >
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
                            movies?.map((movie, index) =>
                                <tr key={index}>
                                    <th>{page>0? (page*10)+(index+1):index+1}</th>
                                    <td>{movie.Film}</td>
                                    <td>{movie.Genre}</td>
                                    <td>{movie["Lead Studio"]}</td>
                                    <td>{movie["Audience score %"]}</td>
                                    <td>{movie.Profitability}</td>
                                    <td>{movie["Rotten Tomatoes %"]}</td>
                                    <td>{movie["Worldwide Gross"]}</td>
                                    <td>{movie.Year}</td>
                                    <td>
                                        <button className="btn btn-warning mr-2"><FiEdit></FiEdit></button>
                                        <button className="btn btn-error"><MdDeleteForever></MdDeleteForever></button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center'>
                <div className='btn-group pagination'>
                    {
                        [...Array(pages).keys()].map(number => <button onClick={() => setPage(number)} className={page === number ? 'btn btn-active' : 'btn'}>{number}</button>)
                    }
                </div>
                <select onChange={event => setSize(event.target.value)} className="ml-2 select select-bordered w-xs max-w-xs">
                    <option value={5}>5</option>
                    <option value={10} selected>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </>
    );
};

export default ShowDashboard;