import Lightbox from "../components/Lightbox.tsx"
import {useLightbox} from "../hooks/useLightbox.tsx"


const items = [
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace1.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace2.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace3.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace4.webp"},
  {image: "https://apache.castle104.com/assets/micro-frontend-demo/images/necklace5.webp"},
]

function ItemList({items, showLightbox}:
                  { items: { image: string }[],
                    showLightbox: (index: number) => void }) {
  return (
    <div className="item__list">
      {items.map((item, i) => {
        return <div key={i} className="item__box">
          <img src={item.image} alt="necklace" className="item__image" onClick={() => showLightbox(i)}/>
        </div>
      })
      }
    </div>
  )
}


export default function IndexPage() {
  const {lightboxIndex, lightboxVisible, showLightbox, hideLightbox} = useLightbox()

  return (
    <>
      <h2>Jewelry Micro Frontend (React)</h2>
      <ItemList items={items} showLightbox={showLightbox} />

      <Lightbox image={items[lightboxIndex].image}
                lightboxVisible={lightboxVisible}
                hideLightbox={hideLightbox}/>

      <div style={{textAlign: "right"}}>
        <a href="/detail">More items...</a>
      </div>
    </>
  )
}

