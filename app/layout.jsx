import "@styles/globals.css";

export const metadata = {
  title: "ai-prompter",
  description: "Find and share AI prompts",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default layout;
