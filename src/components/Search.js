import React from 'react';
import { toast } from 'react-hot-toast';

const Search = ({ searchFilm, setMovies, setCount }) => {
    const handleAddMovie = (event) => {
        event.preventDefault();
        const form = event.target;
        const film = form.film.value;
        const genre = form.genre.value;
        const lead = form.lead.value;
        const audience = form.audience.value;
        const profit = form.profit.value;
        const rotten = form.rotten.value;
        const gross = form.gross.value;
        const year = form.year.value;
        const movie = {
            Film: film,
            Genre: genre,
            "Lead Studio": lead,
            "Audience score %": audience,
            Profitability: profit,
            "Rotten Tomatoes %": rotten,
            "Worldwide Gross": gross,
            Year: year
        }
        console.log(movie);
        fetch(`http://localhost:5000/addMovie?page=${0}&size=${10}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(movie)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data.movies);
                setCount(data.count);
                toast.success("Movie added successfully!!!");
                form.reset();

            })
    }

    return (
        <>
            <div className='m-4 flex justify-end'>
                <form onSubmit={searchFilm} className='flex mx-2'>
                    <input name='searchName' type="text" placeholder="Search by Film" className="input input-bordered w-full max-w-xs mr-2" />
                    <button type='submit' className="btn btn-success">Search</button>
                </form>
                <div className='w-50'>
                    <label htmlFor="add-modal" className="btn btn-primary btn-outline mr-2">Add Movie</label>
                </div>
            </div>
            <div>
                <input type="checkbox" id="add-modal" className="modal-toggle" />
                <div className="modal" >
                    <div className="modal-box relative">
                        <label htmlFor="add-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Add Movie</h3>
                        <form onSubmit={handleAddMovie} className="card-body py-4 grid grid-cols-2 ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">FILM</span>
                                </label>
                                <input type="text" name='film' placeholder="Film" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">GENRE</span>
                                </label>
                                <input type="text" name='genre' placeholder="GENRE" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">LEAD STUDIO</span>
                                </label>
                                <input type="text" name='lead' placeholder="LEAD STUDIO" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">AUDIENCE SCORE %</span>
                                </label>
                                <input type="text" name='audience' placeholder="AUDIENCE SCORE %" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PROFITABILITY</span>
                                </label>
                                <input type="text" name='profit' placeholder="PROFITABILITY" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ROTTEN TOMATOES %</span>
                                </label>
                                <input type="text" name='rotten' placeholder="Film" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">WORLDWIDE GROSS</span>
                                </label>
                                <input type="text" name='gross' placeholder="WORLDWIDE GROSS" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Year</span>
                                </label>
                                <input type="text" name='year' placeholder="Year" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;