import HeroPage from "./components/hero/HeroPage.jsx";
import ExpertisePage from "./components/expertise/expertise.jsx";
import StatsPage from "./components/stats/statsPage.jsx";
import ProjectsPage from "./components/projects_blogs/projects.jsx";
import ConnectPage from "./components/connect_page/ConnectPage.jsx";
import FormPage from "./components/form/form.jsx";
import FooterPage from "./components/footer/footer.jsx";

export default function App() {
  return (
    <div className="bg-darkBgColor overflow-hidden ">
      <HeroPage />
      <ExpertisePage />
      <StatsPage />
      <ProjectsPage />
      <ConnectPage />
      <FormPage />
      <FooterPage />
    </div>
  );
}
