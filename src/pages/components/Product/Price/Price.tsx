import { NextPage } from 'next';
import s from './price.module.scss'


interface IPrice {
    price: number;
}

const Price: NextPage<IPrice>  = ({price}) => {
    return (
        <div className={s.price}>
            {(price * 70).toFixed(2)} ₽<span className={s.price__count}>/шт.</span>
        </div>
    )
}

export default Price