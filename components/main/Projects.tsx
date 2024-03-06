import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProjectCard
          src="/SIG.png"
          title="SIGNAVIX"
          description="This innovation is my dream not just a project.It includes networking ,ML ,many more tech .Furthermore done with conference paper , patent(going on) , writing research paper"
        />
        
        <ProjectCard
          src="/news.png"
          title="News Updates"
          description="Get daily updates with real time news updates  about politics, sports, IPL and many more domains .Build using HTML,css (design),js for backend (rendering) and newsapi "
        />
        <ProjectCard
          src="/google 2.png"
          title="Google Clone"
          description="A clone of google with frontend and backend .Build using next js , tailwind css , google https request with responsing according to query asked .Moreover it has voice search feature "
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 m-4">
        <ProjectCard
          src="/login.png"
          title="Login also with google"
          description="Login page also including authentication using google .Build using HTML,css, js , Oauth OAuth (Open Authorization) is a popular API protocol "
        />
        <ProjectCard
          src="/MLL.png"
          title="Machine learning "
          description="Severals mini projects build using ML . Regression model , classification model , CNN,ANN and few more "
        />
        <ProjectCard
          src="/plant.png"
          title="Plant Dieseas"
          description=" Deep learning ML techniques  detect plant diseases by extracting features from images, such as color, texture, and shape "
        />
       
      </div>
    </div>
  );
};

export default Projects;