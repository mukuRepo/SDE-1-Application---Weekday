import React, { useState, useEffect } from 'react';
import { getSampleJdList } from './api/getSampleJdJSON';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import JobCardProps from '@/components/cards/JobCard';

const SampleJdList = () => {
  const [jdList, setJdList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [roles, setRoles] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRoles(event.target.value as string);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestBody = {
          limit: 12,
          offset: 0
        };

        const data = await getSampleJdList(requestBody);
        setJdList(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='flex flex-row w-full gap-2 p-5'>
      <Box className="w-full">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Roles</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={roles}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="w-full">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Number Of Employees</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={roles}
            label="NumberOfEmployees"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="w-full">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Experience</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={roles}
            label="NumberOfEmployees"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="w-full">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Remote</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={roles}
            label="NumberOfEmployees"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="w-full">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Minimum Base Pay Salary</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={roles}
            label="NumberOfEmployees"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="w-full">
        <FormControl fullWidth>
          <TextField id="outlined-basic" label="Search Company Name" variant="outlined" />
        </FormControl>
      </Box>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='flex flex-wrap w-full'>
          {jdList.map((jd:any, index) => (
            <li key={index} className='w-1/3'>

              {/* <a href={jd.jdLink} target="_blank" rel="noopener noreferrer">{jd.jdUid}</a> */}
              <JobCardProps data={jd} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SampleJdList;
