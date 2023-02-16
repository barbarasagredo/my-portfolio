import ProjectCard from "../components/ProjectCard";
import Sidebar from "../components/Sidebar";

const Projects = () => {
  return (
    <>
      <>
        <div className="bg-no-repeat bg-cover backgroundImage">
          <h2 className="flex justify-center pt-16">Projects</h2>
          <div className="flex">
            <Sidebar />
            <div className="grid grid-cols-3 gap-6 w-full self-center px-12 py-12">
              <ProjectCard
                alt={"ToDo app cover"}
                image={"https://raw.githubusercontent.com/barbarasagredo/my-portfolio/main/src/images/to-do-app.jpg"}
                title={"To do app (Front end menthor)"}
                description={
                  "SPA created following the Front End Mentor Challenge that works as a task list that allows to create, update and delete task from a list, as well as order and filter the tasks. Responsive and available in dark mode."
                }
                repository={
                  "https://github.com/barbarasagredo/todo-app-frontendmentor"
                }
                webpage={
                  "https://todo-list-frontendmentor-challenge.netlify.app/"
                }
              />
              <ProjectCard
                alt={"Country searcher cover"}
                image={"https://raw.githubusercontent.com/barbarasagredo/my-portfolio/main/src/images/country-filter.jpg"}
                title={"Country searcher"}
                description={
                  "Country search engine challenge for job application. This is the first preview of the project that contains the search bar, in addition to the templates that show the countries on cards. Built using the API provided by REST countries."
                }
                repository={"https://github.com/barbarasagredo/app-ecomsur"}
                webpage={"https://barbarasagredo.github.io/app-ecomsur/src/"}
              />
              <ProjectCard
                alt={"Everis challenge cover"}
                image={"https://raw.githubusercontent.com/barbarasagredo/my-portfolio/main/src/images/everis-knowdata.jpg"}
                title={"Everis KnowData (Hackaton challenge)"}
                description={
                  "KnowData is a web application built as a Single-page Application (SPA). The web uses Firebase to manage the database of user profiles where you can register, login and logout with your own account."
                }
                repository={
                  "https://github.com/barbarasagredo/Matriz-de-conocimientos"
                }
                webpage={"https://matriz-conocimiento.web.app/"}
              />
              <ProjectCard
                alt={"Saudade cover"}
                image={"https://raw.githubusercontent.com/barbarasagredo/my-portfolio/main/src/images/saudade.jpg"}
                title={"Saudade (My own social network)"}
                description={
                  "On this social network, designed and invented by myself, you can create an account, log in or enter with Gmail. First approach to backend developing using Firebase. Website under construction, not finished yet."
                }
                repository={
                  "https://github.com/barbarasagredo/SCL016-social-network/tree/Barbara"
                }
              />
              <ProjectCard
                alt={"Pokemon what cover"}
                image={"https://raw.githubusercontent.com/barbarasagredo/my-portfolio/main/src/images/pokemon-what.jpg"}
                title={"Pokemon what?!"}
                description={
                  "Second front end development project, consists of using an api to list, filter and order the list of all pokemons from Kanto's generation."
                }
                repository={
                  "https://github.com/barbarasagredo/SCL016-data-lovers"
                }
                webpage={
                  "https://barbarasagredo.github.io/SCL016-data-lovers/src/index.html"
                }
              />
              <ProjectCard
                alt={"Le Petit Prince cover"}
                image={"https://raw.githubusercontent.com/barbarasagredo/my-portfolio/main/src/images/mensaje-secreto.jpg"}
                title={"Mensaje Secreto"}
                description={
                  "My first Front End project for the 16th generation of Laboratoria. Built with vanilla Javascript, html and CSS, it allows encryption of messages between parents and children."
                }
                repository={"https://github.com/barbarasagredo/SCL016-cipher"}
                webpage={
                  "https://barbarasagredo.github.io/SCL016-cipher/src/index.html"
                }
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Projects;
