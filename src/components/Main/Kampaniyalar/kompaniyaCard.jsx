import Image from 'next/image';
import React from 'react'

function kompaniyaCard( { id, category, img, compasition }) {


    return (
        <div className="kompaniyaCard">
            <div className="komCardTop">
                <img src={img} alt="sekil yoxdur" />
            </div>
            <div className="stocItem">
                {compasition}
            </div>
            <div className="komCardBottom">
                <button className='btn'>ƏTRAFLI MƏLUMAT</button>
            </div>
        </div>
    )
}

export default kompaniyaCard