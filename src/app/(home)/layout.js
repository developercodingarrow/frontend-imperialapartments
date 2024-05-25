import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <p>Header</p>
        {children}
        <p>Footer</p>
      </body>
    </html>
  );
}
