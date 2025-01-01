import {useLightbox} from "../hooks/useLightbox.tsx"
import Lightbox from "../components/Lightbox.tsx"
import {navigateTo} from "../utilities/navigation.ts"
import {allItems} from "../models/items.ts"

const items = allItems()

export default function ListPage() {
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
