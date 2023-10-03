// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';
import { Alert, Button, Product } from '@nx-example/libs/shared-components'

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
  const [items] = useState(beers)

  const subTotalPrice = items.reduce((acc, item) => acc + item.price, 0)

  const tax = subTotalPrice * 0.07

  const totalPrice = subTotalPrice + tax


  return (
    <main className={styles.main_container}>
      <section className={styles.heading}>
        <div>
          <h1>Review your order</h1>
          <p>Please review your order below.</p>
        </div>
        <Alert title='You can win a prize if you add more items to your order!' />
      </section>

      <section className={styles.shipping_and_payment}>
        <section>
          <h3>Shipping address</h3>
          <p>1234 Main St.</p>
          <p>Anywhere, USA 12345</p>
        </section>

        <div className='divider' />

        <section>
          <h3>Payment method</h3>
          <p>Visa ending in <b>1234</b></p>
        </section>
      </section>



      <section className={styles.products}>
        <ul>
          {beers.map(beer => (
            <Product
              name={beer.name}
              description={beer.description}
              price={beer.price}
              image={beer.image}
            />
          ))}
        </ul>
      </section>

      <section className={styles.order_summary}>
        <span>
          <p>Subtotal: ${subTotalPrice}</p>
          <p>Tax: ${tax}</p>
        </span>

        <p>Total: <b>${totalPrice}</b></p>
      </section>

      <section>
        <Button>Place order</Button>
      </section>
    </main>
  );
}

export default App;
