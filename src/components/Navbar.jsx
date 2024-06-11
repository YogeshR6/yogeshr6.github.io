import { NavLink } from 'react-router-dom';

const navbarClass = 'text-center rounded-md p-2 hover:text-stone-200 hover:bg-stone-800 hover:outline hover:outline-2 hover:outline-cyan-300';
const navbarClassActive = 'text-center rounded-md p-2 text-stone-200 bg-stone-800 outline outline-2 outline-cyan-300';

export default function Navbar() {
  return (
    <aside className="w-1/12 px-1 py-8 bg-[#111111] text-stone-50">
      <li className='px-2 py-3'><NavLink className={({ isActive }) =>
        isActive ? navbarClassActive : navbarClass
      } to="/">Home</NavLink></li>
      <li className='px-2 py-3'><NavLink className={({ isActive }) =>
        isActive ? navbarClassActive : navbarClass
      } to="/projects">Projects</NavLink></li>
      <li className='px-2 py-3'><NavLink className={({ isActive }) =>
        isActive ? navbarClassActive : navbarClass
      } to="/contact">Contact</NavLink></li>
      <li className='px-2 py-3'><NavLink className={({ isActive }) =>
        isActive ? navbarClassActive : navbarClass
      } to="https://drive.google.com/drive/folders/1m1ydZS4t9GOkjkcqSP8I3sJyhh8dtF2J?usp=sharing" target='_blank'>Resume</NavLink></li>
    </aside>
  )
}