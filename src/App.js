import ExpertisePage from "./components/expertise/expertise.jsx";
import HeroPage from "./components/hero/HeroPage.jsx";
import ProjectsPage from "./components/projects_blogs/projects.jsx";
import StatsPage from "./components/stats/statsPage.jsx";
export default function App() {
  return (
    <div className="bg-darkBgColor overflow-hidden">
      <HeroPage />
      <ExpertisePage />
      <StatsPage />
      <ProjectsPage />
    </div>
  );
}
