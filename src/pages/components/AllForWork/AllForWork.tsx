import s from './allForWork.module.scss'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import comp from "@/images/comp.png"
import peref from "@/images/peref.png"
import arrow from "@/images/arrow.svg"

const AllForWork = () => {
    return (
        <div className={s.allfor}>
            <h2 className={s.allfor__header}>Все для комфортной работы</h2>
            <Image 
                className={s.allfor__arrow}
                src={arrow}
                alt="comp"
                priority={true}
            />
            <div className={s.allfor__content}>
                <Image 
                    src={comp}
                    width={163}
                    height={140}
                    alt="comp"
                    priority={true}
                />
                <div className={s.allfor__cab}>
                    <div className={s.allfor__discount1}><p>- 25%</p></div>
                    <p>на товары для кабинета</p>
                    <p className={s.allfor__choose}>Выбрать</p>

                </div>
            </div>

            <div className={s.allfor__content}>
                <div className={s.allfor__peref}>
                    <div className={s.allfor__discount_wrapper}>
                        Скидка
                        <div className={s.allfor__discount2}><p>- 25%</p></div>
                    </div>
                    <p>на периферию для компьютера</p>
                    <p className={s.allfor__choose}>Выбрать</p>
                </div>
                <Image 
                    src={peref}
                    width={163}
                    height={140}
                    alt="comp"
                    priority={true}
                />
            </div>
        </div>
    )
}

export default AllForWork