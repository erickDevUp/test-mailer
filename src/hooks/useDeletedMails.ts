import { useState, useEffect } from "react";

export default function useDeletedMails() {
  const [deletedMails, setDeletedMails] = useState<string[]>(() => {
    const stored = localStorage.getItem("deletedMails") || "[]";
    return JSON.parse(stored);
  });

  useEffect(() => {
    localStorage.setItem("deletedMails", JSON.stringify(deletedMails));
  }, [deletedMails]);

  const addDeletedMail = (id: string) => {
    setDeletedMails(prev => (prev.includes(id) ? prev : [...prev, id]));
  };

  const restoreMail = (id: string) => {
    setDeletedMails(prev => prev.filter(mailId => mailId !== id));
  };

  return { deletedMails, addDeletedMail, restoreMail, setDeletedMails };
}
