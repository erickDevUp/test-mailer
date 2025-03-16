import FeedMail from "@/components/FeedMail/FeedMail";
import { spam } from "@/data/spam";
import useDeletedMails from "@/hooks/useDeletedMails";

export default function Spam() {
  const { deletedMails, addDeletedMail } = useDeletedMails();

  const unreadMails = spam.filter(
    (mail) => !deletedMails.includes(mail.mId)
  );
  return (
    <>
      <FeedMail mails={unreadMails} onActive={addDeletedMail} />
    </>
  );
}
