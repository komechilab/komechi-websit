export default function Footer({ data }) {
  return (
    <footer className="border-t border-gray-100 bg-slate-900 py-8 text-center text-sm text-slate-400">
      {data.text}
    </footer>
  );
}
