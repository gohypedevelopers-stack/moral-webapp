export default function Loading() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        backgroundColor: "#0a0a0a",
      }}
    >
      <img
        src="/loader.jpeg"
        alt="Loading MORAL"
        style={{
          width: "100%",
          height: "100dvh",
          objectFit: "cover",
          display: "block",
        }}
      />
    </main>
  );
}
