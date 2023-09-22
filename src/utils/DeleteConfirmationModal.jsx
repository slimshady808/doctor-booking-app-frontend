import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for the modal

export const DeleteConfirmationModal = ({ isOpen, onRequestClose, onConfirmDelete }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="w-1/3 p-4 rounded-lg bg-white shadow-md"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
        <p className="text-gray-700 mb-4">Are you sure you want to delete this qualification?</p>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 mr-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onConfirmDelete}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};



// import React from 'react';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // Set the root element for the modal

// export const DeleteConfirmationModal = ({ isOpen, onRequestClose, onConfirmDelete }) => {
//   return (
//     <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
//       <h2>Confirm Deletion</h2>
//       <p>Are you sure you want to delete this qualification?</p>
//       <button onClick={onRequestClose}>Cancel</button>
//       <button onClick={onConfirmDelete}>Confirm</button>
//     </Modal>
//   );
// };
