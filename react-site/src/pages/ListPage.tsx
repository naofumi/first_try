import {useLightbox} from "../hooks/useLightbox.tsx"
import Lightbox from "../components/Lightbox.tsx"
import {navigateTo} from "../utilities/navigation.ts"

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
  const {lightboxIndex, lightboxVisible, showLightbox, hideLightbox} = useLightbox()

  return (
    <>
      <h2>Jewelry Micro Frontend (React)</h2>

      <div className="item__list">
        {items.map((item, i) => {
          return <div key={i} className="item__box">
            <img src={item.image} alt="necklace" className="item__image" onClick={() => showLightbox(i)}/>
          </div>
        })
        }
      </div>

      <Lightbox image={items[lightboxIndex].image}
                lightboxVisible={lightboxVisible}
                hideLightbox={hideLightbox}
                buy={() => navigateTo(`/jewelry/buy?id=${lightboxIndex + 1}`)}/>
    </>
  )
}
