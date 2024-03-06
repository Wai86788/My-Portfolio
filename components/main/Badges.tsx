import React from "react";

import BadgesCard from "../sub/BadgesCard";

const Badges = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-5"
      id="badges"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 ">
        BADGES
       
      </h1>
      <div className="h-20px w-50px flex flex-row md:flex-row gap-10 px-4 py-2 border-radius-5">
        <BadgesCard
          src="/badge 3.png.png"
          title=""
          description=""
        />
        <BadgesCard
          src="/badge 4.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <BadgesCard
          src="/badge 5.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
         <BadgesCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
         <BadgesCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <div className="h-20px w-50px flex flex-row md:flex-row gap-10 px-4 py-2 border-radius-5 mt-3">
        <BadgesCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <BadgesCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <BadgesCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
         <BadgesCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
         <BadgesCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
     
    </div>
  );
};

export default Badges;