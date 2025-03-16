import { MailTypes } from "@/interfs/Mails";

export const inbox: MailTypes[] = [
  {
    mId: "guid-55",
    unread: true,
    from: "jennie.nichols@example.com",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
    subject: "Search test",
    content:
      "Acerca de Microsoft Virtual Academy<br/>Microsoft Virtual Academy ofrece capacitación gratuita en línea por expertos de clase mundial para ayudarte a desarrollar tus habilidades técnicas y avanzar en tu carrera. Conviértelo en tu destino preferido para iniciarte en las últimas tecnologías de Microsoft y unirte a esta comunidad vibrante.",
    created_at: "16-03-2025",
  },
  {
    mId: "guid-1",
    unread: true,
    from: "jennie.nichols@example.com",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
    subject: "Programa de Capacitación",
    content:
      "Acerca de Microsoft Virtual Academy<br/>Microsoft Virtual Academy ofrece capacitación gratuita en línea por expertos de clase mundial para ayudarte a desarrollar tus habilidades técnicas y avanzar en tu carrera. Conviértelo en tu destino preferido para iniciarte en las últimas tecnologías de Microsoft y unirte a esta comunidad vibrante.",
    created_at: "16-03-2025",
  },
  {
    mId: "guid-2",
    unread: false,
    from: "phoebe.cruz@example.com",
    subject: "Impulsa tu futuro",
    content:
      "Fomentamos a nuestros futuros líderes con 47 redes de empleados y 7 grupos globales de recursos para empleados, atendiendo a una comunidad activa de miles en Microsoft.",
    created_at: "12-03-2025",
  },
  {
    mId: "guid-4",
    unread: false,
    from: "anthony.bailey@example.com",
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    subject: "Recordatorio de Reunión",
    content: "No olvides asistir a la reunión de seguimiento.<br/>Gracias.",
    created_at: "31-02-2025",
  },
];
