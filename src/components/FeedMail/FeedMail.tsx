import React, { useState } from "react";
import { MailTypes } from "@/interfs/Mails";
import Cards from "../CardsMail/Cards";
import GlobalSearch from "@/components/GlobalSearch";

type Props = {
  mails: MailTypes[];
  onActive: (id: string) => void;
  textBtn?: string;
};

export default function FeedMail({ mails, onActive, textBtn = "Delete" }: Props) {
  const [query, setQuery] = useState("");

  const filteredMails = mails.filter(
    (mail) =>
      mail.subject.toLowerCase().includes(query.toLowerCase()) ||
      mail.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <GlobalSearch query={query} setQuery={setQuery} />
      {filteredMails.map((mail) => (
        <Cards
          key={mail.mId}
          id={mail.mId}
          alt={mail.from}
          src={mail?.photo || ""}
          title={mail.subject}
          content={mail.content}
          onDelete={(id) => onActive(id)}
          textBtn={textBtn}
        />
      ))}
    </div>
  );
}
