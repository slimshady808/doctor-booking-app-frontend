import React, { useState } from 'react';
import { blockUser } from '../../Services/AdminService';
import { toast } from 'react-hot-toast';

export const BlockModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBlocked, setIsBlocked] = useState(props.is_active); // Initialize with the current user status
  const { user_id } = props;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBlockUser = async () => {
    const response = await blockUser(user_id);
    if (response) {
      setIsBlocked(!isBlocked); // Toggle the status locally
      toast.success(`User ${isBlocked ? 'unblocked' : 'blocked'}`);
    } else {
      toast.error('Try again later');
    }
    closeModal(); // Close the modal after performing the action
  };

  return (
    <>
      <button onClick={openModal} type="button">
        {isBlocked ? 'Unblock' : 'Block'}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-md w-full md:w-96">
            <button
              onClick={closeModal}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              data-modal-hide="popup-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold mb-4">
                {isBlocked ? 'Unblock' : 'Block'} Confirmation
              </h2>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                Are you sure you want to {isBlocked ? 'unblock' : 'block'} this user with ID: {user_id}?
              </p>
              <div className="flex justify-center">
                <button
                  onClick={handleBlockUser}
                  type="button"
                  className={`${
                    isBlocked
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-red-600 hover:bg-red-700'
                  } text-white font-semibold py-2 px-4 rounded-lg mr-4`}
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};




// import React, { useState } from 'react';
// import { blockUser } from '../../Services/AdminService';
// import { toast } from 'react-hot-toast';

// export const BlockModal = (props) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [is_block,setIs_Block]=useState(null)
//   const { user_id, is_active } = props;

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     console.log(is_active);
//   };

//   const handleBlockUser = async () => {
//     const response = await blockUser(user_id);
//     if (response) {
    
//       toast.success(`User ${is_active ? 'blocked' : 'unblocked'}`);
//       setIs_Block(!is_active);
//     } else {
//       toast.error('Try again later');
//     }
//     closeModal(); // Close the modal after performing the action
//   };

//   return (
//     <>
//      <button onClick={openModal} type="button">
//         {is_block !== null ? (is_block ? 'Unblock' : 'Block') : is_active ? 'Block' : 'Unblock'} {user_id}
//       </button>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-md w-full md:w-96">
//             <button
//               onClick={closeModal}
//               type="button"
//               className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
//               data-modal-hide="popup-modal"
//             >
//               <svg
//                 className="w-3 h-3"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                 />
//               </svg>
//               <span className="sr-only">Close modal</span>
//             </button>
//             <div className="p-6 text-center">
//               <h2 className="text-xl font-semibold mb-4">
//                 {is_active ? 'Block' : 'Unblock'} Confirmation
//               </h2>
//               <p className="text-gray-700 dark:text-gray-400 mb-6">
//                 Are you sure you want to {is_active ? 'block' : 'unblock'} this user with ID: {user_id}?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={handleBlockUser}
//                   type="button"
//                   className={`${
//                     is_active
//                       ? 'bg-red-600 hover:bg-red-700'
//                       : 'bg-green-600 hover:bg-green-700'
//                   } text-white font-semibold py-2 px-4 rounded-lg mr-4`}
//                 >
//                   Yes, I'm sure
//                 </button>
//                 <button
//                   onClick={closeModal}
//                   type="button"
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
//                 >
//                   No, cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };




