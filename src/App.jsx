import Hero from './components/2-Hero/Hero.jsx'
import Header from './components/1-header/Header.jsx'
import { useEffect, useState } from 'react'
import Main from './components/3-Main/Main.jsx'
import Footer from './components/5-Footer/Footer.jsx'
import Contact from './components/4-contact/Contact.jsx'

function App() {
  const [showScroll, setShowScroll] = useState(false); // تأكد من أن الحالة مهيئة بشكل صحيح

  useEffect(() => {
    // استخدام window بدلاً من Window وتصحيح addEventListener
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });

    // تنظيف الـ event listener عند إزالة المكون
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []); // التأكد من أن effect يعمل لمرة واحدة

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      
      <Footer />
    
        <a style={{opacity: showScroll? 1 : 0, transition:"1s"}} href="#up">
          <button className="icon-keyboard_arrow_up scroll-2top"></button>
        </a>
      
    </div>
  );
}

export default App;
