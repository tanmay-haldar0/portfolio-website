export default function Header() {
  return (
    <div style={styles.hero}>
      <h1 style={styles.title}>Tanmay Haldar</h1>
      <p style={styles.subtitle}>React | React Native | MERN Developer</p>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    paddingTop: "20vh",
    color: "white",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "3.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#aaa",
  },
};
