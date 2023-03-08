import "../App.css";
import Sidebar from "../components/Sidebar";

const AboutMe = () => {
  return (
    <>
      <div className="grid bg-no-repeat bg-cover min-h-screen backgroundImage">
        <h2 className="grid justify-center pt-14">About me</h2>
        <div className="grid md:grid-cols-7 xs:grid-cols-4  pb-40">
          <Sidebar />
          <div className="grid col-start-2 col-span-3 self-center space-y-3 pb-8">
            <p className="text-2xl font-bold text-strong-pink">
              Hi, I'm Bárbara
            </p>
            <p>
              Proudly graduated from Laboratoria, currently living in Chile.
            </p>
            <p>
              I consider myself a creative and brave person. I moved to New
              Zealand this year and even though I had to come back I was able to
              prove myself ✨ I can speak english✨
            </p>
            <p> I'm an analog photographer 📷 </p>
            <p>
              My biggest goal is to become into a mobile applications dev, now I
              am learning Flutter 💎
            </p>
            <p>
              Better in an inclusive company where I can learn and develop my
              potential, drink coffee and share music with my co-workers 🎧
            </p>
          </div>
          <div className="grid sm:col-start-2 xs:col-start-2 md:col-span-3 sm:col-span-2 xs:col-span-2 items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/barbarasagredo/my-portfolio/main/src/images/profile-photo.png"
              alt="profile-picture"
              className="shadowImage rounded-full max-h-64"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
