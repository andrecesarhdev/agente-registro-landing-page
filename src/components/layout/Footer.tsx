export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p>
        © {new Date().getFullYear()} Site desenvolvido por <br/>
        André César Henrique
      </p>
    </footer>
  );
}