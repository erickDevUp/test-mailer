import { useNavigate } from "react-router";
import { Button } from "./ui/button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Not found</h1>
      <p>The mail you are looking for does not exist.</p>
      <p>Please check the URL and try again.</p>
      <p>404</p>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </div>
  );
}
