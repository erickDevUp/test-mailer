import NotFound from "@/components/404";
import { inbox } from "@/data/inbox";
import { spam } from "@/data/spam";
import { sanitizeText } from "@/helper/sanitizeText";
import { useParams } from "react-router";

export default function DetailsMail() {
  const { id } = useParams();
  const allMails = inbox.concat(spam);
  const mail = allMails.find((mail) => mail.mId === id);
  const sanitizedText = sanitizeText(mail?.content || "");
  if (!mail) return <NotFound />;

  return (
    <section>
      <h1>{mail?.subject}</h1>
      <p>{sanitizedText}</p>
      <img src={mail?.photo} alt={mail?.from} />
      <p>{mail?.from}</p>
    </section>
  );
}
