import JobListing from "../components/JobListing";
import React from "react";
import SearchBox from "../components/SearchBox";
import Logo from "../components/Logo";
import TitleBold from "../components/TitleBold";
import BottomNav from "../components/BottomNav";
import Profile from "./Profile";

function Home() {
  return (
    <div className="bg-light-bg">
      <div className="p-5">
        <Logo />
        <Profile/>
        <SearchBox />

        <TitleBold/>

        <JobListing
          title="Manager - Business Development"
          jobType="Fresher"
          location="Navi Mumbai, Maharashtra"
          remote={true}
          date="00/00/00"
          salary="20,000-30,000"
          companyName="Amazon"
          companyLogo="https://unsplash.it/200/200?random=9"
        />
        <JobListing
          title="Software Engineer"
          jobType="Full-time"
          location="San Francisco, California"
          remote={false}
          date="08/15/23"
          salary="80,000-100,000"
          companyName="Amazon"
          companyLogo="https://unsplash.it/200/200?random=10"
        />

        <JobListing
          title="Product Manager"
          jobType="Experienced"
          location="New York City, New York"
          remote={false}
          date="09/01/23"
          salary="90,000-120,000"
          companyName="Amazon"
          companyLogo="https://unsplash.it/200/200?random=11"
        />
         <JobListing
          title="Manager - Business Development"
          jobType="Fresher"
          location="Navi Mumbai, Maharashtra"
          remote={true}
          date="00/00/00"
          salary="20,000-30,000"
          companyName="Amazon"
          companyLogo="https://unsplash.it/200/200?random=9"
        />
        <BottomNav/>
      </div>
    </div>
  );
}

export default Home;
