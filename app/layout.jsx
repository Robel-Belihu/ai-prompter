import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "ai-prompter",
  description: "Find and share AI prompts",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </provider>
      </body>
    </html>
  );
};

export default layout;
