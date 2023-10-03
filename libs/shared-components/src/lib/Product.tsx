import styles from './Product.module.css'

interface ProductProps {
  name: string
  image: string
  description: string
  price: number
}

export function Product(props: ProductProps) {
  return (
    <li className={styles.product}>
      <img src={props.image} alt={props.name} />
      <span>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>${props.price.toFixed(2)}</p>
      </span>
    </li>
  )
}
