import { SegmentedControl } from '@mantine/core';
import React, { useState } from 'react';
import useCRUDComponentsStyles from './CRUDComponents.style'
import CPUList from '../CRUDComponents/CPU/CPUList';
import GPUList from '../CRUDComponents/GPU/GPUList';
import RAMList from '../CRUDComponents/RAM/RAMList';
import PSUList from '../CRUDComponents/PSU/PSUList';
import HDDList from '../CRUDComponents/HDD/HDDList';
import SSDList from '../CRUDComponents/SSD/SSDList';
import CoolingList from '../CRUDComponents/Cooling/CoolingList';
import CaseList from '../CRUDComponents/Case/CaseList';
import MBList from '../CRUDComponents/MB/MBList';
import Error from 'next/error';

const CRUDComponents = () => {

    const { classes } = useCRUDComponentsStyles();
    const [value, setValue] = useState(1);

    const displayComponent = () => {
        if (value) {
            switch (value) {
              case 1:
               return <CPUList />
              case 2:
                return <GPUList />
              case 3:
                return <RAMList />
              case 4:
                return <PSUList />
              case 5:
                return <HDDList />
              case 6:
                return <SSDList />
              case 7:
                return <CoolingList />
              case 8:
                return <CaseList />
              case 9:
                return <MBList />
              default:
                return <Error statusCode={404} title="Non trouvé" />;
            }
          }
    }

  return (
    <div className={classes.wrapper}>
        <h3>Liste des composants</h3>
        <SegmentedControl 
          value={value}
          radius="xl"
          className={classes.styleTab}
          onChange={setValue}
          data={[
            {label: "CPU", value: 1},
            {label: "GPU", value: 2},
            {label: "RAM", value: 3},
            {label: "PSU", value: 4},
            {label: "HDD", value: 5},
            {label: "SSD", value: 6},
            {label: "Refroidissement", value: 7},
            {label: "Boitier", value: 8},
            {label: "Carte Mère", value: 9}
          ]}
        />
        {displayComponent()}
    </div>
  )
}

export default CRUDComponents