import CategoryListing from "../components/Home/CategoryListing/CategoryListing";
import HeroBanner from "../components/Home/HeroBanner/HeroBanner";
import SectionExplanation from "../components/Home/SectionExplanation/SectionExplanation";
import project from '../public/lotties/project-config.json'
import dashboard from '../public/lotties/animation-about-seo-dashboard.json'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <CategoryListing />
      <SectionExplanation text="Laissez vous guider par notre tableau de bord fait sur mesure et vous accompagne dans la réalisation de vos configurations" animation={project} direction="row" imageExpl="" justifyContent="flex-start" />
      <SectionExplanation text="Amusez-vous avec notre Configurateur fait sur-mesure pour tout vos besoins" animation={dashboard} direction="row-reverse" justifyContent="flex-end"  />
      {/* <SectionExplanation direction="row" text="Vous pouvez à tout moment sélectionner n'importe quel composant pour vous en servir comme base pour une de vos configurations" animation={} imageExpl="" /> */}
    </div>
  );
}
  