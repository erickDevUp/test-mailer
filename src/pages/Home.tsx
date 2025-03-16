import "../App.css";
import FeedMail from "@/components/FeedMail/FeedMail";
import { inbox } from "@/data/inbox";
import useDeletedMails from "@/hooks/useDeletedMails";

export default function Home() {
    const { deletedMails, addDeletedMail } = useDeletedMails();

  const unreadMails = inbox.filter(
    (mail) => mail.unread && !deletedMails.includes(mail.mId)
  );
  return (
    <>
      <FeedMail mails={unreadMails} onActive={addDeletedMail} />
    </>
  );
}
