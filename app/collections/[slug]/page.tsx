import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductGrid";
import { collectionPages } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(collectionPages).map((slug) => ({ slug }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = collectionPages[slug];

  if (!page) {
    notFound();
  }

  return (
    <main className="page">
      <section className="page-hero">
        <div className="page-hero__copy">
          <span className="section-heading__eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <div className="hero__actions">
            <Link href="/shop" className="button button--light">
              Shop all
            </Link>
            <Link href="/newsletter" className="button button--ghost">
              Join the list
            </Link>
          </div>
        </div>
        <div className="page-hero__media">
          <img src={page.image} alt={page.title} />
        </div>
      </section>

      {page.quote ? (
        <section className="statement-band collection-statement">
          <p>{page.quote}</p>
        </section>
      ) : null}

      {page.pillars?.length ? (
        <section className="content-section">
          <div className="section-heading">
            <div>
              <span className="section-heading__eyebrow">Collection Focus</span>
              <h2>{page.title} worldview</h2>
            </div>
          </div>
          <div className="feature-list feature-list--columns">
            {page.pillars.map((pillar) => (
              <article className="feature-panel" key={pillar.title}>
                <h2>{pillar.title}</h2>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {page.spotlight ? (
        <section className="content-section">
          <div className="editorial-split">
            <div className="editorial-split__media">
              <img src={page.spotlight.image} alt={page.spotlight.title} />
            </div>
            <article className="feature-panel editorial-split__copy">
              <span className="section-heading__eyebrow">Editorial Note</span>
              <h2>{page.spotlight.title}</h2>
              <p>{page.spotlight.body}</p>
            </article>
          </div>
        </section>
      ) : null}

      <ProductGrid products={page.products} title={`${page.title} edit`} ctaHref="/shop" />
    </main>
  );
}
