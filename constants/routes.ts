import SmartHomeIcon from '../public/smart-home.png';
import SquaresFilledIcon from '../public/squares-filled.png'
import DevicesIcon from '../public/devices.png';
import MembersIcon from '../public/users.png'
import StatisticsIcon from '../public/chart-dots-2.png'

export const routes  = [
  {
    route: '/',
    label: 'spaces',
    iconIMG: SmartHomeIcon
  }, 
  {
    route: '/rooms',
    label: 'rooms',
    iconIMG: SquaresFilledIcon
  },
  {
    route: '/devices',
    label: 'devices',
    iconIMG: DevicesIcon
  },
  {
    route: '/members',
    label: 'members',
    iconIMG: MembersIcon
  },
  {
    route: '/statistics',
    label: 'statistics',
    iconIMG: StatisticsIcon
  },
]

// { route: string, label: string, iconIMG: string }