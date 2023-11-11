import Link from 'next/link'

import { twMerge } from 'tailwind-merge'
import { Typography } from "@mui/material"
import Icon from "@mui/material/Icon"
import NextLink from 'next/link'

import React from 'react'

const SideBarItem = ({icon: Icon, label, active, href}) => {
  
  
  return (
    <NextLink 
        href={href}
        className={twMerge(`flex h-auto font-medium cursor pointer hover:bg-neutral-500 transition text-black py-1`, active && "text-white")}
    >
      <Icon/>
      <Typography>{label}</Typography>
    </NextLink>
  )
}

export default SideBarItem