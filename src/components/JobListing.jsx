import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { CalendarIcon } from '@heroicons/react/24/solid';
import { ComputerDesktopIcon } from '@heroicons/react/24/solid';
import { CurrencyRupeeIcon } from '@heroicons/react/24/solid';

function JobListing({ title, jobType, location, remote, date, salary, companyLogo, companyName }) {
  return (
    <div className='font-Poppins p-1 rounded-xl bg-white my-2'>

      <div className='m-5'>
        <h1 className='text-lg text-left font-medium'>{title}</h1>

        <div className='flex items-center mt-2'>
          <BriefcaseIcon className='h-5 w-5 text-icon-red-light' />
          <p className='text-sm ml-1 text-text-light'>{jobType}</p>
        </div>

        <div className='flex items-center mt-2'>
          <MapPinIcon className='h-5 w-5 text-icon-blue-light' />
          <p className='text-sm ml-1 text-text-light'>{location}</p>
        </div>

        <div className='flex items-center mt-2'>
          <ComputerDesktopIcon className='h-5 w-5 text-icon-orange-light' />
          <p className='text-sm ml-1 text-text-light'>{remote ? 'Remote' : 'Office-based'}</p>
        </div>

        <div className='flex items-center mt-2'>
          <CalendarIcon className='h-5 w-5 text-icon-light' />
          <p className='text-sm ml-1 text-text-light'>{date}</p>
        </div>

        <div className="divider"></div>

        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <CurrencyRupeeIcon className='h-5 w-5 text-icon-light' />
            <p className='text-md ml-1 text-text-light'>{salary}</p>
          </div>

          <div className='flex items-center'>
            <img
              className="h-6 w-6 object-cover rounded-full"
              src={companyLogo}
              alt="Company Logo"
            />
            <p className='text-md ml-2 text-text-light'>{companyName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobListing;
