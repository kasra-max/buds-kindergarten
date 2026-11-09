# سایت مهدکودک (روضة براعم / Buds Kindergarten)

سایت دوزبانه (عربی راست‌چین + انگلیسی) با React در فرانت‌اند و Django REST در بک‌اند.

**همه متن‌ها، اسم‌ها، تلفن، آدرس و ایمیل نمونه (placeholder) هستند و باید با اطلاعات واقعی عوض شوند.**

## صفحه‌ها
خانه، درباره ما (داستان، معلم‌ها، ایمنی)، برنامه‌ها (سه گروه سنی، برنامه روزانه، سوالات متداول)،
گالری عکس (با نمایش بزرگ)، اخبار، ثبت‌نام (مراحل، مدارک، فرم)، تماس (اطلاعات، نقشه، فرم پیام).

## اجرا روی ویندوز

### ۱) بک‌اند (پوشه backend)
```
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations school
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```
پنل مدیریت: http://localhost:8000/admin
از آنجا خبر و عکس گالری اضافه می‌کنی و درخواست‌های ثبت‌نام و پیام‌های تماس را می‌بینی.

### ۲) فرانت‌اند (پوشه frontend، در ترمینال دوم)
```
cd frontend
npm install
npm run dev
```
سایت: http://localhost:5173

اگر بک‌اند روی آدرس دیگری است، فایل `.env.example` را به `.env` کپی و `VITE_API_URL` را عوض کن.

## شخصی‌سازی
- **متن‌ها و ترجمه‌ها:** `frontend/src/translations.js` (بخش `en` و `ar`)
- **رنگ‌ها و فونت:** بالای `frontend/src/styles.css` (بلوک `:root`)
- **نقشه:** در `frontend/src/pages/Contact.jsx` مقدار `MAP_SRC` را با لینک embed گوگل‌مپ پر کن
- **اسم مهدکودک:** `brand.name` در `translations.js` و `<title>` در `index.html`
- تا وقتی خبر یا عکسی در پنل ادمین نگذاشته‌ای، سایت خبر و کاشی‌های نمونه نشان می‌دهد.

## قبل از انتشار واقعی
- در بک‌اند `DJANGO_DEBUG=0`، یک `DJANGO_SECRET_KEY` واقعی، `DJANGO_ALLOWED_HOSTS` و `CORS_ALLOWED_ORIGINS` (آدرس سایت) را تنظیم کن.
- برای فایل‌های media (عکس‌ها) در محیط واقعی باید وب‌سرور (مثل Nginx) تنظیم شود؛ `runserver` فقط برای توسعه است.
- با `npm run build` خروجی فرانت‌اند در پوشه `dist` ساخته می‌شود.
