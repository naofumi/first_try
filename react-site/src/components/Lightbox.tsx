export default function Lightbox({image, lightboxVisible, hideLightbox, buy}:
{image: string, lightboxVisible: boolean, hideLightbox: () => void, buy: () => void}) {
  return (
    <div className={`lightbox ${lightboxVisible ? "show" : ""}`}>
      <div className="lightbox__backdrop">
        <div className="lightbox__close-button" onClick={() => hideLightbox()}>X</div>
        <button className="lightbox__buy-button" onClick={() => buy()}>Buy</button>
        <img src={image} alt="necklace"
             className="lightbox__image"/>
      </div>
    </div>
  )
}
