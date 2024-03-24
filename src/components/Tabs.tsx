import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Building2, FolderKanban, Home, User } from "lucide-react";

export default function NavTabs() {
  return (
    <div className='bottom-4 w-full mx-auto z-10'>
      <Tabs defaultValue='home' className='w-full'>
        <div className='max-w-[450px] mx-auto '>
          <TabsList className='grid w-full grid-cols-4 rounded-full px-2 z-10'>
            <TabsTrigger value='home' className='rounded-full'>
              <Home className='h-4 w-4' />
            </TabsTrigger>
            <TabsTrigger value='about' className='rounded-full'>
              <Building2 className='h-4 w-4' />
            </TabsTrigger>
            <TabsTrigger value='projects' className='rounded-full'>
              <FolderKanban className='h-4 w-4' />
            </TabsTrigger>
            <TabsTrigger value='account' className='rounded-full'>
              <User className='h-4 w-4' />
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
}
