import type { StoryCard } from "@/lib/site";

export function StoryGrid({ stories }: { stories: StoryCard[] }) {
  return (
    <section className="content-section">
      <div className="story-grid">
        {stories.map((story) => (
          <article className="story-card" key={story.title}>
            <img src={story.image} alt={story.title} />
            <div className="story-card__body">
              <span className="story-card__meta">{story.meta}</span>
              <h3>{story.title}</h3>
              <p>{story.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
