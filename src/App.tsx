import { RiPokerDiamondsLine } from "react-icons/ri";
import { LinkPreview } from "./components/ui/link-preview";
import { toast } from "sonner";
import {
  MdDownloadForOffline,
  MdOpenInNew,
  MdOutlineScreenshotMonitor,
} from "react-icons/md";
import { useState } from "react";

function App() {
  const [isFlashing, setIsFlashing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const copyEmailToClipBoard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText("yrlimbani03@gmail.com")
        .then(() => {
          toast.success("Email copied to clipboard!", {
            duration: 3000,
          });
        })
        .catch(() => {
          toast.error("Something went wrong! Please try again later!", {
            duration: 4000,
            closeButton: true,
          });
        });
    }
  };

  const handleScreenshotClick = () => {
    if (isProcessing) return;

    setIsProcessing(true);

    setIsFlashing(true);
    setTimeout(() => {
      setShowPreview(true);
    }, 500);

    setTimeout(() => {
      setIsFlashing(false);
    }, 400);
    setTimeout(() => {
      setShowPreview(false);
    }, 5000);

    setTimeout(() => {
      setIsProcessing(false);
    }, 5500);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/yogesh_resume.pdf";
    link.download = "Yogesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(
      "https://drive.google.com/file/d/1dpoe2RfPB43PFApNWHFazUa25brflgqg/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="max-w-[1000px] w-full h-full border border-black flex flex-col items-start justify-between gap-4 p-6 my-2">
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <p className="text-xl font-bold">R Yogesh Limbani</p>
          <div className="flex flex-row items-center justify-start w-full gap-2">
            <p
              className="text-lg font-semibold hover:text-[#4938e9] cursor-pointer"
              onClick={copyEmailToClipBoard}
            >
              yrlimbani03@gmail.com
            </p>
            <RiPokerDiamondsLine />
            <LinkPreview
              url="https://yogeshr6.vercel.app/"
              className="text-lg font-semibold hover:text-[#4938e9] cursor-pointer"
            >
              yogeshr6.vercel.com
            </LinkPreview>
            <RiPokerDiamondsLine />
            <LinkPreview
              url="https://github.com/YogeshR6"
              className="text-lg font-semibold hover:text-[#4938e9] cursor-pointer"
            >
              github.com/yogeshr6
            </LinkPreview>
            <RiPokerDiamondsLine />
            <LinkPreview
              url="https://maps.app.goo.gl/RAMLQvN9VZvdvDmBA"
              className="text-lg font-semibold hover:text-[#4938e9] cursor-pointer"
              isStatic
              imageSrc="/chennai.png"
            >
              Chennai, India
            </LinkPreview>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <p className="font-bold w-full border-b border-black">
            INTERNSHIPS AND EXPERIENCE
          </p>
          <div className="flex flex-col items-start justify-center w-full gap-2">
            <div className="flex flex-col items-start justify-center w-full">
              <p>
                <span className="font-bold">Full Stack Developer</span> -{" "}
                <LinkPreview
                  url="https://victopialabs.com/"
                  className="hover:text-[#4938e9] cursor-pointer"
                >
                  Victopia Labs
                </LinkPreview>{" "}
                (August 2024 - July 2025)
              </p>
              <ul className="list-disc list-inside py-1 pl-1 sm:pl-3">
                <li>
                  Led a team of 6 developers while mentoring new interns,
                  managing daily workflows, and ensuring timely project
                  delivery. Owned two full-stack projects from client
                  requirement gathering to deployment, including regular
                  stakeholder communication.
                </li>
                <li>
                  Took on cross-functional roles including project coordination,
                  hiring, and interviewing candidates to scale the team. Gained
                  hands-on experience in leadership, agile practices, and
                  communication with technical and non-technical stakeholders.
                </li>
                <li>
                  React.js, Typescript, React Native, Django, PostgreSQL,
                  SQLite, Expo, Next.js.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <p>
                <span className="font-bold">Website and Design Head</span> -{" "}
                <LinkPreview
                  url="https://internways.com/"
                  className="hover:text-[#4938e9] cursor-pointer"
                >
                  Intern Ways
                </LinkPreview>{" "}
                (November 2023 - March 2024)
              </p>
              <ul className="list-disc list-inside py-1 pl-1 sm:pl-3">
                <li>Designed Logo, visiting card and posters.</li>
                <li>
                  Created an interactive website along with designing UI/UX.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <p className="font-bold w-full border-b border-black">PROJECTS</p>
          <div className="flex flex-col items-start justify-center w-full gap-2">
            <div className="flex flex-col items-start justify-center w-full">
              <p>
                <span className="font-bold">Clip It Chat</span> (
                <LinkPreview
                  url="https://clipitchat.qzz.io/"
                  className="underline underline-offset-1 text-[#4938e9] cursor-pointer"
                >
                  Link
                </LinkPreview>
                )
              </p>
              <ul className="list-disc list-inside py-1 pl-1 sm:pl-3">
                <li>
                  Next.js, TypeScript, Cloudinary, TailwindCSS, Firebase,
                  shadcn, AceternityUI
                </li>
                <li>
                  Developed a full-stack social platform for users to share,
                  rate, and discuss user-generated video game screenshots.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <p>
                <span className="font-bold">Munch Mysteries</span> (
                <LinkPreview
                  url="https://munch-mysteries.onrender.com/"
                  className="underline underline-offset-1 text-[#4938e9] cursor-pointer"
                  imageSrc="/MunchM.png"
                  isStatic
                >
                  Link
                </LinkPreview>
                )
              </p>
              <ul className="list-disc list-inside py-1 pl-1 sm:pl-3">
                <li>HTML, CSS, EJS, Node JS, Express JS, MongoDB</li>
                <li>
                  Developed a website to discover food places in Chennai or add
                  favorite spots, review spots posted by other users.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <p>
                <span className="font-bold">Movies Vault</span> (
                <LinkPreview
                  url="https://yogeshr6.github.io/Moviez-Vault/"
                  className="underline underline-offset-1 text-[#4938e9] cursor-pointer"
                >
                  Link
                </LinkPreview>
                )
              </p>
              <ul className="list-disc list-inside py-1 pl-1 sm:pl-3">
                <li>HTML, CSS, CRUD API, JavaScript,</li>
                <li>
                  Details about Movies and TV Shows along with Poster using API
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <p>
                <span className="font-bold">Attendance Manager Extension</span>{" "}
                (
                <LinkPreview
                  url="https://github.com/YogeshR6/Evarsity-Attendance-Extension"
                  className="underline underline-offset-1 text-[#4938e9] cursor-pointer"
                >
                  Link
                </LinkPreview>
                )
              </p>
              <ul className="list-disc list-inside py-1 pl-1 sm:pl-3">
                <li>HTML, JavaScript, DOM Manipulation</li>
                <li>
                  Extension that helps you to manage your attendance in Evarsity
                  (SRM Student Portal)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <p className="font-bold w-full border-b border-black">EDUCATION</p>
          <div className="flex flex-col items-start justify-center w-full gap-2">
            <ul className="list-disc list-outside pl-5 w-full">
              <li>
                <div className="flex flex-row items-start justify-between w-full">
                  <h3 className="font-semibold">
                    Bachelor's of Technology - Computer Science and Engineering,{" "}
                    <span className="font-normal">SRM IST-VDP (9.35 CGPA)</span>
                  </h3>
                  <p>Aug 2021 - Jun 2025</p>
                </div>
                <p>Chennai, India</p>
              </li>
              <li>
                <div className="flex flex-row items-start justify-between">
                  <h3 className="font-semibold">
                    Higher Secondary Education,{" "}
                    <span className="font-normal">SKM Vidya Mandir</span>
                  </h3>
                  <p>Mar 2020 - Jun 2021</p>
                </div>
                <p>Chennai, India</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <p className="font-bold w-full border-b border-black">SKILLS</p>
          <div className="flex flex-col items-start justify-center w-full gap-2">
            <ul className="list-disc list-inside py-1 pl-1 sm:pl-3">
              <li>
                <span className="font-bold">Web Development:</span> HTML/CSS,
                React.js, Node.js, Express.js, Typescript
              </li>
              <li>
                <span className="font-bold">Mobile Development:</span> React
                Native, Expo
              </li>
              <li>
                <span className="font-bold">Database Management:</span> MySQL,
                MongoDB, PostgreSQL, SQLite
              </li>
              <li>
                <span className="font-bold">Programming Languages:</span>{" "}
                Python, C++, JavaScript
              </li>
              <li>
                <span className="font-bold">Version Control:</span> Git, GitHub,
                Azure DevOps
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <p className="font-bold w-full border-b border-black">
            EXTRA CURRICULAR ACTIVITIES
          </p>
          <div className="flex flex-col items-start justify-center w-full gap-2">
            <ul className="list-disc list-inside py-1 pl-1 sm:pl-3">
              <li>
                <span className="font-bold">Technical Head</span> - Computer
                Society of India, SRM VDP
              </li>
              <li>
                <span className="font-bold">Web Developer</span> - Design &
                Innovation Club
              </li>
              <li>
                <span className="font-bold">Designer</span> - ACE Club
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 right-10 rounded-full border border-black p-2 bg-indigo-600">
        <MdOutlineScreenshotMonitor
          size="45"
          className="cursor-pointer hover:bg-indigo-700 rounded-full py-1 px-2 text-white"
          onClick={handleScreenshotClick}
        />
      </div>

      <div
        className={`fixed inset-0 bg-white transition-opacity duration-400 ease-in-out pointer-events-none ${
          isFlashing ? "opacity-90" : "opacity-0"
        }`}
        style={{ zIndex: 9998 }}
      ></div>

      <div
        className={`fixed bottom-8 left-8 bg-white rounded-lg shadow-2xl p-4 flex items-center space-x-4 transition-all duration-500 ease-out transform ${
          showPreview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ zIndex: 10000 }}
      >
        <div className="w-16 h-20 bg-gray-200 border border-gray-900 rounded-md flex items-center justify-center">
          <img
            src="/yogesh_resume_preview.jpg"
            alt="Resume Preview"
            className="w-16 h-20"
          />
        </div>

        <div className="flex flex-col">
          <p className="font-semibold text-gray-800">Yogesh's Resume.pdf</p>
          <p className="text-sm text-gray-500">Ready to share</p>
          <div className="mt-3 flex space-x-3">
            <button
              onClick={handleDownload}
              className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm font-semibold flex items-center space-x-1 hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              <MdDownloadForOffline size="15" className="mt-[1px]" />
              <span>Download</span>
            </button>
            <button
              onClick={handleView}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm font-semibold flex items-center space-x-1.5 hover:bg-gray-300 transition-colors cursor-pointer"
            >
              <MdOpenInNew size="15" className="mt-[1px]" />
              <span>View</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
