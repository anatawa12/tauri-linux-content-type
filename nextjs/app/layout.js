import {AlertOnMount} from "./alert";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AlertOnMount>
          {children}
        </AlertOnMount>
      </body>
    </html>
  );
}
