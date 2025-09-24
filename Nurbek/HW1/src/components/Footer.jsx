export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} My First React App</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0f172a",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    marginTop: "20px",
  },
};
