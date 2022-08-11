import { Link as NextLink } from '@nextui-org/react'
import React from 'react'
import Link from 'next/link'

const MainMenu = () => {
  return (
    <div>
        <Link>
            <NextLink block color="primary">
                A propos
            </NextLink>
        </Link>
        <Link>
            <NextLink block color="primary">
                Configurateur
            </NextLink>
        </Link>
        <Link>
            <NextLink block color="primary">
                
            </NextLink>
        </Link>
    </div>
  )
}

export default MainMenu