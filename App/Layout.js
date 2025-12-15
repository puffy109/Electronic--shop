export const metadata = {
  title: "ElectroMart Electronics",
  description: "Buy electronics online or visit our physical shop"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
