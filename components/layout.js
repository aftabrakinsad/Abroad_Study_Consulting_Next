import Header from './header';
import Navbar from './navbar';
import Footer from './footer';

// Shell for public pages: fixed navbar, content, footer pinned to the bottom
export default function MyLayout({ title, children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title={title} />
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
