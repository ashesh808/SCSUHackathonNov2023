"use client"

import YouTubeIcon from '@mui/icons-material/YouTube';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DataObjectIcon from '@mui/icons-material/DataObject';

import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';
import Box from './Box';
import SideBarItem from './SideBarItem';

const SideBar = ({children}) => {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
        {
            icon: PictureAsPdfIcon,
            label: "PDF",
            active: pathname === "/uploadPDF",
            href: "/uploadPDF",
        },
        {
            icon: YouTubeIcon,
            label: "Youtube",
            active: pathname === "/uploadYoutube",
            href: "/uploadYoutube",
        },
        {
            icon: DataObjectIcon,
            label: "JSON",
            active: pathname === "/uploadJSON",
            href: "/uploadJSON",
        }
    ]
  )
  
    return (
    <div className="flex h-full">
       <div className="hidden md:flex overflow-y-auto flex-col gap-y-2 bg-white h-full w-[300px] p-2">
            <Box className="overflow-y-auto h-full">
                <div className="flex flex-col gap-y-4 px-5 py-5">
                    {routes.map((item) => (
                        <SideBarItem key={item.label} {...item}/>
                    ))}
                </div>
            </Box>
        </div>
        <main>{children}</main>
    </div>
  )
}

export default SideBar