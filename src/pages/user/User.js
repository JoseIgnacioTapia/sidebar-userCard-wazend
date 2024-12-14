// 'use client';

// import { useState } from 'react';
// import { ExternalLink } from 'lucide-react';

// export default function User() {
//   const [activeTab, setActiveTab] = useState('account');

//   const user = {
//     name: 'Ronald Rangel',
//     username: 'gamersx8',
//     email: 'ronald@rangel.pro',
//     initials: 'RR',
//   };

//   return (
//     <div className='w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm'>
//       {/* Tabs */}
//       <div className='border-b'>
//         <div className='flex gap-8 justify-center'>
//           <button
//             onClick={() => setActiveTab('account')}
//             className={`pb-4 px-1 ${
//               activeTab === 'account'
//                 ? 'border-b-2 border-emerald-600 text-emerald-600 font-medium'
//                 : 'text-gray-500'
//             }`}
//           >
//             Account
//           </button>
//           <button
//             onClick={() => setActiveTab('notifications')}
//             className={`pb-4 px-1 ${
//               activeTab === 'notifications'
//                 ? 'border-b-2 border-emerald-600 text-emerald-600 font-medium'
//                 : 'text-gray-500'
//             }`}
//           >
//             Notifications
//           </button>
//         </div>
//       </div>

//       {/* Profile Content */}
//       <div className='py-8 flex flex-col items-center'>
//         {/* Avatar */}
//         <div className='w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mb-4'>
//           <span className='text-white text-2xl font-medium'>
//             {user.initials}
//           </span>
//         </div>

//         {/* Name */}
//         <h1 className='text-2xl font-semibold text-slate-700 mb-2'>
//           {user.name}
//         </h1>

//         {/* No websites message */}
//         <p className='text-gray-500 text-sm mb-8'>No websites yet</p>

//         {/* User Details */}
//         <div className='w-full space-y-6'>
//           {/* Username Field */}
//           <div className='flex flex-col'>
//             <label className='text-sm font-medium text-gray-700 mb-1'>
//               Username
//             </label>
//             <input
//               type='text'
//               value={user.username}
//               readOnly
//               className='bg-gray-50 px-3 py-2 rounded-md text-gray-700'
//             />
//           </div>

//           {/* Email Field */}
//           <div className='flex flex-col'>
//             <label className='text-sm font-medium text-gray-700 mb-1'>
//               Email
//             </label>
//             <div className='flex items-center gap-4'>
//               <input
//                 type='email'
//                 value={user.email}
//                 readOnly
//                 className='flex-1 bg-gray-50 px-3 py-2 rounded-md text-gray-700'
//               />
//               <a
//                 href='#'
//                 className='flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700'
//               >
//                 Edit on Namecheap
//                 <ExternalLink className='w-4 h-4' />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function User() {
  const [activeTab, setActiveTab] = useState('account');

  const user = {
    name: 'Ronald Rangel',
    username: 'gamersx8',
    email: 'ronald@rangel.pro',
    initials: 'RR',
    // imageUrl: 'https://via.placeholder.com/150', // Agrega la URL de la foto del usuario aquí
  };

  return (
    <div className='w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm'>
      {/* Tabs */}
      <div className='border-b'>
        <div className='flex gap-8 justify-center'>
          <button
            onClick={() => setActiveTab('account')}
            className={`pb-4 px-1 ${
              activeTab === 'account'
                ? 'border-b-2 border-emerald-600 text-emerald-600 font-medium'
                : 'text-gray-500'
            }`}
          >
            Account
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`pb-4 px-1 ${
              activeTab === 'notifications'
                ? 'border-b-2 border-emerald-600 text-emerald-600 font-medium'
                : 'text-gray-500'
            }`}
          >
            Notifications
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className='py-8 flex flex-col items-center'>
        {/* Avatar */}
        <div className='w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4'>
          {user.imageUrl ? (
            <img
              src={user.imageUrl}
              alt={user.name}
              className='w-full h-full rounded-full object-cover'
            />
          ) : (
            <span className='text-white text-2xl font-medium'>
              {user.initials}
            </span>
          )}
        </div>

        {/* Name */}
        <h1 className='text-2xl font-semibold text-slate-700 mb-2'>
          {user.name}
        </h1>

        {/* No websites message */}
        <p className='text-gray-400 text-sm mb-8'>No websites yet</p>

        {/* User Details */}
        <div className='w-full space-y-6'>
          {/* Username Field */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium text-gray-700 mb-1'>
              Username
            </label>
            <input
              type='text'
              value={user.username}
              readOnly
              className='bg-gray-50 px-3 py-2 rounded-md text-gray-700'
            />
          </div>

          {/* Email Field */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium text-gray-700 mb-1'>
              Email
            </label>
            <div className='flex items-center gap-4'>
              <input
                type='email'
                value={user.email}
                readOnly
                className='flex-1 bg-gray-50 px-3 py-2 rounded-md text-gray-700'
              />
              <a
                href='#'
                className='flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700'
              >
                Edit on Namecheap
                <ExternalLink className='w-4 h-4' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
