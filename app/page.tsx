import Image from "next/image";
import Projects from "./components/Projects";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { Suspense } from "react";
import Contact from "./components/Contact";
import { LoadingProjects } from "./components/LoadingSkeleton";
import Email from "./emails";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center p-8">
        {/*  */}
        <div className="mt-8">
          <div className="flex items-center space-x-4">
            <Image
              className="w-16 h-16 rounded-full p-1 ring-2 ring-gray-200"
              src={
                "https://images.pexels.com/photos/36675/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="A photo of Gabriel"
              width={64}
              height={64}
            />

            <div>
              <h1 className="text-3xl">Gabriel</h1>
              <h2 className="text-lg">Full Stack JavaScript Developer</h2>
            </div>
          </div>
          <p className="mt-8">
            Welcome to my digital place where I share what I'm learning about
            the web and my personal projects.
          </p>
          <p>I'm currently looking for a new role as a developer. Hire me?</p>
          <div className="items-center space-x-8 font-semibold leading-none text-gray-500/70 mt-4 -ml-1">
            <Link href={""}>
              <LinkedInIcon fontSize="large" /> LinkedIn
            </Link>
            <Link href={""}>
              <GitHubIcon fontSize={"large"} /> GitHub
            </Link>
          </div>
        </div>
        <div className="space-y-16 mt-32">
          <Suspense fallback={<LoadingProjects />}>
            <Projects />
          </Suspense>
          <Contact />
          <Email />
        </div>
      </div>
    </main>
  );
}
