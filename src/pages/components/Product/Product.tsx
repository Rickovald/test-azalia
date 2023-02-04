import s from './product.module.scss'
import Image from 'next/image'
import { IProduct } from '@/interfaces/interfaces'
import Price from './Price/Price';
import Review from './Review/Review';
import Card from './Card/Card';
import Favourites from './Favourites/Favourites';

const Product = (product: IProduct) => {
    const src = `${product.image}`;
    console.log(product);
    
    return (
        <div className={s.product}>
            <Image
                loader={() => src}
                className={s.product__image} 
                src={product.image} 
                alt="product" 
                width={200}
                height={200}
                priority
                unoptimized
            />
            <div className={s.product__flex}>
              <p className={s.product__category}>{product.category}</p>
              <Review rating={product.rating}/>
            </div>
            <p className={s.product__title}>{product.title}</p>
            <Price price={product.price} />
            <div className={s.product__flex}>
                <Card />
                <Favourites id={product.id} />
            </div>
        </div>
    )
}

export default Product