import React, { useEffect, useState } from 'react';
import bg from '../images/bg.jpeg';
import TableData from './TableData';
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

const ShowDashboard = () => {
    const [movies, setMovies] = useState();
    const [count, setCount] = useState();
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const pages = count;
    
    useEffect(() => {
        fetch('http://localhost:5000/showData')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.movies);
                setCount(data.count);
            })
    }, [])
    return (
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
                                <th>{index + 1}</th>
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
    );
};

export default ShowDashboard;