
**فارسی**

یک **پروژه مبتنی بر React** برای مدیریت و انتقال وجه بین کارت‌هایی که اضافه کرده‌اید. این برنامه از React-Router برای مسیریابی و مفهوم "Prop Lifting" برای مدیریت حالت استفاده می‌کند.

---

## امکانات

### صفحه 1: افزودن کارت‌ها
- افزودن کارت‌ها به همراه موجودی آن‌ها، با قابلیت شناسایی نام بانک های ایرانی.
- فقط شماره کارت‌های معتبر مجاز هستند.

### صفحه 2: انتقال وجه
- با کلیک روی یک کارت، آن را برای انتقال وجه انتخاب کنید.
- مبلغ انتقال باید کمتر از موجودی کارت انتخاب شده باشد.

### صفحه 3: تاریخچه تراکنش‌ها
- مشاهده تاریخچه کامل تراکنش‌های شما.

---

## فناوری‌های استفاده شده
- **React**: برای ساخت رابط کاربری.
- **React-Router**: برای مسیریابی روان بین صفحات.
- **Props Lifting**: برای مدیریت استیت ها در بین کامپوننت‌ها.

---

## نصب و راه‌اندازی
1. مخزن را کلون کنید:
   ```bash
   git clone https://github.com/yourusername/payment.git
   ```
2. به دایرکتوری پروژه بروید:
   ```bash
   cd payment
   ```
3. وابستگی‌ها را نصب کنید:
   ```bash
   npm install
   ```
4. سرور توسعه را اجرا کنید:
   ```bash
   npm start
   ```
5. مرورگر خود را باز کرده و به آدرس زیر بروید:
   ```
   http://localhost:3000
   ```

---

## نحوه استفاده
1. **افزودن کارت‌ها**: به صفحه اول بروید و اطلاعات کارت و موجودی آن را وارد کنید.
2. **انتقال وجه**: در صفحه دوم، یک کارت را انتخاب کرده و مبلغ انتقال را وارد کنید. اطمینان حاصل کنید که مبلغ از موجودی کارت بیشتر نباشد.
3. **مشاهده تراکنش‌ها**: به صفحه سوم بروید و تاریخچه تراکنش‌ها را مشاهده کنید.

---

**English**

A **React-based project** designed for managing and transferring money between cards you've added. The application incorporates React-Router for navigation and employs the concept of prop lifting for state management.

---

## Features

### Page 1: Add Cards
- Add your cards along with their respective balances, it shows you persian bank name.
- Only valid card numbers are allowed.

### Page 2: Transfer Money
- Select a card by clicking on it to initiate a transfer.
- Transfer amount must be less than the available balance on the selected card.

### Page 3: Transaction History
- View a detailed history of all your transactions.

---

## Technologies Used
- **React**: For building the user interface.
- **React-Router**: For seamless navigation between pages.
- **Props Lifting**: To manage state effectively across components.

---

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/payment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd payment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Usage
1. **Add Cards**: Navigate to the first page to input card details and their balances.
2. **Transfer Money**: Select a card on the second page and input the transfer amount. Ensure the amount does not exceed the card’s balance.
3. **View Transactions**: Navigate to the third page to review your transaction history.
