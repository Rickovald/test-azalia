import s from './favourites.module.scss'
import Image from 'next/image'
import unFav from "@/images/unfav.svg"
import fav from "@/images/fav.svg"
import { NextPage } from 'next';
import { useState } from 'react';

interface IFavourites {
    id: number;
}

const Favourites: NextPage<IFavourites> = ({id}) => {
    const [isFav, setFav] = useState(false)
    // const toggleFav = () => {
    //     if (localStorage.getItem(`product${id}`)) {
    //         localStorage.removeItem(`product${id}`);
    //     } else {
    //         localStorage.setItem(`product${id}`, 'true');
    //     }
    // }

    return (
        <div className={s.favourites}>
            <Image 
                className={
                    isFav
                        ? `${s.favourites__unfav} ${s.favourites__transparent}`
                        : `${s.favourites__unfav}`
                }
                src={unFav}
                alt="unfav"
                onClick={() => setFav(!isFav)}
            />
            <Image 
                className={
                    isFav
                        ? `${s.favourites__fav} `
                        : `${s.favourites__fav} ${s.favourites__transparent}`
                }
                src={fav}
                alt="unfav"
            />
        </div>
    )
}

export default Favourites