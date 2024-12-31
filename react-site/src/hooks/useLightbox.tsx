import {useState} from "react"

export function useLightbox() {
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)
  const [lightboxVisible, setLightboxVisible] = useState<boolean>(false)

  function showLightbox(index: number) {
    setLightboxIndex(index)
    setLightboxVisible(true)
  }

  function hideLightbox() {
    setLightboxVisible(false)
  }

  return {lightboxIndex, lightboxVisible, showLightbox, hideLightbox}
}
