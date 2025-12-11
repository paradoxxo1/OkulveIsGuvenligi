// server.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import cron from "node-cron";
import { Resend } from "resend";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(".")); // statik dosyalar için

// Resend API
const resend = new Resend("re_Kv6Rqpie_F9EgpTEep57nZrbWYxJionmS");

// ------------------------
// 1️⃣ Form POST — Kullanıcı Mail Gönderimi
// ------------------------
app.post("/form-gonder", async (req, res) => {
  const { bakim_yapan, onaylayan, firma, saat, tarih } = req.body;

  const logoUrl = "http://127.0.0.1:3000/assets/images/logomuz.png";

  const html = `
    <div style="font-family:Arial; padding:25px; background:#f5f5f7;">
      <div style="background:#fff; padding:25px; border-radius:18px; max-width:520px; margin:auto; box-shadow:0 6px 20px rgba(0,0,0,0.08);">
        <div style="text-align:center; margin-bottom:20px;">
          <img src="${logoUrl}" style="max-width:140px;" />
          <h2 style="margin-top:15px; color:#333; font-weight:600;">Bakım Formu Bildirimi</h2>
        </div>
        <p><strong>Bakım Yapan Kişi:</strong> ${bakim_yapan}</p>
        <p><strong>Onaylayan Kişi:</strong> ${onaylayan}</p>
        <p><strong>Firma:</strong> ${firma}</p>
        <p><strong>Kategori:</strong> ${katagori}</p>
        <p><strong>Bakım Tarihi:</strong> ${tarih}</p>
        <hr style="margin:25px 0; border:none; border-top:1px solid #ddd;">
        <p style="font-size:13px; color:#777; text-align:center;">Bu form otomatik olarak gönderilmiştir.</p>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "akaticaret3@gmail.com",
      subject: `Yeni Form Bildirimi • ${firma}`,
      html,
    });

    console.log("Form maili gönderildi!");
    res.json({ success: true, message: "Mail gönderildi!" });

  } catch (e) {
    console.error("Mail hatası:", e);
    res.status(500).json({ success: false, message: "Mail gönderilemedi!" });
  }
});

// ------------------------
// 2️⃣ Otomatik Bakım Sistemi (Cron)
// ------------------------
function parseDate(str) {
  const [day, month, year] = str.split("/");
  return new Date(`${year}-${month}-${day}`);
}

async function sendMail(to, subject, html) {
  try {
    await resend.emails.send({ from: "onboarding@resend.dev", to, subject, html });
    console.log("Mail gönderildi:", to);
  } catch (e) {
    console.error("Mail hatası:", e);
  }
}

function checkDates() {
  if (!fs.existsSync("data.json")) return;

  const raw = fs.readFileSync("data.json", "utf8");
  const items = JSON.parse(raw);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  items.forEach(item => {
    const bakimTarihi = parseDate(item.date);
    const diffTime = bakimTarihi - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const logoUrl = "http://127.0.0.1:3000/assets/images/logomuz.png";

    const htmlContent = `
      <div style="font-family: Arial; padding:20px;">
        <img src="${logoUrl}" style="max-width:120px;" />
        <h2>${item.name}</h2>
        <p>Bakım Tarihi: <strong>${item.date}</strong></p>
        <p>Kalan Gün: <strong>${diffDays}</strong></p>
      </div>
    `;

    if (diffDays < 0) {
      sendMail(item.email, `${item.name} • Bakım Tarihiniz Yaklaşıyor.`, htmlContent);
    } else if (diffDays <= 7) {
      sendMail(item.email, `${item.name} • Bakım Tarihiniz Gecikti`, htmlContent);
    }
  });
}

// Her sabah 09:00’da kontrol
cron.schedule("0 9 * * *", () => {
  console.log("Günlük bakım kontrolü çalıştı.");
  checkDates();
});

console.log("Sunucu çalışıyor...");
checkDates();

// ------------------------
// Sunucu Başlat
// ------------------------
app.listen(port, () => {
  console.log(`Server çalışıyor: http://localhost:${port}`);
});
