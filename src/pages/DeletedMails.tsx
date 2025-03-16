import FeedMail from "@/components/FeedMail/FeedMail";
import { allMails } from "@/const";
import useDeletedMails from "@/hooks/useDeletedMails";
import { MailTypes } from "@/interfs/Mails";
export default function DeletedMails() {
  const { deletedMails, restoreMail } = useDeletedMails();

  const deletedMailsList: MailTypes[] = allMails.filter((mail) =>
    deletedMails.includes(mail.mId)
  );
  return (
    <FeedMail
      mails={deletedMailsList}
      onActive={restoreMail}
      textBtn="Restore"
    />
  );
}
