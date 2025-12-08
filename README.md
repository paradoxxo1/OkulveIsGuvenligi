# Okul ve İş Güvenliği 🚧

## 📌 Proje Hakkında
Bu proje, okullar ve öğrenci yurtlarında bulunan teknik ekipmanlar için **bakım takip ve otomatik mail bildirim sistemi** sunan bir web uygulamasıdır.

Sistem; bakım formlarından gelen verileri e-posta ile iletir ve yaklaşan / geciken bakım tarihleri için otomatik hatırlatma mailleri gönderir.
<div style="display:flex; flex-wrap:wrap; gap:10px;">

  <img src="https://github.com/user-attachments/assets/242a3b5b-8ec9-4314-bcc1-61eb7e9bb26d" width="48%" />
  <img src="https://github.com/user-attachments/assets/cd8540cb-dfce-44cd-97df-01574390a933" width="48%" />

  <img src="https://github.com/user-attachments/assets/1bbe1aea-d87b-4361-a252-bb57ba45d5c8" width="48%" />
  <img src="https://github.com/user-attachments/assets/8d59bda6-c664-432a-9bde-815592c2ec8b" width="48%" />
  
  <img src="https://github.com/user-attachments/assets/67e00844-5f55-4d21-aeaa-e7cc1ab378c2" width="48%" />
  <img src="https://github.com/user-attachments/assets/0385fb66-78c2-4c66-be53-84a3c569ea01" width="48%" />

</div>




---

## ⚙️ Özellikler

- 📧 Form doldurulduğunda otomatik mail gönderimi
- ⏰ Zamanlanmış görevler ile bakım tarihi kontrolü (cron)
- 📅 Yaklaşan veya geciken bakımlar için otomatik hatırlatma mails
- 🗂️ JSON dosyasından veri okuma (data.json)
- 🖼️ Statik dosya ve logo desteği

---

## 🧠 Kullanılan Teknolojiler
Bu projede aşağıdaki kütüphaneler kullanılmıştır:

- **Node.js**
- **Express.js**
- **body-parser** → JSON veri alma  
- **cors** → CORS izinleri  
- **fs** → Dosya okuma/yazma  
- **node-cron** → Zamanlanmış görevler  
- **Resend API** → Mail gönderme servisi  

---

## 📁 Proje Yapısı

```bash
OkulveIsGuvenligi/
├── server.js
├── data.json
├── assets/
│   └── images/
│       └── logomuz.png
├── package.json
