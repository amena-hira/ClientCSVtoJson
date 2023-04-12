import React from 'react';

const EditModal = ({ editMovieInfo }) => {
    const handleEditMovie = (event) => {
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
        const editMovie = {
            film,
            genre,
            lead,
            audience,
            profit,
            rotten,
            gross,
            year
        }
        console.log(editMovie);
        fetch(`http://localhost:5000/editMovie/${editMovieInfo?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editMovie)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{editMovieInfo?.Film}</h3>
                    <form onSubmit={handleEditMovie} className="card-body py-4 grid grid-cols-2 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">FILM</span>
                            </label>
                            <input type="text" name='film' defaultValue={editMovieInfo?.Film} placeholder="Film" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">GENRE</span>
                            </label>
                            <input type="text" name='genre' defaultValue={editMovieInfo?.Genre} placeholder="GENRE" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LEAD STUDIO</span>
                            </label>
                            <input type="text" name='lead' defaultValue={editMovieInfo === undefined ? "" : editMovieInfo["Lead Studio"]} placeholder="LEAD STUDIO" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">AUDIENCE SCORE %</span>
                            </label>
                            <input type="text" name='audience' defaultValue={editMovieInfo === undefined ? "" : editMovieInfo["Audience score %"]} placeholder="AUDIENCE SCORE %" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PROFITABILITY</span>
                            </label>
                            <input type="text" name='profit' defaultValue={editMovieInfo?.Profitability} placeholder="PROFITABILITY" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ROTTEN TOMATOES %</span>
                            </label>
                            <input type="text" name='rotten' defaultValue={editMovieInfo === undefined ? "" : editMovieInfo["Rotten Tomatoes %"]} placeholder="Film" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">WORLDWIDE GROSS</span>
                            </label>
                            <input type="text" name='gross' defaultValue={editMovieInfo === undefined ? "" : editMovieInfo["Worldwide Gross"]} placeholder="WORLDWIDE GROSS" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year</span>
                            </label>
                            <input type="text" name='year' defaultValue={editMovieInfo?.Year} placeholder="Year" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditModal;