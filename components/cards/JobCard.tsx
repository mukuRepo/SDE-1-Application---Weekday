import React, { useState } from 'react';
import { IoHourglassOutline } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";
import { BsLightningChargeFill } from "react-icons/bs";

interface JobCardProps {
  data: {
    companyName: string;
    jobRole: string;
    location: string;
    jobDetailsFromCompany: string;
    logoUrl: string;
    minJdSalary: number;
    maxJdSalary: number;
    salaryCurrencyCode: string;
    minExp: number;
    maxExp: number;
    postedDate: number;
    jdLink: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ data }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  const toggleDetails = () => {
    setShowFullDetails(!showFullDetails);
  };

  return (
    <div className="h-full">
      <div className="h-full p-6 m-4 bg-white border border-gray-300 rounded-lg shadow-md">
        <div className='p-2 mb-2 bg-white border border-gray-300 rounded-3xl'>
          <p className="flex items-center justify-center text-sm text-black text-start">
            <div className='text-black rounded-[2px]'>
              <IoHourglassOutline className='w-5 h-5 text-[#917A64]' />
            </div> 
            Posted {data.postedDate} days ago
          </p>
        </div>
        <div className="flex items-center justify-start gap-4">
        <img src={data.logoUrl} alt={data.companyName} className="w-20 h-20 rounded-full" />
          <div className="flex flex-col items-start justify-center">
            <h2 className="mb-2 text-xl font-bold text-gray-500">{data.companyName}</h2>
            <p className="mb-2 text-gray-700">{data.jobRole}</p>
            <p className="text-gray-500">{data.location}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <p className="flex items-center gap-1 text-gray-700">
            Estimated Salary: {data.minJdSalary ? "$"+data.minJdSalary+"-" : ''} ${data.maxJdSalary} {data.salaryCurrencyCode} 
            <div className='bg-green-400 rounded-[2px]'>
              <AiOutlineCheck className='font-bold text-white'/>
            </div>
          </p>
        </div>
        <div>
          <h1 className='mt-4 text-lg font-semibold'>About Company:</h1>
          <h3 className='font-bold'>About us</h3>
        </div>
        {showFullDetails ? (
          <p className="text-gray-700">{data.jobDetailsFromCompany}</p>
        ) : (
          <p className="text-gray-700 mb-[-13px]">{data.jobDetailsFromCompany.substring(0, 300)}...</p>
        )}
        {data.jobDetailsFromCompany.length > 300 && (
          <button className="w-full text-blue-500 bg-white bg-opacity-50 hover:underline" onClick={toggleDetails}>
            {showFullDetails ? 'View less' : 'View more'}
          </button>
        )}
        <div className="flex flex-col justify-between mt-4">
          {data.minExp && (
            <div className="text-gray-400 text-[16px] font-semibold">Minimum Experience</div>
          )}
          <div>{data.minExp ? `${data.minExp} years` : ''}</div>
          <a href={data.jdLink} className='bg-[#54EFC3] flex gap-2 p-3 justify-center items-center rounded-lg text-center mt-2 font-semibold text-lg'>
            <BsLightningChargeFill className='text-yellow-500'/>
            Easy Apply
          </a>
          <a href={data.jdLink} className='bg-[#4943DA] text-white flex gap-2 p-3 justify-center items-center rounded-lg text-center mt-2 font-semibold text-lg'>
            <img src='pic.png' className='w-auto h-8' />
            Unlock Referral Ask
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
