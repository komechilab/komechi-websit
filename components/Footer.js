export default function Footer({ data }) {
  return (
    <footer className="border-t border-gray-100 bg-slate-900 py-8 text-center text-sm text-slate-400">
      {data.lines?.map((line) => (
        <p key={line} className="mb-1">{line}</p>
      ))}
      <p className="mt-3">{data.text}</p>
    </footer>
  );
}
