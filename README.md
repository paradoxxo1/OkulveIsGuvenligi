# Okul ve İş Güvenliği 🚧

## 📌 Proje Hakkında
Bu proje, okullar ve öğrenci yurtlarında bulunan teknik ekipmanlar için **bakım takip ve otomatik mail bildirim sistemi** sunan bir web uygulamasıdır.

Sistem; bakım formlarından gelen verileri e-posta ile iletir ve yaklaşan / geciken bakım tarihleri için otomatik hatırlatma mailleri gönderir.

---

## ⚙️ Özellikler

- 📧 Form doldurulduğunda otomatik mail gönderimi
- ⏰ Zamanlanmış görevler ile bakım tarihi kontrolü (cron)
- 📅 Yaklaşan veya geciken bakımlar için otomatik hatırlatma mails
- 🗂️ JSON dosyasından veri okuma (data.json)
- 🖼️ Statik dosya ve logo desteği

---

## 🧠 Kullanılan Teknolojiler
<img width="1024" height="1024" alt="Eğitim Güvenliği Logosu" src="https://github.com/user-attachments/assets/b9f98396-733d-4bfc-97ba-baf627e7dd38" />

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
