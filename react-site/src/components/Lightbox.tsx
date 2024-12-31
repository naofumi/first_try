export default function Lightbox({image, lightboxVisible, hideLightbox}: {image: string, lightboxVisible: boolean, hideLightbox: () => void}) {
  return (
    <div className={`lightbox ${lightboxVisible ? "show" : ""}`}>
      <div className="lightbox__backdrop">
        <div className="lightbox__close-button" onClick={() => hideLightbox()}>X</div>
        <img src={image} alt="necklace"
             className="lightbox__image"/>
      </div>
    </div>
  )
}
