import {itemById} from "../models/items.ts"

export default function BuyPage() {
  const id = (new URL(document.location.href)).searchParams.get('id')
  const item = id && itemById(id)

  if (!id || !item) {
    return <h2>Invalid ID</h2>
  }

  return (
    <>
      <h2>Buy Jewelry (React)</h2>
      <a href="/jewelry">&lt; Back to list</a>
      <p>You have selected: Item No. {parseInt(id)}</p>
      <p>Price: $10,000</p>
      <img src={item.image} className="item__image--full" alt="necklace" />
    </>
  )
}
