import { useState } from 'react'
import s from './card.module.scss'


const Card = () => {
    const [isInCard, toCard] = useState(false)
    const [count, setCount] = useState(1)

    const countDecrease = () => {
        if (count > 0) setCount(count - 1)
    }
    
    return (
        <div className={s.card}>
            <div
                onClick={() => toCard(!isInCard)}
                className={
                isInCard
                    ? `${s.card__button} ${s.card__active}`
                    : s.card__button
            }>
                {
                    isInCard
                        ? "В корзине"
                        : "В корзину"
                }
            </div>
            <div className={s.card__counters}>
                <div 
                    onClick={countDecrease} 
                    className={s.card__minus}
                >
                </div>
                <div className={s.card__count}>{count}</div>
                <div
                    onClick={() => setCount(count + 1)}
                    className={s.card__plus}
                >
                </div>
            </div>
        </div>
    )
}

export default Card