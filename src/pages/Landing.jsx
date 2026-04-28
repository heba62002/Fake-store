// import { Link } from "react-router-dom";

// export default function Landing() {
//   return (
//     <div>
//       <h1>Welcome to Store</h1>
//       <p>Browse our products</p>

//       <Link to="/products">Go to Products</Link>
      
//     </div>
//   );
// }


// export default function Landing() {
//   return (
//     <div className="landing">
//       <div className="hero">
//         <h1>Welcome to Our Store 🛍</h1>
//         <p>
//           Discover amazing products at the best prices.
//           Simple. Fast. Reliable.
//         </p>

//         <Link to="/products" className="cta-btn">
//           Browse Products
//         </Link>
//       </div>
//     </div>
//   );
// }




// import { Link } from "react-router-dom";
// import "./landing.css";

// export default function Landing() {
//   return (
//     <div className="landing">
   
//       <div className="hero">
//         <h1>Own your moments.</h1>
//         <p>
//           Discover the elegance of Taya. <br />
//           Simple. Fast. Reliable.
//         </p>
//         <Link to="/products" className="cta-btn">
//           Browse Products
//         </Link>
//       </div>

//       {/* قسم التقديم - مثل الصورة */}
//       <section className="intro-section">
//         <h2>The revolution is now. <br /> Meet <strong>Taya</strong>.</h2>
//       </section>

//       {/* شبكة المميزات - محاكاة للمربعات الملونة في أسفل الصورة */}
//       <section className="features-grid">
//         <div className="feature-card">
//           <h3>Design</h3>
//           <p>Effortless and powerful lines for every moment.</p>
//         </div>
        
//         <div className="feature-card blue">
//           <h3>Audio</h3>
//           <p>Crystal clear sound integration in a wearable form.</p>
//         </div>

//         <div className="feature-card">
//           <h3>Privacy</h3>
//           <p>Your data stays yours, encrypted and safe.</p>
//         </div>
//       </section>
//     </div>
//   );
// }



import { Link } from "react-router-dom";
import "./landing.css";

export default function Landing() {
  return (
    <div className="landing">
      {/* قسم الـ Hero */}
      <div className="hero">
        <h1>Own your moments.</h1>
        <p>
          Discover the elegance of Taya. <br />
          Simple. Fast. Reliable.
        </p>
        <Link to="/products" className="cta-btn">
          Browse Products
        </Link>
      </div>

      <section className="intro-section">
        <h2>The revolution is now. <br /> Meet <strong>Taya</strong>.</h2>
      </section>

      <section className="features-grid">
        <div className="feature-card">
          <h3>Design</h3>
          <p>Effortless and powerful lines for every moment.</p>
        </div>
        <div className="feature-card blue">
          <h3>Audio</h3>
          <p>Crystal clear sound integration in a wearable form.</p>
        </div>
        <div className="feature-card">
          <h3>Privacy</h3>
          <p>Your data stays yours, encrypted and safe.</p>
        </div>
      </section>

      {/* 💡 إضافة قسم التواصل (Contact Us) */}
      <section className="contact-section">
        <div className="contact-container">
          <h2>Get in Touch</h2>
          <p>We’d love to hear from you. Send us a message.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* 💡 إضافة التذييل (Footer) */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>TAYA</h3>
            <p>Elegance in every detail.</p>
          </div>
          <div className="footer-links">
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Support</Link>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Taya Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}