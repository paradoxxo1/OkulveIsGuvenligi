# Okul ve İş Güvenliği 🚧

## 📌 Proje Hakkında
Bu proje, okullar ve öğrenci yurtlarında bulunan teknik ekipmanlar için **bakım takip ve otomatik mail bildirim sistemi** sunan bir web uygulamasıdır.

Sistem; bakım formlarından gelen verileri e-posta ile iletir ve yaklaşan / geciken bakım tarihleri için otomatik hatırlatma mailleri gönderir.
<img width="1920" height="1041" alt="6" src="https://github.com/user-attachments/assets/ed7d5dc8-b324-4f66-ab59-b881201e8de0" />
<img width="1920" height="1043" alt="5" src="https://github.com/user-attachments/assets/bd25eed2-8a57-4100-9df5-f70640c55ad2" />
<img width="1911" height="957" alt="4" src="https://github.com/user-attachments/assets/cfe43180-0831-47ac-8610-8c5f81c4d51e" />
<img width="1911" height="956" alt="3" src="https://github.com/user-attachments/assets/4a5011ff-d7ab-4109-bc92-96788652e772" />
<img width="1915" height="966" alt="2" src="https://github.com/user-attachments/assets/8813f24e-15f3-48cb-b562-5bc0c0a891ed" />
<img width="1906" height="965" alt="1" src="https://github.com/user-attachments/assets/8c6faecb-28cf-466d-ac90-6820f755fb48" />

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
