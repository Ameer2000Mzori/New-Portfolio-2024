import HeroPage from "./components/hero/HeroPage.jsx";
import StatsPage from "./components/stats/statsPage.jsx";
export default function App() {
  return (
    <div className="bg-darkBgColor overflow-hidden">
      <HeroPage />
      <StatsPage />
    </div>
  );
}
