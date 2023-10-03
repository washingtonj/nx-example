import styles from './App.module.css'
import { Alert, Button, Product } from "@nx-example/libs/shared-components";


const beers = [
  {
    id: 1,
    name: 'IPA',
    description: 'A hoppy beer style within the broader category of pale ale.',
    price: 5.00,
    image: 'https://www.gooseisland.com.br/sites/g/files/wnfebl5821/files/styles/webp/public/paragraphs/product_size/2022-04/Midway%20355.png.webp?itok=9y3I3N_p'
  },
  {
    id: 2,
    name: 'Stout',
    description: 'A dark, top-fermented beer with a number of variations.',
    price: 6.00,
    image: 'https://www.ambev.com.br/sites/g/files/wnfebl5836/files/styles/webp/public/paragraphs/product_size/2022-09/walspe.png.webp?itok=OpWJn4Pg'
  },
  {
    id: 3,
    name: 'Pilsner',
    description: 'A type of pale lager which accounts for more than two-thirds of the beer produced in the world.',
    price: 4.00,
    image: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Budweiser_Card.png'
  }
]



export function App() {
  return (
    <main className={styles.container}>
      <span>
        <h1>Manage your received orders</h1>
        <p>
          Here you can manage your received orders. You can see the list of
          orders, and you can also see the details of each order.
        </p>
      </span>

      <Alert title="You have 1 new order" />

      <ul className={styles.order}>
        <li>
          <div>
            <span className={styles.order_details}>
              <h2>Order 3478887</h2>
              <span className={styles.tag}>Waiting confirmation</span>
            </span>
            <span className={styles.customer_details}>
              <p><strong>Customer:</strong> John Doe</p>
              <p><strong>Method:</strong> Credit Card</p>
              <p><strong>Date:</strong> 2021-09-01</p>
            </span>
          </div>
          <ul className={styles.items}>
            {beers.map(beer => (
              <Product key={beer.id}
                description={beer.description}
                image={beer.image}
                name={beer.name}
                price={beer.price}
              />
            ))}
          </ul>

          <Button>Confirm order</Button>
        </li>
      </ul>
    </main>
  )
}
