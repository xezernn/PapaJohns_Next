import KompaniyaCard from '@/components/Main/Kampaniyalar/KompaniyaCard'
import React from 'react'
 
function page() {
  let data = [
    {
      "id": "874",
      "category": "Kompaniya",
      "img": "https://www.papajohns.az/uploads/images/banners/Yashin%20qeder%20endirim/Yashin%20qeder%20endirim.jpeg",
      "compasition": ""
    },
    {
      "id": "875",
      "category": "Kompaniya",
      "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Noyabr/New%20products/pizza-party-2023-feed.png",
      "compasition": ""
    },
    {
      "id": "876",
      "category": "Kompaniya",
      "img": "https://www.papajohns.az/uploads/images/banners/Papa%20Talk/papa%20talk.jpg",
      "compasition": ""
    },
    {
      "id": "877",
      "category": "Kompaniya",
      "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/February/kombo%20menyu%20teze%20ler%202022%20son%209.jpg",
      "compasition": ""
    },
    {
      "id": "878",
      "category": "Kompaniya",
      "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Noyabr/New%20products/Yeni%20BBQ%20Mehsullar.png",
      "compasition": ""
    },
    {
      "id": "879",
      "category": "Kompaniya",
      "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Dekabr/%C4%B0ki-boyuk-karnaval-and-vegetarian.png",
      "compasition": ""
    },
    {
      "id": "880",
      "category": "Kompaniya",
      "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Dekabr/kichik-marinera-4-pendir-cola.png",
      "compasition": ""
    },
    {
      "id": "881",
      "category": "Kompaniya",
      "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Dekabr/Wolt-Havay-and-poppers-bbq.png",
      "compasition": ""
    },
    {
      "id": "882",
      "category": "Kompaniya",
      "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Dekabr/boyuk-amerika-hot-ulduzum.png",
      "compasition": ""
    },
    {
      "id": "883",
      "category": "Kompaniya",
      "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Dekabr/Orta-Chiken-parmesan-and-yunan.png",
      "compasition": ""
    }
  ]


  return (
    <>
      <div className='kompaniyalar'>
        <h1>Kampaniyalar</h1>
        <div className='kompaniyaCards'>
          {
            data.map(item => (
                <KompaniyaCard key={item.id} {...item} /> 
              ))
          }
        </div>
      </div>
    </>
  )
}

export default page