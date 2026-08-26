type PriceTagProps = {
  price: number
}

function PriceTag({ price }: PriceTagProps) {
  return <span>{price}</span>
}

export default PriceTag