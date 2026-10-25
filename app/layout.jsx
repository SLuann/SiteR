import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="flex flex-col min-h-screen">
          {children}
      </body>
    </html>
  );
}