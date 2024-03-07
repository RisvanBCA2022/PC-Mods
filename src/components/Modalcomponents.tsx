'use client'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const Modalcomponents = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
    useEffect(() => {
        const handleKeyDown = (event:KeyboardEvent) => {
          if (event.key === 'Escape') {
            closeModal();
          }
        };
  
        document.addEventListener('keydown', handleKeyDown);
  
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [isOpen]);
  
  return (
    <div>
          <Button className="bg-indigo-600 text-white" onClick={openModal}>+</Button>
              {isOpen && (  <div
      aria-labelledby="modal-title"
      aria-modal="true"
      className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      role="dialog"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span aria-hidden="true" className="hidden sm:inline-block sm:align-middle sm:h-screen">
          ​
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Select Processor
                </h3>
                <div className="mt-2">
                  <input
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Search for a processor..."
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-col">
            <div className="flex items-center justify-between space-x-4 mb-4">
              <img
                alt="AMD Ryzen 3 3200G"
                className="w-20 h-20 object-cover"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  AMD RYZEN 3 3200G PROCESSOR WITH RADEON RX VEGA 8 GRAPHICS (YD3200C5FHBOX)
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ₹13,500.00 <span className="text-red-500 line-through">₹6,790.00</span>
                </p>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white">Select</Button>
            </div>
            <div className="flex items-center justify-between space-x-4 mb-4">
              <img
                alt="AMD Ryzen 5 3500"
                className="w-20 h-20 object-cover"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  AMD RYZEN 5 3500 PROCESSOR (UPTO 4.1 GHZ / 16 MB CACHE)
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ₹20,000.00 <span className="text-red-500 line-through">₹12,475.00</span>
                </p>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white">Select</Button>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <img
                alt="AMD Ryzen 5 5500"
                className="w-20 h-20 object-cover"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  AMD RYZEN 5 5500 DESKTOP PROCESSOR (UPTO 4.2GHZ 19MB CACHE)
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ₹19,000.00 <span className="text-red-500 line-through">₹9,500.00</span>
                </p>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white">Select</Button>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button onClick={closeModal} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>)}

      
    </div>
  )
}

export default Modalcomponents
