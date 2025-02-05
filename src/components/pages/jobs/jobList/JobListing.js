import React, { useState } from 'react';
import JobFilter from './JobFilter';

import search from '../../../../static/logo/search.png';
import home from '../../../../static/logo/home.png';
import calendar from '../../../../static/logo/calendar.png';
import money from '../../../../static/logo/money.png';
import trend from '../../../../static/logo/trend.png';

import location1 from '../../../../static/logo/location.svg'


const JobList = () => {
  const [profile, setProfile] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [workFromHome, setWorkFromHome] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [showOnly3LAPlusJobs, setShowOnly3LAPlusJobs] = useState(false);
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [salary, setSalary] = useState('');
 
  

  const jobDetails = [
    {
      title: 'Senior Automation Tester',
      company: 'EPAM Anywhere',
      location: 'Bangalore',
      duration: '06 Months',
      salary: '8000 ₹ /Month',
      experience: '3+ Years',
      type: 'WORK FROM HOME',
      image: search,
    },
    {
      title: 'Data Scientist',
      company: 'EPAM Anywhere',
      location: 'Bangalore',
      duration: '06 Months',
      salary: '8000 ₹ /Month',
      experience: '3+ Years',
      type: 'Part Time',
      image: search,
    },
    {
      title: 'Data Scientist',
      company: 'EPAM Anywhere',
      location: 'Delhi',
      duration: '06 Months',
      salary: '8000 ₹ /Month',
      experience: '3+ Years',
      type: 'WORK FROM HOME',
      image: search,
    },
    // Add more job details objects as needed
  ];

  const logos = [
    {
      alt: 'Hiring Logo',
      src: trend,
    },
    {
      alt: 'Work from Home Logo',
      src: home,
    },
    {
      alt: 'Stipend Logo',
      src: money,
    },
    {
      alt: 'Duration Logo',
      src: calendar,
    },
    {
      alt: 'Location Logo',
      src: location1,
    },
    // Add more logo objects as needed
  ];

  const filteredJobs = jobDetails.filter((job) => {
    // Apply filtering logic based on the selected filters
    return (
      job.title.toLowerCase().includes(profile.toLowerCase()) &&
      job.company.toLowerCase().includes(name.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      (workFromHome ? job.type.toLowerCase().includes('work from home') : true) &&
      (partTime ? job.type.toLowerCase().includes('part time') : true) &&
      (showOnly3LAPlusJobs ? job.salary.toLowerCase().includes('3 la+') : true) &&
      (yearsOfExperience
        ? job.experience.toLowerCase().includes(yearsOfExperience.toLowerCase())
        : true) &&
      (salary ? job.salary.toLowerCase().includes(salary.toLowerCase()) : true)
    );
  });

  const handleClearAll = () => {
    setProfile('');
    setName('');
    setLocation('');
    setWorkFromHome(false);
    setPartTime(false);
    setShowOnly3LAPlusJobs(false);
    setYearsOfExperience('');
    setSalary('');
    
  };

  

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-left text-xl text-gray-200 font-oxygen">
      <div className="bg-white py-4 text-center"></div>
      <div className="relative bg-lavender flex flex-col md:flex-row items-start md:items-center mx-auto w-10/12 md:w-full max-w-screen-xl h-auto py-4 px-6 md:px-12 md:py-6 text-center rounded-lg">
        
        <div className="w-full md:w-[70%]">
          <h2 className="font-semibold text-4xl mt-12">Jobs</h2>
          <p className="text-2xl">All the jobs will be displayed here</p>
        </div>
      </div>
    <div className="flex flex-col md:flex-row p-8 min-w-[300px] min-h-[600px]">
      
      <JobFilter
        profile={profile}
        name={name}
        workFromHome={workFromHome}
        partTime={partTime}
        location={location}
        showOnly3LAPlusJobs={showOnly3LAPlusJobs}
        yearsOfExperience={yearsOfExperience}
        salary={salary}
        setProfile={setProfile}
        setName={setName}
        setLocation={setLocation}
        setWorkFromHome={setWorkFromHome}
        setPartTime={setPartTime}
        setShowOnly3LAPlusJobs={setShowOnly3LAPlusJobs}
        setYearsOfExperience={setYearsOfExperience}
        setSalary={setSalary}
        handleClearAll={handleClearAll}
      />
      <div className="w-full md:w-3/4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div
              key={index}
              className="relative rounded-lg w-full md:w-[800px] h-[480px] overflow-hidden text-sm border-[1px] border-solid border-darkgray mx-auto md:ml-auto my-4"
            >
              <div
                className={`absolute top-[32px] left-[72px] flex flex-row py-1 px-2 items-center justify-start gap-[10px] ${
                  job.isHiring
                    ? 'text-dimgray-300 border-[1px] border-solid border-deepskyblue-200'
                    : 'text-dimgray-200'
                }`}
              >
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt={logos[0].alt}
                  src={logos[0].src}
                />
                <div className=" relative text-dimgray-300 border-[1px] border-solid  py-1 px-2  border-deepskyblue">Actively hiring</div>
              </div>
              <b className="absolute top-[79px] left-[72px] text-4xl md:text-13xl">
                {job.title}
              </b>
              <b className="absolute top-[130px] left-[50%] -translate-x-1/2 text-lg text-black-200">
                {job.company}
              </b>
              <div className="absolute top-[235px] left-[72px] flex flex-col md:flex-row items-center md:justify-start gap-[8px] text-dimgray-200">
                <div className="flex flex-row items-center gap-[8px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt={logos[4].alt}
                    src={logos[4].src}
                  />
                  <b className="relative">{job.location}</b>
                </div>
                <div className="flex flex-row items-center gap-[8px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt={logos[3].alt}
                    src={logos[3].src}
                  />
                  <b className="relative">{job.duration}</b>
                </div>
                <div className="flex flex-row items-center gap-[8px] md:mt-0 mt-4">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt={logos[2].alt}
                    src={logos[2].src}
                  />
                  <b className="relative">{job.salary}</b>
                </div>
              </div>
              <div className="absolute top-[350px] left-[72px] rounded-sm bg-gainsboro w-[77px] overflow-hidden flex flex-row py-1.5 px-5 box-border items-center justify-between">
                <div className="relative">job</div>
                
              </div>
              <div className="absolute top-[350px] left-[180px] rounded-sm bg-gainsboro w-[77px] overflow-hidden flex flex-row py-1.5 px-5 box-border items-center justify-between">
              <div className="relative">{job.experience}</div>
                </div>
              <div className="absolute top-[181px] left-[72px] rounded flex flex-row p-[5px] items-center justify-start gap-[12px] text-dimgray-200 border-[1px] border-solid border-darkgray">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt={logos[1].alt}
                  src={logos[1].src}
                />
                <b className="relative">{job.type}</b>
              </div>
              <hr className="absolute top-[394px] left-[72px] w-full border-gray-300" />
              <button className="absolute bottom-8 left-8 right-[calc(50% + 140px)] md:top-[394px] md:left-[calc(50% + 140px)] text-xl text-deepskyblue bg-white">
                View details
              </button>
              <button className="absolute bottom-8 right-8 md:top-[394px] md:right-8 bg-deepskyblue h-14 flex flex-row py-4 px-[18px] box-border items-center justify-center text-xl text-white">
                <b className="relative">Apply Now</b>
              </button>
              <img
                className="absolute top-[60px] right-[4%] w-[84px] h-[84px] object-cover"
                alt=""
                src={job.image}
              />
              
            </div>
          ))
        ) : (
          <p>No jobs found matching the filters.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default JobList;
