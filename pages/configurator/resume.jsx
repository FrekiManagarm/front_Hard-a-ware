import React, { useContext } from 'react'
import { ConfigurationContext } from '../../context/ConfigurationProvider'

const ConfigResume = () => {

  const { config } = useContext(ConfigurationContext)
  console.log(config, 'config resume')

  return (
    <div>
        
    </div>
  )
}

export default ConfigResume