import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Link
        href="/dashboard"
        className="cursor-pointer text-green-400 hover:text-green-300 border border-green-500 px-6 py-3 rounded-xl hover:shadow-md hover:shadow-green-500/30 transition-all duration-200"
      >
        Click To See Dashboard
      </Link>
    </div>
  );
}
