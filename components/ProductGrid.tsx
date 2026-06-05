import Link from "next/link";
import type { Product } from "@/lib/site";

export function ProductGrid({
  products,
  title,
  ctaHref = "/shop",
}: {
  products: Product[];
  title?: string;
  ctaHref?: string;
}) {
  return (
    <section className="content-section">
      <div className="section-heading">
        <div>
          <span className="section-heading__eyebrow">Selection</span>
          {title ? <h2>{title}</h2> : null}
        </div>
        <Link href={ctaHref} className="text-link">
          View all
        </Link>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={`${product.title}-${product.price}`}>
            <div className="product-card__media">
              {product.tag ? <span className="product-card__tag">{product.tag}</span> : null}
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-card__meta">
              <div>
                <h3>{product.title}</h3>
                <p>{product.category}</p>
              </div>
              <span>{product.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
