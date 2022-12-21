import React, { useContext } from 'react'
import { ConfigurationContext } from '../../context/ConfigurationProvider'
import GetAPIData from '../../helpers/get_api_data'
import { withData } from '../../helpers/restriction'

const ConfigResume = ({
  pageData,
  query,
  token,
  user
}) => {
  console.log(pageData, 'config resume')

  return (
    <div>
        
    </div>
  )
}

ConfigResume.getInitialProps = async (ctx) => {
  const { user, token } = await withData(ctx);
  const { query } = ctx;

  const apiUrl = [
    {
      endpoint: `${process.env.SERVER_API}/api/config/${query.configId}`,
      name: "config"
    }
  ];

  const responseAPI = await GetAPIData(apiUrl, "fr", token);

  const pageData = responseAPI;

  return { pageData, user, token, query };
}

export default ConfigResume