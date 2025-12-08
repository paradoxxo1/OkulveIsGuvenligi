# Okul ve İş Güvenliği 🚧

## 📌 Proje Hakkında
Bu proje, okullar ve öğrenci yurtlarında bulunan teknik ekipmanlar için **bakım takip ve otomatik mail bildirim sistemi** sunan bir web uygulamasıdır.

Sistem; bakım formlarından gelen verileri e-posta ile iletir ve yaklaşan / geciken bakım tarihleri için otomatik hatırlatma mailleri gönderir.
<div style="display:flex; flex-wrap:wrap; gap:10px;">

  <img src="https://github.com/user-attachments/assets/ed7d5dc8-b324-4f66-ab59-b881201e8de0" width="48%" />
  <img src="https://github.com/user-attachments/assets/bd25eed2-8a57-4100-9df5-f70640c55ad2" width="48%" />

  <img src="https://github.com/user-attachments/assets/cfe43180-0831-47ac-8610-8c5f81c4d51e" width="48%" />
  <img src="https://github.com/user-attachments/assets/4a5011ff-d7b5-4109-bc92-96788652e772" width="48%" />

  <img src="https://github.com/user-attachments/assets/8813f24e-15f3-48cb-b562-5bc0c0a891ed" width="48%" />
  <img src="https://github.com/user-attachments/assets/8c6faecb-28cf-466d-ac90-6820f755fb48" width="48%" />

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
