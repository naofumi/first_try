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

export default function BuyPage() {
  const id = (new URL(document.location.href)).searchParams.get('id')
  if (!id || !items[parseInt(id) - 1]) {
    return <h2>Invalid ID</h2>
  }

  const item = items[parseInt(id) - 1]

  return (
    <>
      <h2>Buy Jewelry (React)</h2>
      <a href="/detail">&lt; Back to list</a>
      <p>You have selected: Item No. {parseInt(id)}</p>
      <p>Price: $10,000</p>
      <img src={item.image} className="item__image--full" alt="necklace" />
    </>
  )
}
