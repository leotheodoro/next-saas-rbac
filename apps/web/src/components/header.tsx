import Image from 'next/image'

import robinIcon from '@/assets/robin-icon.svg'

import { ProfileButton } from './profile-button'

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={robinIcon} className="size-6 dark:invert" alt="Robin" />
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </header>
  )
}
