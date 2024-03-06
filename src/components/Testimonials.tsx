import Image from "next/image"

export default function Testimonial() {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg flex items-center space-x-6">
        <div className="flex-shrink-0">
          <Image
            alt="Testimonial"
            className="h-48 w-48 rounded-lg object-cover"
            height="200"
            src="/thumbnail.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
        </div>
        <div>
          <QuoteIcon className="text-gray-300 text-6xl" />
          <p className="text-gray-800 text-lg mt-2">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc.
            Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.
          </p>
          <p className="font-semibold text-gray-900 mt-4">Judith Black</p>
          <p className="text-gray-600">CEO of Workcation</p>
        </div>
      </div>
    )
  }
  
  function QuoteIcon(props:any) {
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
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>
    )
  }
  