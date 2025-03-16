export interface MailTypes {
  mId: string;
  unread: boolean;
  from: string;
  photo?: string;
  subject: string;
  content: string;
  created_at: string;
}
