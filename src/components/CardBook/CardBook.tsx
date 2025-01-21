/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import ImagemBook from "@/Image/livros.jpeg"
import "./Style/style_1.css"
import "./Style/style_2.css"
import { JSX, useState } from "react";


type Categoria = Array<string>;


const categorias: Categoria = [
    "Ação",
    "Fantasia",
    "Aventura",
    "Romance",
    "Terror",
    "Biografia",
    "Comédia",
    "Drama",
    "Ficção",
    "Infantil",
    "Mistério",
    "Thriller",
    "Vida Real",
    "Ficção Científica",
    "Documentário",
]

interface CardBookAddProps { setAddbook: boolean;  onClose: () => void; }

export default function CardBookAdd ({ setAddbook, onClose }: CardBookAddProps): JSX.Element | null {
    if(!setAddbook) return null;
    const [selectedCategorias, setSelectedCategoria] = useState<Categoria>([]);

    const handleCategoriaClick = (categoria: string) => {
            setSelectedCategoria((prev) => {
                if(prev.includes(categoria)) {
                        return prev.filter((cat) => cat !== categoria)
                } else {
                        return [...prev, categoria]
                }
            })
    }

    return (
        <div className="Card_opacity">
            <div className="Card_add_book">
                <button className="Button" onClick={ onClose }>
                    <span className="X"></span>
                    <span className="Y"></span>
                    <div className="close">Close</div>
                </button>
                    <form className="Form_card" action="">
                            <div className="Card_imagem">
                                <Image className="Imagem_book" src={ ImagemBook }alt="Book"/>
                            </div>                            
                            <div className="input-group">
                                <input className="input-text" name="text" type="text" placeholder="Name Book" autoComplete="off"/>
                                <label className="input-text-label" htmlFor="text">Name Book</label>
                            </div> 
                            <div className="seletc_catery">
                                <p id="Text_catery">Cateorias do Livro</p>
                                    <ul>
                                        {categorias.map((categoria, index) => (
                                            <li className={ selectedCategorias.includes(categoria) ? " selected ": "     " } key={index} 
                                            onClick={() => handleCategoriaClick( categoria )}>{ categoria }</li>
                                        ))}
                                    </ul>
                            </div>
                            <div className="input-group">
                                <input className="input-text" name="text" type="text" placeholder="Author Book"/>
                                <label className="input-text-label" htmlFor="text">Author Book</label>   
                            </div>
                    </form>
            </div>
        </div>
    )
}