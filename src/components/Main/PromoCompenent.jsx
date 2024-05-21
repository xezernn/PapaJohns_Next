import React from 'react'

function PromoCompenent() {
    return (
        <div className="promo bgSilver">
            <h2>Promo kodunuz var? <span className="textGreen">Endirimdən istifadə edin!</span></h2>
            <div className="promoInp">
                <input type="text" placeholder="Promo kodu daxil edin" id="promoId" />
                <button>OK</button>
            </div>
        </div>
    )
}

export default PromoCompenent