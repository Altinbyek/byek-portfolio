import Description from "@/components/home/Description";
import HomeTop from "@/components/home/HomeTop";
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
        </div>
      </main>
    </>
  );
};

export default Home;
