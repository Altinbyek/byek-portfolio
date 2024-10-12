import Description from "@/components/home/Description";
import HomeTop from "@/components/home/HomeTop";
import Skills from "@/components/home/Skills";
import WorkExperience from "@/components/home/WorkExperience";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Миний Портфолио</title>
      </Head>
      <main>
        <div className="flex flex-col justify-center">
          <HomeTop />
          <div className="top-40"></div>
          <Description />
          <div className="top-40"></div>
          <WorkExperience />
          <div className="top-40"></div>
          <Skills />
          <div className="top-40"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
