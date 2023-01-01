import { getPortfolios } from "../datalayer";
import PortfolioPage from "../components/ui/PortfolioPage";
export default function Index({ portfolios }) {
  return (
    <PortfolioPage portfolios={portfolios} />
  );
}

export const getStaticProps = async (ctx) => {
  const portfolios = await getPortfolios()

  return {
    props: {
      portfolios
    }
  }
}