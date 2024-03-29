import React from "react";
import Image from "next/image";
import Gray from "../../../public/png/gray.png";

function SecondMechanical() {
  return (
    <>
      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
      Our services include:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] container mx-auto mt-4">
        <div className="col-span-2 mb-3">
          <li className="text-[22px] font-poppins font-normal mt-1">
            Bid Estimates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Assistance on smartly filing bids
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
           Project Lead Generation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Subcontractors Marketing
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Precise material & labor takeoffs for procurement
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Change Order Management
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Cold Eye Review
          </li>
        
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Gray} />
        </div>
      </div>
    </>
  );
}

export default SecondMechanical;
