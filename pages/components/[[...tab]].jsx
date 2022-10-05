import { useRouter } from 'next/router';
import Error from 'next/error';

const mockData = [];

const ComponentsPage = () => {

  const router = useRouter()
  const { query } = router;

  const displayComponent = () => {
    if (query.tab && query.tab[0] && !query.tab[1]) {
      switch (query.tab[0]) {
        case "cpu":
          return;
        case "gpu":
          return;
        case "case":
          return;
        case "psu":
          return;
        case "ram":
          return;
        case "motherboard":
          return;
        case "cooling":
          return;
        case "":
          return;
        case "":
          return;
        default:
          return <Error />;
      }
    }
  }

  return (
    <>
        
    </>
  )
}

export default ComponentsPage