export default function TopBar({ data }) {
  return (
    <div className="bg-slate-900 px-6 py-2 text-xs font-medium text-white sm:text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <span>{data.left}</span>
        <span className="text-slate-300">{data.right}</span>
      </div>
    </div>
  );
}
