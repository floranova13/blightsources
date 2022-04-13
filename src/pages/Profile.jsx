/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid';

const Profile = ({ user }) => {
  return (
    <div className='bg-indigo-900 bg-opacity-5 shadow text-white overflow-hidden sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium'>Merchant Information</h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-300'>
          Personal details and resources.
        </p>
      </div>
      <div className='border-t border-gray-900 px-4 py-5 sm:p-0'>
        <dl className='sm:divide-y sm:divide-gray-200'>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium'>Name</dt>
            <dd className='mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2'>
              {user.name}
            </dd>
          </div>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium'>Classification</dt>
            <dd className='mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2'>
              {user.rank}
            </dd>
          </div>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium'>Wealth</dt>
            <dd className='mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2'>
              {`${user.coins} coin${user.coins !== 1 && 's'}`}
            </dd>
          </div>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium'>About</dt>
            <dd className='mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2'>
              {user.about}
            </dd>
          </div>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium'>Attachments</dt>
            <dd className='mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2'>
              <ul
                role='list'
                className='border border-gray-900 rounded-md divide-y divide-gray-900'
              >
                <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                  <div className='w-0 flex-1 flex items-center'>
                    <PaperClipIcon
                      className='flex-shrink-0 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-2 flex-1 w-0 truncate'>
                      resume_back_end_developer.pdf
                    </span>
                  </div>
                  <div className='ml-4 flex-shrink-0'>
                    <a
                      href='#'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                  <div className='w-0 flex-1 flex items-center'>
                    <PaperClipIcon
                      className='flex-shrink-0 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-2 flex-1 w-0 truncate'>
                      coverletter_back_end_developer.pdf
                    </span>
                  </div>
                  <div className='ml-4 flex-shrink-0'>
                    <a
                      href='#'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Profile;
