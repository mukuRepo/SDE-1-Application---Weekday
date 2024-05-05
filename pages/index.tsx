import React, { useState, useEffect } from 'react';
import { getSampleJdList } from './api/getSampleJdJSON';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import JobCardProps from '@/components/cards/JobCard';

interface JobListing {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}


const SampleJdList = () => {
  const [jdList, setJdList] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    minExp: null,
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: null,
  });

  useEffect(() => {
    fetchData();
    setOffset(prevOffset => prevOffset + 10);
  }, [offset]);

  const [roles, setRoles] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRoles(event.target.value as string);
  };

  const fetchData = async () => {
    try {
      const requestBody = {
        limit: 10,
        offset: offset 
      };
  
      const data: JobListing[] = await getSampleJdList(requestBody);
      
      const newData = data.filter(newItem => !jdList.some(oldItem => oldItem.jdUid === newItem.jdUid));
  
      setJdList(prevList => [...prevList, ...newData]);
      // mukuRepo
      console.log("Sdsjdskdjskdksjdslkd", jdList);

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };  

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop  ===
        document.documentElement.offsetHeight
      ) {
                
        fetchData();
        setOffset(prevOffset => prevOffset + 10);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      // mukuRepo
      return () => window.removeEventListener("scroll", handleScroll);
    }, [offset, filters]);

    const filteredJdList = jdList.filter(jd => {
      return (
        (filters.minExp === null || jd.minExp !== null && jd.minExp <= filters.minExp) &&
        (filters.companyName === '' || jd.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) &&
        (filters.location === '' || jd.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.remote === '' || jd.location.toLowerCase() === filters.remote.toLowerCase()) &&
        (filters.techStack === '' || jd.jobRole.toLowerCase().includes(filters.techStack.toLowerCase())) && 
        (filters.role === '' || jd.jobRole.toLowerCase().includes(filters.role.toLowerCase())) &&
        (filters.minBasePay === null || jd.minJdSalary !== null && jd.minJdSalary >= filters.minBasePay)
      // mukuRepo
      );
    });

  return (
    <div>
      <div className='flex flex-col w-full gap-2 p-5 sm:flex-row'>
          <Box className="w-full">
            <TextField
              id="min-exp"
              label="Min Experience"
              type="number"
              // mukuRepo
              value={filters.minExp === null ? '' : filters.minExp} // Adjusted logic
              onChange={(e) => setFilters({ ...filters, minExp: e.target.value === '' ? -9999999999999 : parseInt(e.target.value) })}
            />
          </Box>
          <Box className="w-full">
            <TextField
              id="company-name"
              label="Company Name"
              value={filters.companyName}
              onChange={(e) => setFilters({ ...filters, companyName: e.target.value })}
            />
          </Box>
          <Box className="w-full">
            <TextField
              id="location"
              label="Location"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </Box>
          <Box className="w-full">
            <TextField
              id="tech-stack"
              label="Tech Stack"
              value={filters.techStack}
              // mukuRepo
              onChange={(e) => setFilters({ ...filters, techStack: e.target.value })}
            />
          </Box>
          <Box className="w-full">
            <FormControl fullWidth>
              <InputLabel id="remote-label">Remote/On-site</InputLabel>
              <Select
                labelId="remote-label"
                id="remote-select"
                value={filters.remote}
                onChange={(e) => setFilters({ ...filters, remote: e.target.value as string })}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="remote">Remote</MenuItem>
                <MenuItem value="on-site">On-site</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="w-full">
            <TextField
              id="role"
              label="Role"
              value={filters.role}
              onChange={(e) => setFilters({ ...filters, role: e.target.value })}
            />
          </Box>
          <Box className="w-full">
            <TextField
              id="min-base-pay"
              label="Min Base Pay Salary"
              type="number"
              value={filters.minBasePay === null ? '' : filters.minBasePay} // Adjusted logic
              onChange={(e) => setFilters({ ...filters, minBasePay: e.target.value === '' ? -99999999999 : parseInt(e.target.value) })}
            />
          </Box>

      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='flex flex-wrap w-full'>
          {filteredJdList.map((jd:any, index) => (
            <li key={index} className='w-full sm:w-1/3'>
              {/* mukuRepo/ */}
              <JobCardProps data={jd} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
// mukuRepo
export default SampleJdList;
