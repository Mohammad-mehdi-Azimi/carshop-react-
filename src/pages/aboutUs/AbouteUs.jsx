import React from "react";
import styled from "./aboutUse.module.css";
import Navbar from "../../components/navbar/Navbar";

function AbouteUs() {
  return (
    <div className={styled.aboute}>
      <Navbar title="ماشین هایه آقا ممد" />
      <h1>درباره ما</h1>
      <p>
        ما در اینجا جمع شده‌ایم تا بهترین ماشین‌ها را به شما معرفی کنیم 🚗. تیم
        ما از افراد با تجربه و حرفه‌ای تشکیل شده است که هر کدام در زمینه خود
        متخصص هستند. ما تلاش می‌کنیم تا با ارائه خدمات عالی و محصولات با کیفیت،
        رضایت شما را جلب کنیم. 😃 در این مسیر، ما با چالش‌های زیادی روبرو
        شده‌ایم اما همیشه با لبخند و انرژی مثبت به جلو حرکت کرده‌ایم. 😎 ما به
        شهرهای مختلف سفر کرده‌ایم تا بهترین ماشین‌ها را برای شما پیدا کنیم و
        مطمئن شویم که شما از خرید خود راضی هستید. 🏙️ با ما همراه باشید تا
        تجربه‌ای متفاوت از خرید ماشین را تجربه کنید. 🚀
      </p>
      <h2>فعالیت ما در کدام شهر است؟</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdkD565LEGPAZZ8BEcD8Vg9P-pG2bcGCffQ&s" />
    </div>
  );
}

export default AbouteUs;
