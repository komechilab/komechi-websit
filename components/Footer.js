export default function Footer({ data }) {
  return (
    <footer className="border-t border-gray-100 bg-slate-900 py-8 text-center text-sm text-slate-400">
      <a
        href={data.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-red-400 underline-offset-2 hover:underline"
      >
        ▶ {data.youtubeLabel}
      </a>
      <p className="mt-3">{data.text}</p>
    </footer>
  );
}
