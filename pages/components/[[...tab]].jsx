import { useRouter } from 'next/router';
import Error from 'next/error';
import HomeComponents from '../../container/Components/HomeComponents';
import CPU from '../../container/Components/CPU/CPU';
import GPU from '../../container/Components/GPU/GPU';
import Case from '../../container/Components/Case/Case';
import PSU from '../../container/Components/PSU/PSU';
import RAM from '../../container/Components/RAM/RAM';
import Motherboard from '../../container/Components/Motherboard/Motherboard';
import Cooling from '../../container/Components/Cooling/Cooling';
import SSD from '../../container/Components/SSD/SSD';
import HDD from '../../container/Components/HDD/HDD';

const mockData = [];

const ComponentsPage = () => {

  const router = useRouter()
  const { query } = router;

  const displayComponent = () => {
    if (query.tab && query.tab[0] && !query.tab[1]) {
      switch (query.tab[0]) {
        case "cpu":
          return <CPU />;
        case "gpu":
          return <GPU />;
        case "case":
          return <Case />;
        case "psu":
          return <PSU />;
        case "ram":
          return <RAM />;
        case "motherboard":
          return <Motherboard />;
        case "cooling":
          return <Cooling />;
        case "ssd":
          return <SSD />;
        case "hdd":
          return <HDD />;
        default:
          return <Error statusCode={404} title="Page Not Found" />;
      }
    } else {
      return <HomeComponents />
    }
  }

  return (
    <>
        {displayComponent()}
    </>
  )
}

export default ComponentsPage