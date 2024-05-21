"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import CaruselSwiper from '../slider/CaruselSwiper';

function ProductDetails({ img, price, name, category, composition }) {
    const router = useRouter();
    const [priceSize, setPriceSize] = useState(typeof price === "number" ? price : price.xs);

    useEffect(() => {
        if (typeof price === "number") {
            setPriceSize(price);
        } else {
            setPriceSize(price.xs);
        }
    }, [price]);

    return (
        <>
            <div className="productTopBar">
                <ul id='productMenu'>
                    <li><span>{name}</span></li>
                </ul>
            </div>
            <div className='productFlex1'>
                <div className="productLeft">
                    <div className="coruselDesk">
                        <img src={img} alt={name} />
                    </div>
                    <div className='caruselDnone'>
                        <CaruselSwiper img={img} />
                    </div>
                </div>
                <div className="productRight">
                    <h2>Məhsulun qiyməti: <span className='qiymet'>{priceSize} azn</span></h2>
                    <h3>{name}</h3>
                    <span>Çatdırılma: Var</span>

                    <div className="mehsulHaaqinda">
                        <p><b>Filial:</b> Baki</p>
                        <p><b>Məhsulun Kateqoriyasi:</b> {category}</p>
                        <p><b>Məhsulun Tərkibi:</b> {composition}</p>
                    </div>
                    <div className='addBtn'>
                        {
                            typeof price === "number" ?
                                <p>Yalniz tək ölçüdə təqdim olunur!</p>
                                :
                                <div>
                                    Məhsulun ölçüsünü təyin edin:
                                    <Select
                                        defaultValue={price.xs}
                                        style={{ width: 65 }}
                                        onChange={(e) => setPriceSize(e)}
                                        options={[
                                            { value: price.xs, label: price.xs },
                                            { value: price.sm, label: price.sm },
                                            { value: price.md, label: price.md },
                                            { value: price.lg, label: price.lg },
                                        ]}
                                    />
                                </div>
                        }
                        <button>Səbətə əlavə et</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
