import { NextPage } from 'next';
import s from './review.module.scss'
import goodStar from '@/images/star_good.svg'
import badStar from '@/images/star_bad.svg'
import Image from 'next/image'

interface IRating {
    rate: number;
    count: number;
}


interface IReview {
    rating: IRating;
}

const Review: NextPage<IReview>  = ({rating}) => {
    const stars: JSX.Element[] = []
    for (let i = 1; i <= 5; i++) {
        if (Math.round(rating.rate) >= i)
            stars.push(
                <Image key={rating.count + i}className={s.review__star} src={goodStar} alt="star"/>
            )
        else 
            stars.push(
                <Image key={rating.count + i}className={s.review__star} src={badStar} alt="star"/>
            )
    }

    return (
        <div className={s.review}>
            <div>
                {stars.map((star) => {
                    return (
                        star
                    )
                })}
            </div>
            <p className={s.review__count}>{rating.count} отзывов</p>
        </div>
    )
}

export default Review