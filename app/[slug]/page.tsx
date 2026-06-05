import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { StoryGrid } from "@/components/StoryGrid";
import { contentPages, featuredProducts, journalStories } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(contentPages).map((slug) => ({ slug }));
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = contentPages[slug];

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
        </div>
        <div className="page-hero__media">
          <img src={page.leadImage} alt={page.title} />
        </div>
      </section>

      <section className="content-section content-section--tight">
        <div className="feature-list">
          {page.sections.map((section) => (
            <article className="feature-panel" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      {slug === "shop" ? (
        <ProductGrid products={featuredProducts} title="Featured collection" />
      ) : null}

      {slug === "journal" ? <StoryGrid stories={journalStories} /> : null}

      {slug === "newsletter" ? (
        <section className="content-section">
          <div className="newsletter-panel">
            <div>
              <span className="section-heading__eyebrow">Subscribe</span>
              <h2>Get the next drop before it opens publicly.</h2>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Join</button>
            </form>
          </div>
        </section>
      ) : null}

      {slug === "contact" ? (
        <section className="content-section">
          <div className="contact-grid">
            <div className="feature-panel">
              <h2>Email</h2>
              <p>studio@moral.world</p>
            </div>
            <div className="feature-panel">
              <h2>Client care</h2>
              <p>Monday to Friday, 10:00 to 18:00</p>
            </div>
            <div className="feature-panel">
              <h2>Studio</h2>
              <p>Editorial appointments by request only.</p>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
