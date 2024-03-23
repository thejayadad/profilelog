import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import {FiPlus} from "react-icons/fi"


const CreateProfile = () => {

  return (
    <Link
    href={'/new'}
    >
        <Button
    color="primary" variant="bordered" startContent={<FiPlus/>}
    >
        Create Profile
    </Button>
    </Link>
  )
}

export default CreateProfile