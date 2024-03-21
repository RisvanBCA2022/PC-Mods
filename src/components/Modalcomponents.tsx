"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Axiosinstance } from "@/connection/axiosInstance";
import axios from "axios";
import PaginationControls from './PaginationControl'

const Modalcomponents = () => {
  interface CPU {
    boost_clock: number;
    core_clock: number;
    core_count: number;
    graphics: any; // Adjust the type according to your data structure
    model: string;
    price: number;
    smt: boolean;
    tdp: number;
    __v: number;
    _id: string;
  }
  interface CPUData {
    cpus: CPU[]; // Define the structure of the CPUs array
  }
  

  const [isOpen, setIsOpen] = useState(false);
const [data, setData] = useState<CPU[] | null>(null);
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [loading,setLoading]=useState(true)
  

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://pc-build-api.onrender.com/api/cpu"
      );
      setData(response.data?.cpus);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false)
    }
  
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (!data) {
      fetchData();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);


  // const cpus = data?.cpus;

  // Filter CPUs based on search query
  const filteredCPUs = data?.filter((cpu: any) =>
    cpu.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const paginate = (array: CPU[], page_number: number, page_size: number) => {
    return array?.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const paginatedCPUs = filteredCPUs ? paginate(filteredCPUs, currentPage, itemsPerPage) : [];

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);
  
  const totalPages = Math.ceil((filteredCPUs?.length || 0) / itemsPerPage);
  

  // Calculate paginated CPUs based on current page
  const indexOfLastCPU = currentPage * itemsPerPage;
  const indexOfFirstCPU = indexOfLastCPU - itemsPerPage;
  const paginatedCPU = filteredCPUs?.slice(indexOfFirstCPU, indexOfLastCPU);
  return (
    <div>
      <Button className="bg-indigo-600 text-white" onClick={openModal}>
        +
      </Button>
      {isOpen && (
        <div
          aria-labelledby="modal-title"
          aria-modal="true"
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity overflow-scroll"
          role="dialog"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <span
              aria-hidden="true"
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
            >
              ​
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {loading ? (
                <>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Select Processor
                    </h3>
                    <div className="mt-2">
                      <input
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Search for a processor..."
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
                <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                      <div className="h-2 bg-slate-700 rounded"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                </>
              ) : (
                <>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-title"
                        >
                          Select Processor
                        </h3>
                        <div className="mt-2">
                          <input
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Search for a processor..."
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {paginatedCPUs?.map((cpu: any, i: any) => (
                    <div
                      key={i}
                      className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-col"
                    >
                      <div className="flex items-center justify-between space-x-4 mb-4">
                        {/* CPU image */}
                        
                        <img
                          alt={cpu.model}
                          className="w-20 h-20 object-cover"
                          height="100"
                          src={cpu.model.toLowerCase().includes('amd') ? 'https://assets.cmcmarkets.com/images/amdearningsbakery1.png' : 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/09/newsroom-innovation-13th-gen-intel-core-1-feat.jpg.rendition.intel_.web_.1648.927-920x518.jpg'}

                          style={{
                            aspectRatio: "100/100",
                            objectFit: "cover",
                          }}
                          width="100"
                        />
                        {/* CPU details */}
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {cpu.model}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Boost Clock:{" "}
                            {cpu.boost_clock
                              ? cpu.boost_clock.toFixed(2)
                              : "N/A"}{" "}
                            GHz
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Core Clock:{" "}
                            {cpu.core_clock
                              ? cpu.core_clock.toFixed(2)
                              : "N/A"}{" "}
                            GHz
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Core Count: {cpu.core_count}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Graphics: {cpu.graphics}
                          </p>
                          {cpu.price === null ? (
                            <>null</>
                          ) : (
                            <p className="text-sm text-gray-500 mt-1">
                              Price: ₹{cpu.price.toFixed(2)}
                            </p>
                          )}
                          <p className="text-sm text-gray-500 mt-1">
                            TDP: {cpu.tdp}W
                          </p>
                          
                        </div>
                        {/* Select button */}
                        <Button className="bg-blue-500 hover:bg-indigo-600 text-white">
                          Select
                        </Button>
                      </div>
                    </div>
                  ))}
                    {totalPages > 1 && (
            <PaginationControls
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
                  <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <Button
                      onClick={closeModal}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Close
                    </Button>
                  </div>
                
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modalcomponents;
