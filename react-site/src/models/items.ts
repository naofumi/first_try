export function allItems() {
  return [
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
}

export function itemById(id: number | string) {
  const idNum = parseInt(id as string)

  return allItems()[idNum - 1]
}
