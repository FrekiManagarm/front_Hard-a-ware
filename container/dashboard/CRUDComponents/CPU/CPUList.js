import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react'
import GetAPIData from '../../../../helpers/get_api_data';
import { useFetchSwr } from '../../../../hooks/useFetchSwr';

const CPUList = () => {

  const mounted = useRef();

  const { data } = useFetchSwr(`${process.env.SERVER_API}/api/CPUs`);
  console.log(data, 'data api')

  return (
    <div ref={mounted} >CPUList</div>
  )
}

export default CPUList