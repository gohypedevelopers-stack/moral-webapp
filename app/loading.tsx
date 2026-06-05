export default function Loading() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
      }}
    >
      <picture style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          src="/loader.jpeg"
          alt="Loading MORAL"
          style={{
            width: "min(100%, 420px)",
            height: "auto",
            maxHeight: "70dvh",
            objectFit: "cover",
            display: "block",
            borderRadius: "20px",
          }}
        />
      </picture>
    </main>
  );
}
