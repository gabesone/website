import Link from "next/link";

export default function Footer() {
  const githubLink = "https://github.com/gabesone";

  return (
    <footer className="flex-shrink-0 text-center pb-4">
      <p>
        Made with ❤️️ by{" "}
        <Link className="text-gray-500/70" href={githubLink}>
          gabesone
        </Link>
      </p>
    </footer>
  );
}
