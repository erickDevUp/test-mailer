import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SendedMails from "./pages/SendedMails";
import DeletedMails from "./pages/DeletedMails";
import Spam from "./pages/Spam";
import MailerLayout from "./layouts/Mailer.layout";
import DetailsMail from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <MailerLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/sendedMails" element={<SendedMails />} />
          <Route path="/deletedMails" element={<DeletedMails />} />
          <Route path="/mail/:id" element={<DetailsMail />} />
        </Routes>
      </MailerLayout>
    </BrowserRouter>
  );
}

export default App;
