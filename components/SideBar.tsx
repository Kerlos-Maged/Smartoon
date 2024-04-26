'use client'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/Group 4.png';
import SettingsIcon from '../public/settings.png'
import { routes } from '../constants/routes';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import logout from '../public/logout.png';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const SideBar = () => {
  const path = usePathname();

  return (
    <section className='flex flex-col w-[276px] bg-dark-1 py-1 px-3 h-screen items-center max-md:hidden  '>
      <div className="py-6 border-b-gray-font border-b-[1px]">
        <Image src={Logo} alt='Logo Smartoon'/>
      </div>
      <nav className="flex flex-col gap-6 px-2 w-full py-10 border-b-gray-font border-b-[1px]">
        {
          routes.map((e) => {
            const isActive = (path === e.route ? true : false);
            return (
              <Link href={e.route} key={e.label} className={cn('flex gap-2 justify-start items-center w-full  p-1 py-2 rounded-[14px]', {
                'bg-gray-2': isActive,
              })}>
                <Image src={ e.iconIMG } alt={e.label} width={30} height={30}/>
                <p className="text-gray-font capitalize font-bold"> { e.label }</p>
              </Link>
            )
          })
        }
      </nav>
      <div className="flex py-4 flex-col justify-between h-full w-full px-3">
        <Link href={'profile'} className={cn('flex gap-2 justify-start items-center w-full  p-2 rounded-[14px]')}>
          <Image src={SettingsIcon} alt={'Icon'} width={30} height={30}/>
          <p className="text-gray-font capitalize font-bold">Profile & Settings</p>
        </Link>
        <AlertDialog>
          <AlertDialogTrigger className='flex gap-2 justify-start items-center w-full p-2 text-center'>      
            <Image src={logout} alt={'Icon'} width={30} height={30}/>
            <p className="text-gray-font capitalize font-bold">Log out</p>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-dark-1 outline-none border-[1px] border-main-1 text-main-1"> 
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure ?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className='hover:bg-main-1 bg-main-1'>Log out</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  )
}

export default SideBar
