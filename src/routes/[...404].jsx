import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        The page you're looking for doesn't exist.
      </p>
    </main>
  );
}
