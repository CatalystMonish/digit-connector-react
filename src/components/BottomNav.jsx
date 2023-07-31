import React from 'react';
import { HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/solid';
import BottomNavButton from './BottomNavButton';

function BottomNav() {
  return (
    <div className="btm-nav">
      <BottomNavButton icon={<HomeIcon className="h-5 w-5" />} active={true} />
      <BottomNavButton icon={<MagnifyingGlassIcon className="h-5 w-5" />} active={false} />
      <BottomNavButton icon={<UserIcon className="h-5 w-5" />} active={false} />
    </div>
  );
}

export default BottomNav;
