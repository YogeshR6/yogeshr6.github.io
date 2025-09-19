import { RiPokerDiamondsLine } from "react-icons/ri";
import { LinkPreview } from "./components/ui/link-preview";
import { toast } from "sonner";

function App() {
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
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="max-w-[1000px] w-full h-full border border-black flex flex-col items-start justify-between gap-4 p-6 mb-2">
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
                  Website to discover food places in Chennai or add favorite
                  spots, review spots posted by other users.
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
    </div>
  );
}

export default App;
