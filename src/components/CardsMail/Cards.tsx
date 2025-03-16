import { sanitizeText } from "@/helper/sanitizeText";
import { Button } from "../ui/button";
import { Link } from "react-router";

type Props = {
  id: string;
  alt: string;
  src: string;
  title: string;
  content: string;
  onDelete: (id: string) => void; // added new prop
  textBtn: string;
};

export default function Cards({
  id,
  alt,
  src,
  title,
  content,
  onDelete,
  textBtn,
}: Props) {
  const sanitizedText = sanitizeText(content);

  return (
    <div className="flex h-20 gap-2 items-center shadow-md rounded-lg p-2 max-w-md">
      <Link to={`/mail/${id}`} className="flex gap-2 items-center">
        <img src={src} alt={alt} className="w-10 h-10 rounded-full" />
        <div className="flex flex-col justify-center">
          <h4 className="text-sm font-bold">{title}</h4>
          <p className="text-sm line-clamp-1">{sanitizedText}</p>
        </div>
      </Link>

      <Button onClick={() => onDelete(id)}>{textBtn}</Button>
    </div>
  );
}
