import { MailTypes } from "@/interfs/Mails";

export const spam: MailTypes[] = [
  {
    mId: "guid-spam",
    unread: true,
    from: "amoli.naik@example.com",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    subject: "Préstamo Preaprobado",
    content: "¡Felicidades! <u>La tarjeta de crédito<u> se enviará hoy mismo.",
    created_at: "16-03-2025",
  },
  {
    mId: "guid-spam-2",
    unread: true,
    from: "izolda.miljkovic@example.com",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    subject: "¡Has ganado la lotería!",
    content:
      "Acabas de ganar la lotería oficial de Nueva York. Por favor, envíanos tu dirección para iniciar la transferencia.",
    created_at: "31-02-2025",
  },
];
