import React from 'react';

const Search = ({ searchFilm }) => {

    return (
        <div className='m-4 flex justify-end'>
            <form onSubmit={searchFilm} className='flex mx-2'>
                <input name='searchName' type="text" placeholder="Search by Film" className="input input-bordered w-full max-w-xs mr-2" />
                <button type='submit' className="btn btn-success">Search</button>
            </form>
            <div className='w-50'>
                <button className="btn btn-outline btn-primary">Add Movie</button>
            </div>
        </div>
    );
};

export default Search;