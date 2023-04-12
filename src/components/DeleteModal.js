import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import toast from 'react-hot-toast';

const DeleteModal = ({ editMovieInfo }) => {
    const handleDelete = (movie) =>{
        console.log(movie);
        fetch(`https://server-wheat-ten.vercel.app/deleteMovie/${movie._id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.error(`${movie.Film} Movie Deleted!!!`);
                window.location.reload();
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold flex items-center"><MdDeleteForever className='text-error mr-1'></MdDeleteForever>{editMovieInfo?.Film}</h3>
                    <p className="py-4">Do you want to delete this <span className='font-bold text-error'>{editMovieInfo?.Film}</span> movie?</p>
                    <div className="modal-action">
                        <button className="btn btn-error btn-outline" onClick={()=>handleDelete(editMovieInfo)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;