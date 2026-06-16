import TopBar from '../components/TopBar';
import Header from '../components/Header';
import NewsTicker from '../components/NewsTicker';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NewsTicker />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
