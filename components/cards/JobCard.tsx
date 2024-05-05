import React, { useState } from 'react';
import { CgSandClock } from "react-icons/cg";
import { AiOutlineCheck } from "react-icons/ai";
import { IoHourglassOutline } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";

interface JobCardProps {
  data: {
    companyName: string;
    jobRole: string;
    location: string;
    // mukuRepo
    jobDetailsFromCompany: string;
    logoUrl: string;
    minJdSalary: number;
    maxJdSalary: number;
    salaryCurrencyCode: string;
    minExp: number;
    // mukuRepo
    maxExp: number;
    postedDate: number;
    jdLink: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ data }) => {
  
const [showFullDetails, setShowFullDetails] = useState(false);

const toggleDetails = () => {
  setShowFullDetails(!showFullDetails);
  // mukuRepo
};
  // console.log("Data", data);
  return (
    <div className="p-10 m-5 bg-white border border-gray-300 rounded-lg shadow-md">
      <div className='p-2 mb-2 bg-white border border-gray-300 w-max rounded-3xl'>
      <p className="flex flex-row items-center justify-center text-sm text-black text-start">
      <div className='text-black rounded-[2px]'>
        <IoHourglassOutline className='w-5 h-5 text-[#917A64]' /></div> Posted {data.postedDate} days ago</p>
      </div>
      <div className="flex flex-row justify-start gap-2">
        <img src={data.logoUrl} alt={data.companyName} className="items-center justify-center w-20 h-30" />
        <div className="flex flex-col items-start justify-center">
          <h2 className="items-center mb-2 text-xl font-bold text-center text-gray-500">{data.companyName}</h2>
          <p className="mb-2 text-center text-gray-700">{data.jobRole}</p>
          
          <p className="mb-1 text-center text-gray-500">{data.location}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="flex flex-row items-center justify-center gap-1 mt-1 mb-2 text-gray-700">
        Estimated Salary: ${data.minJdSalary ? data.minJdSalary : '0'} - ${data.maxJdSalary} ${data.salaryCurrencyCode} 
          <div className='bg-green-400 rounded-[2px]'>
            <AiOutlineCheck  className='font-bold text-white'/>
          </div>
          
        </p>
      </div>
      <div>
        <h1 className='font-semibold text-[20px]'>About Company:</h1>
        <h3 className='font-bold'>About us</h3>
      </div>
      {showFullDetails ? (
        <p className="text-gray-700 ">{data.jobDetailsFromCompany}</p>
      ) : (
        <p className="text-gray-700 mb-[-13px]">{data.jobDetailsFromCompany.substring(0, 300)}...</p>
        
      )}
      {data.jobDetailsFromCompany.length > 300 && (
        <button className="w-full text-center text-blue-500 bg-white bg-opacity-50 hover:underline" onClick={toggleDetails}>
          {showFullDetails ? 'View less' : 'View more'}
        </button>
      )}
      <div className="flex flex-col justify-between mt-4">
        <div className="text-gray-400 text-[16px] font-semibold ">Minimum Experience</div>
        <div>{data.minExp  ? data.minExp : '0'} years</div>
        {/* <a href={data.jdLink} className="block text-center text-blue-500 hover:underline">
          View Job
        </a> */}
        <a href={data.jdLink} className='bg-[#54EFC3] flex flex-row gap-2 p-3 justify-center items-center rounded-lg text-center mt-2 font-semibold text-[18px]'>
        <BsLightningChargeFill  className='text-yellow-500'/>
        
          Easy Apply
        </a>
        <a href={data.jdLink} className='bg-[#4943DA] text-white flex flex-row gap-2 p-3 justify-center items-center rounded-lg text-center mt-2 text-[18px]'>
        <img src='pic.png' className='w-auto h-8' />

          Unlock Referal Ask
        </a>
      </div>
      {/* Additional elements if needed */}
      {/* <div className="flex justify-between mt-2">
        <span className="text-sm text-blue-500">Easy Apply</span>
        // mukuRepo
        <span className="text-sm text-gray-500">Unlock referral asks</span>
      </div> */}
    </div>
  );
};

export default JobCard;
