import {useState} from "react"

const items = [
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace1.webp"},
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace2.webp"},
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace3.webp"},
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace4.webp"},
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace5.webp"},
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace6.webp"},
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace7.webp"},
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace8.webp"},
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace9.webp"},
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace10.webp"},
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace11.webp"},
  {image: "https://nk-micro-frontend-demo-2.s3.ap-northeast-1.amazonaws.com/necklace12.webp"},
]


export default function IndexPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)
  const [lightboxVisible, setLightboxVisible] = useState<boolean>(false)

  function showLightbox(index: number) {
    setLightboxIndex(index)
    setLightboxVisible(true)
  }

  function hideLightbox() {
    setLightboxVisible(false)
  }

  return (
    <>
      <h2>Jewelry Micro Frontend (React)</h2>

      <div className="item-list">
        {items.map((item, i) => {
          return <div key={i} className="item-box">
            <img src={item.image} alt="necklace" className="item-image" onClick={() => showLightbox(i)}/>
          </div>
        })
        }
      </div>
      <div className={`lightbox ${lightboxVisible ? "show" : ""}`}>
        <div className="lightbox-backdrop">
          <div className="lightbox-close" onClick={() => hideLightbox()}>X</div>
          <img src={items[lightboxIndex].image} alt="necklace"
               className="lightbox-image"/>
        </div>
      </div>
    </>
  )
}
