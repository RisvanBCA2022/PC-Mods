
import { Button } from "@/components/ui/button"

export default function PartsSelection() {
  return (
    <div className="flex max-w-6xl mx-auto my-8 flex-col lg:flex-row">
      <div className="flex flex-col w-full space-y-4">
        
        <div className="flex items-center justify-between p-6 border rounded">
            
          <div className="flex items-center space-x-2">
            <CpuIcon className="h-6 w-6" />
            <span>Select Processor</span>
          </div>
          <Button className="bg-indigo-600 text-white">+</Button>
        </div>
        <div className="flex items-center justify-between p-6 border rounded">
          <div className="flex items-center space-x-2">
            <CircuitBoardIcon className="h-6 w-6" />
            <span>Select Motherboard</span>
          </div>
          <Button className="bg-indigo-600 text-white">+</Button>
        </div>
        <div className="flex items-center justify-between p-6 border rounded">
          <div className="flex items-center space-x-2">
            <RocketIcon className="h-6 w-6" />
            <span>Select RAM</span>
          </div>
          <Button className="bg-indigo-600 text-white">+</Button>
        </div>
        <div className="flex items-center justify-between p-6 border rounded">
          <div className="flex items-center space-x-2">
            <HardDriveIcon className="h-6 w-6" />
            <span>Select Storage 1</span>
          </div>
          <Button className="bg-indigo-600 text-white">+</Button>
        </div>
        <div className="flex items-center justify-between p-6 border rounded">
          <div className="flex items-center space-x-2">
            <HardDriveIcon className="h-6 w-6" />
            <span>Select Storage 2</span>
          </div>
          <Button className="bg-indigo-600 text-white">+</Button>
        </div>
      </div>
      <div className="flex flex-col w-64 ml-8 space-y-4 mt-5 lg:mt-0">
        <div className="flex flex-col items-center justify-center p-6 border rounded">
          <span className="mb-4 text-xl font-semibold">Total:</span>
          <span className="text-2xl font-bold">₹0.00</span>
        </div>
        <Button className="bg-indigo-600 text-white">Add to cart</Button>
        <Button className="bg-black text-white">Remove all</Button>
        <div className="flex justify-center space-x-2">
          <ChevronLeftIcon className="h-6 w-6" />
          <PrinterIcon className="h-6 w-6" />
          <SaveIcon className="h-6 w-6" />
          <ShareIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function CircuitBoardIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>
  )
}


function CpuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function HardDriveIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="12" y2="12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <line x1="6" x2="6.01" y1="16" y2="16" />
      <line x1="10" x2="10.01" y1="16" y2="16" />
    </svg>
  )
}


function PrinterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect width="12" height="8" x="6" y="14" />
    </svg>
  )
}


function RocketIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function SaveIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  )
}


function ShareIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}
