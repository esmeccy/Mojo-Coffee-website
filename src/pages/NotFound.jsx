import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page page--center">
      <h1>This page is still brewing.</h1>
      <p>We couldn&apos;t find what you were looking for.</p>
      <Link to="/" className="btn btn--dark">
        Back home
      </Link>
    </main>
  );
}

export default NotFound;
