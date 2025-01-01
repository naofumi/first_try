import Lightbox from "../components/Lightbox.tsx"
import {useLightbox} from "../hooks/useLightbox.tsx"
import {navigateTo} from "../utilities/navigation.ts"
import {allItems} from "../models/items.ts"


const items = allItems().slice(0, 5)

function ItemList({items, showLightbox}:
                  {
                    items: { image: string }[],
                    showLightbox: (index: number) => void
                  }) {
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
      <ItemList items={items} showLightbox={showLightbox}/>

      <Lightbox image={items[lightboxIndex].image}
                lightboxVisible={lightboxVisible}
                hideLightbox={hideLightbox}
                buy={() => navigateTo(`/jewelry/buy?id=${lightboxIndex + 1}`)}
      />

      <div style={{textAlign: "right"}}>
        <a href="/jewelry">More items...</a>
      </div>
    </>
  )
}

