p"use client";
import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle, Phone, MapPin } from "lucide-react";

export default function Home() {
  const whatsapp = "https://wa.me/254700000000"; // CHANGE NUMBER

  return (
    <div>
      {/* HEADER */}
      <header style={styles.header}>
        <h2>ElectroMart Electronics</h2>
        <button style={styles.cart}><ShoppingCart size={18}/> Cart</button>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
          Buy Electronics Online or Visit Our Shop
        </motion.h1>
        <p>Phones • Laptops • Accessories • Warranty Guaranteed</p>
        <div>
          <a href="#shop"><button style={styles.primary}>Shop Online</button></a>
          <a href="#visit"><button style={styles.secondary}>Visit Store</button></a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="shop" style={styles.section}>
        <h2>Available Products</h2>
        <div style={styles.grid}>
          {[
            {name:"Smartphone", price:"KES 55,000"},
            {name:"Laptop", price:"KES 95,000"},
            {name:"Headphones", price:"KES 6,500"}
          ].map((p,i)=>(
            <div key={i} style={styles.card}>
              <h3>{p.name}</h3>
              <strong>{p.price}</strong>
              <button style={styles.primary}>Pay with M-Pesa</button>
              <a href={whatsapp}>
                <button style={styles.secondary}>
                  <MessageCircle size={16}/> WhatsApp Order
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" style={{...styles.section, background:"#f9f9f9"}}>
        <h2>Visit Our Physical Shop</h2>
        <p><MapPin size={16}/> Nairobi CBD</p>
        <p>Mon–Sat | 8AM – 7PM</p>
        <a href={whatsapp}>
          <button style={styles.primary}><Phone size={16}/> Call / WhatsApp</button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} ElectroMart Electronics
      </footer>
    </div>
  );
}

const styles = {
  header:{display:"flex",justifyContent:"space-between",padding:20,background:"#111",color:"#fff"},
  cart:{background:"#2563eb",color:"#fff",border:"none",padding:"8px 14px"},
  hero:{padding:60,textAlign:"center",background:"linear-gradient(90deg,#2563eb,#1e40af)",color:"#fff"},
  section:{padding:40,textAlign:"center"},
  grid:{display:"grid",gap:20,maxWidth:900,margin:"auto"},
  card:{border:"1px solid #ddd",padding:20},
  primary:{background:"#2563eb",color:"#fff",border:"none",padding:"10px 16px",margin:5},
  secondary:{background:"#fff",color:"#2563eb",border:"1px solid #2563eb",padding:"10px 16px",margin:5},
  footer:{padding:20,textAlign:"center",background:"#111",color:"#fff"}
};
