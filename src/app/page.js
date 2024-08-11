import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa6'
import { FaCss3Alt } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import Image from 'next/image'
import Pfp from '../../public/pfp.jpg'
import Auth from '../../public/auth.webp'
import Chat from '../../public/chat.png'
import { CiLink } from 'react-icons/ci'

const page = () => {
  return (
    <>
      <div className="px-10 md:px-10 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between text-sm md:text-md ">
            <h1 className="font-serif">itsharshcheema@gmail.com</h1>
            <ul className="flex items-center">
              <li>
                {' '}
                <a
                  href="https://drive.google.com/file/d/1ZA9hE93JPHRlsq9-K6yWde_f5M8cQc9S/view?usp=drivesdk"
                  className=" bg-gradient-to-r from-cyan-500 to-teal-400 px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 flex flex-col items-center">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Harshdeep
            </h2>

            <h3 className="text-2xl py-2 ">MERN stack developer</h3>
            <div>
              {/* pfp  */}
              <div className="flex justify-center my-5   ">
                <Image
                  alt="Profile Picture"
                  src={Pfp}
                  className="max-w-40 max-h-40 rounded-full object-cover object-center shadow-xl shadow-teal-950"
                />
              </div>
            </div>
            <p className="text-sm py-5 leading-8 text-gray-400">
              I am a passionate software developer who loves building scalable
              and efficient applications using React, Node.js,Express.js and
              MongoDB.
            </p>
          </div>
          {/* connect with me  */}
          <h1 className="text-center text-2xl py-4  text-teal-600  ">
            Connect with me
          </h1>
          <div className="text-3xl flex justify-center gap-10 py-3">
            <a href="https://github.com/iharshcheema">
              <FaGithub className="  text-gray-400 hover:text-teal-600" />
            </a>
            <a href="https://www.linkedin.com/in/harsh-deep-9b2a65284">
              <FaLinkedin className="  text-gray-400 hover:text-teal-600" />
            </a>
            <a href="https://x.com/harsh_chjs">
              <FaTwitter className="  text-gray-400 hover:text-teal-600" />
            </a>
          </div>

          {/* skills  */}
          <h1 className="text-center text-2xl py-4  text-teal-600 mt-12">
            Skills
          </h1>
          <div className="text-3xl flex justify-center gap-10 py-2">
            <FaHtml5 className="  text-orange-500" />
            <FaCss3Alt className="  text-sky-300" />
            <SiJavascript className="  text-yellow-300" />
            <FaReact className="  text-sky-400" />
            <SiExpress className="  text-gray-400" />
            <SiMongodb className="  text-green-700" />
          </div>
        </section>

        {/* services i offer  */}
        <section>
          <div className="text-center text-3xl py-4 flex flex-col items-center my-12">
            <h3 className=" text-teal-600">Services I offer</h3>
            <p className="text-sm py-2 leading-8 text-gray-400">
              I specialize in developing web applications using React, Node.js,
              and Express.js. I also work with MongoDB for storing and
              retrieving data.
            </p>
          </div>

          <h2 className="text-center py-4 text-3xl mt-3  text-teal-600">
            Projects
          </h2>
          <p className=" text-center text-sm py-2 leading-8 text-gray-400">
            Click on the link icon to access the link of the deployed project.
          </p>
          {/* projects  */}
          <div className="grid grid-cols-1  md:grid-cols-2 gap-20">
            {/* project 1  */}

            <div className="flex flex-col items-center shadow-lg shadow-teal-950 p-10 rounded-xl my-10 text-center">
              <Image
                alt="project"
                src={Auth}
                className="max-w-80 max-h-80 rounded-full object-cover object-center shadow-xl shadow-teal-950"
              />
              <div className="flex justify-between items-center gap-5 ">
                <h6 className="py-3">Mern Authentication System</h6>
                <a
                  href="https://mern-auth-react.vercel.app"
                  className="cursor-pointer"
                >
                  <CiLink className="text-2xl" />
                </a>
              </div>
              <p className="text-sm py-2 text-gray-400">
                A robust authentication system using JWT (JSON Web Tokens) and
                bcrypt for password hashing and salting.
              </p>
              <h6 className="pb-1">Key Features</h6>
              <p className="text-xs text-gray-400">OTP verification</p>
              <p className="text-xs text-gray-400">Reset pasword using link</p>
            </div>

            {/* project 2  */}

            <div className="flex flex-col items-center shadow-lg shadow-teal-950 p-10 rounded-xl my-10 text-center">
              <Image
                alt="project"
                src={Chat}
                className="max-w-80 max-h-80 rounded-full object-cover object-center shadow-xl shadow-teal-950"
              />
              <div className="flex justify-between items-center gap-5 ">
                {' '}
                <h6 className="py-3">Chat Application</h6>
                <a
                  href="https://github.com/iharshcheema/Chatify"
                  className="cursor-pointer"
                >
                  <CiLink className="text-2xl" />
                </a>
              </div>

              <p className="text-sm py-2 text-gray-400">
                Leverages Socket.io for real time communication.
              </p>
              <h6 className="pb-1">Key Features</h6>
              <p className="text-xs text-gray-400">
                Enable user to send message in real-time
              </p>
              <p className="text-xs text-gray-400">Group chats/Rooms</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page
