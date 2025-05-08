import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type DropdownMenuProps = {
  title: string;
  items: {
    icon: any;
    item: string;
    description: string;
  }[]; // Array of objects instead of strings
  className?: string; // Optional className for additional styling
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  items,
  className = "",
}) => {
  const maxColumns = 8;
  const columnCount = Math.min(Math.ceil(items.length/6), maxColumns);

  const columns = Array.from({ length: columnCount }, (_, i) =>
    items.slice(i * 6, i * 6 + 6)
  );


  return (
    <div
      className={`absolute min-w-60 max-w-screen bg-white shadow-lg rounded-md mt-2 p-3 ${className}`}
    >
      <div className={`flex`}>
        {/* Render columns side by side */}
        {columns.map((column, index) => (
          <div
            key={index}
            className={`flex flex-col px-2 flex-1 w-full ${
              index > 0 ? "border-l border-gray-400 pl-4" : ""
            }`} // Add a vertical line between columns (except the first column)
          >
            {column.map((item, i) => (
              <div
                key={i}
                className="group flex py-2 text-gray-600 hover:text-blue-500 rounded-sm cursor-pointer items-center"
              >
                <FontAwesomeIcon icon={item.icon} className="w-10 h-8 mr-2 text-2xl" />
                <div className="flex flex-col">
                  <span className="font-semibold text-[14px]">{item.item}</span>
                  {/* Item name */}
                  <span className="text-[12px] text-gray-500 group-hover:text-blue-500">
                    {item.description}
                  </span>
                  {/* Item description */}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;

// <div className="flex mb-1 bg-white text-bold text-black items-center justify-start"> {title} </div>
//         {items.map((item, index) => (
//           <li
//             key={index}
//             className="group flex py-2 w-auto text-gray-600 hover:text-blue-500 rounded-sm cursor-pointer items-center"
//           >
//             <FontAwesomeIcon icon={item.icon} className="w-6 h-6 mr-2" />
//             <div className="flex flex-col w-auto">
//               <span className="w-auto font-semibold text--[16px]">{item.item}</span>{" "}
//               {/* Item name */}
//               <span
//                 className="w-auto text-[12px] text-gray-500 group-hover:text-blue-500"
//               >
//                 {item.description}
//               </span>{" "}
//               {/* Item description */}
//             </div>
//           </li>
//         ))}
