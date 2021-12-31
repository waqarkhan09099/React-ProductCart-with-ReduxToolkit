import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyData = [
  {
    id: "p1",
    title: "Rirch Dad and Poor Dad Book",
    description: "Rich Dad Poor Dad is a 1997 book written by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence.",
    price: 25,
  },
  {
    id: "p2",
    title: "Secrets Of Divine Love",
    description: "Are you longing to experience a more intimate & loving relationship with the divine? Secrets of Divine Love draws upon spiritual secrets of the Qur’an, ancient mystical poetry, and stories from the world’s greatest prophets and spiritual masters to help you reignite your faith, overcome your doubts, and deepen your connection with God.",
    price: 30,
  }
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map(items => (

          <ProductItem
            key={items.id}
            id={items.id}
            title={items.title}
            price={items.price}
            description={items.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
