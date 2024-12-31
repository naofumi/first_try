import {useState} from "react"

const items = [
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace1.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace2.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace3.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace4.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace5.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace6.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace7.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace8.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace9.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace10.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace11.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace12.webp"},
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
