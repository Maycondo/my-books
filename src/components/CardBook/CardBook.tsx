/* eslint-disable @next/next/no-img-element */
import "./style.css";
import { useState, useEffect , useRef} from "react";
import { IoBook } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

import { MdEditNote } from "react-icons/md";


interface CardBookProps {
    isOpen: boolean;
    onClose: () => void;
    book: {
        id: string;
        title: string;
        authorBook: string;
        description: string;
        imageUrl: string;
        categoria: string[];
        rating: number;
        createdAt: string;
    }
}

export default function CardBook({ isOpen, onClose, book }: CardBookProps) {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState(book.description);
    const [isEdit, setIsEdit] = useState(false);

    const descriptionLoaded = useRef(false);
        
    useEffect(() => {
        const savedRating = localStorage.getItem(`@rating-${book.id}`);
        if (savedRating) setRating(parseInt(savedRating, 10));

        if(!descriptionLoaded.current) {
           const savedDescription = localStorage.getItem(`@description-${book.id}`);
              if (savedDescription) setDescription(savedDescription);
                descriptionLoaded.current = true;
        }
        
    }, [book.id]);

    const handleRating = (newRating: number) => {
        setRating(newRating);
        localStorage.setItem(`@rating-${book.id}`, newRating.toString());
    }

    const toggleEdit = () => setIsEdit(!isEdit);
    const handleSave = () => {
        localStorage.setItem(`@description-${book.id}`, description);
        setIsEdit(false);
     }

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    if (!isOpen) return null;

    return (
        <div className="card-book-open">
            <div className="card-book-header">  
                <h1><IoBook /> Book Review</h1>              
                    <button className="Button_1" onClick={onClose}>
                        <span className="X_1"></span>
                        <span className="Y_1"></span>
                        <div className="close_1">Close</div>
                    </button>
            </div>
            <div className="card-book__container">
                <div className="card-book__text">
                    <h1>Review Book: <i>{book.title}</i></h1>
                        <ul className="valiacao">
                            <h3>Book Rating:</h3>
                                {[...Array(5)].map((_, newRating) => 
                                    <li key={newRating} className="star-icon" onClick={() => handleRating(newRating + 1)}  
                                    style={{ cursor: "pointer", color: newRating < rating ? "#FFD700" : "#ccc"}}>
                                        {newRating < rating ? <IoStar /> : <IoStarOutline />}
                                    </li>
                                )}
                        </ul>
                        <h6>{formatDate(book.createdAt)}</h6>
                    {isEdit ? (<><textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                        <button className="save-button" onClick={handleSave}>Save</button></>
                    ): (<p>{description}<button className="Edit_text" onClick={toggleEdit}><MdEditNote/></button></p>)}
                </div>
                <div className="card-book__image">
                    <img src={book.imageUrl} alt={book.title} />
                    <p>Author: <i>{book.authorBook}</i></p>
                    <p>Category: <i>{book.categoria.join(', ')}</i></p>
                </div>
            </div>
        </div>
    )
}