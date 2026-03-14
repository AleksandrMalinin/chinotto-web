import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="notfound-page min-h-screen bg-landing-bg flex flex-col items-center justify-center px-6">
      <div className="notfound-content flex flex-col items-center text-center">
        <p className="text-6xl font-light text-landing-muted mb-4">404</p>
        <p className="text-xl font-light text-landing-foreground mb-8">
          Nothing here to revisit.
        </p>
        <Link
          to="/"
          className="text-landing-accent hover:underline font-light"
        >
          Return home <span className="notfound-arrow" aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
