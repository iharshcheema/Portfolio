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
import Auth from '../../public/logo-asset.webp'
import Chat from '../../public/socketio.avif'
import Ecommerce from '../../public/ecom.jpeg'


const page = () => {
  return (
    <>
      <div className="px-10 md:px-10 lg:px-40 bg-gradient-to-r from-gray-950 to-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between text-sm md:text-md ">
            <h1 className="font-serif">itsharshcheema@gmail.com</h1>
            <ul className="flex items-center">
              <li>
                {' '}
                <a
                  href="https://drive.google.com/file/d/1rtB0FtzPpBXYiQnvbJgU6PzUxEIgQp2J/view?usp=drive_link"
                  className=" bg-gradient-to-r from-cyan-500 to-teal-400 px-4 py-2 rounded-md ml-8 hover:bg-gradient-to-l from-cyan-500 to-teal-400 "
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
              {/* pfp */}
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
          {/* CONNECT WITH ME */}
          <h1 className="text-center text-2xl py-4  text-teal-600  ">
            Connect with me
          </h1>
          <div className="text-3xl flex justify-center gap-10 py-3 ">
            <a href="https://github.com/iharshcheema">
              <FaGithub className="  text-gray-400 hover:text-teal-600 transform transition duration-300 hover:scale-105 hover:shadow-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/harsh-deep-9b2a65284">
              <FaLinkedin className="  text-gray-400 hover:text-teal-600 transform transition duration-300 hover:scale-105 hover:shadow-2xl" />
            </a>
            <a href="https://x.com/harsh_chjs">
              <FaTwitter className="  text-gray-400 hover:text-teal-600 transform transition duration-300 hover:scale-105 hover:shadow-2xl" />
            </a>
          </div>

          {/* skills  */}
          <h1 className="text-center text-3xl py-4  text-teal-600 mt-12">
            Skills
          </h1>
          {/* <div className="text-xl flex justify-center gap-10 py-2">
            <FaHtml5 className="  text-orange-500" />
            <FaCss3Alt className="  text-sky-300" />
            <SiJavascript className="  text-yellow-300" />
            <FaReact className="  text-sky-400" />
            <SiExpress className="  text-gray-400" />
            <SiMongodb className="  text-green-700" />
            

          </div> */}
          <div className="text-center text-3xl py-4 flex flex-col items-center">
          <p className="text-sm  leading-8 text-gray-400">
              HTML , CSS, Javascript, React.js, Node.js, Express.js, MongoDB, PostgreSQL, Python , TailwindCSS, ShadCN, Chakra UI, Material UI, Redux Toolkit VS Code, Postman, pgAdmin4, MongoDBCompass, Vercel , Github
            </p>
          </div>
        </section>

        {/* SERVICES I OFFER  */}
        <section>
          <div className="text-center text-3xl py-4 flex flex-col items-center my-12">
            <h3 className=" text-teal-600">Education</h3>
            <p className="text-sm py-2 leading-8 text-gray-400">
              <p>Bachelor of Technology, Computer Science Engineering | Maharishi Markandeshwar University | CGPA: 7.7</p>
              <p>XII (CBSE) | National Public School, Yamunanagar | Percentage: 73%</p>
              <p>X (CBSE) | Sanjay Gandhi Memorial Public School, Yamunanagar | Percentage: 84%</p>


              
            </p>
          </div>

          <h2 className="text-center py-4 text-3xl mt-3  text-teal-600">
            Projects
          </h2>
          {/* <p className=" text-center text-sm py-2 leading-8 text-gray-400">
            Click on the Card to access the link of the deployed project.
          </p> */}
          {/* PROJECTS */}
          <div className="grid grid-cols-1 gap-10">
            {/* Project 1 */}
            <div className="flex flex-col md:flex-row items-center  rounded-xl overflow-hidden transition transform duration-300 hover:scale-105 hover:shadow-2xl mb-10">
              {/* Left: Image + Links */}
              <div className="flex flex-col items-center p-6 md:w-1/2 w-full">
                <Image
                  alt="project"
                  src={Auth}
                  className="w-60 md:w-72 lg:w-80 h-auto object-cover rounded-md shadow-xl shadow-teal-950 mb-4"
                />
                <div className="flex gap-4">
                  <a
                    href="https://github.com/iharshcheema/Mern-auth-REACT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-teal-700 px-4 py-2 rounded hover:bg-teal-800 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://mern-auth-react.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-teal-700 px-4 py-2 rounded hover:bg-teal-800 transition"
                  >
                    Live Link
                  </a>
                </div>
              </div>

              {/* Right: Description */}
              <div className="p-6 text-center md:text-left md:w-1/2 w-full">
                <h6 className="text-xl font-semibold mb-2">
                  MERN Authentication System
                </h6>
                <p className="text-sm text-gray-400 mb-4">
                  A robust authentication system using JWT (JSON Web Tokens) and
                  bcrypt for password hashing and salting.
                </p>
                <h6 className="font-medium mb-1">Key Features</h6>
                <ul className="text-xs text-gray-400 list-disc list-inside">
                  <li>OTP verification</li>
                  <li>Reset password using link</li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col md:flex-row items-center rounded-xl overflow-hidden transition transform duration-300 hover:scale-105 hover:shadow-2xl mb-10">
              {/* Left: Image + Links */}
              <div className="flex flex-col items-center p-6 md:w-1/2 w-full">
                <Image
                  alt="project"
                  src={Chat}
                  className="w-60 md:w-72 lg:w-80 h-auto object-cover rounded-md shadow-xl shadow-teal-950 mb-4"
                />
                <div className="flex gap-4">
                  <a
                    href="https://github.com/iharshcheema/Chat-app-full-stack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-teal-700 px-4 py-2 rounded hover:bg-teal-800 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://chat-app-full-stack-04as.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-teal-700 px-4 py-2 rounded hover:bg-teal-800 transition"
                  >
                    Live Link
                  </a>
                </div>
              </div>

              {/* Right: Description */}
              <div className="p-6 text-center md:text-left md:w-1/2 w-full">
                <h6 className="text-xl font-semibold mb-2">Chat Application</h6>
                <p className="text-sm text-gray-400 mb-4">
                  A full-stack chat application using React.js and Socket.io for a performant, scalable user experience.
                </p>
                <h6 className="font-medium mb-1">Key Features</h6>
                <ul className="text-xs text-gray-400 list-disc list-inside">
                  <li>Enable users to send messages in real-time, view online status, and share images.</li>
                  <li>Utilizes Socket.io for seamless bi-directional real-time communication.</li>
                </ul>
              </div>
            </div>

            {/* Project 3  
            */}
            <div className="flex flex-col md:flex-row items-center rounded-xl overflow-hidden transition transform duration-300 hover:scale-105 hover:shadow-2xl mb-10">
              {/* Left: Image + Links */}
              <div className="flex flex-col items-center p-6 md:w-1/2 w-full">
                <Image
                  alt="project"
                  src={Ecommerce}
                  className="w-60 md:w-72 lg:w-80 h-auto object-cover rounded-md shadow-xl shadow-teal-950 mb-4"
                />
                <div className="flex gap-4">
                  <a
                    href="https://github.com/iharshcheema/EcommerceMERN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-teal-700 px-4 py-2 rounded hover:bg-teal-800 transition"
                  >
                    GitHub
                  </a>
                  {/* <a
                    href="https://chat-app-full-stack-04as.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-teal-700 px-4 py-2 rounded hover:bg-teal-800 transition"
                  >
                    Live Link
                  </a> */}
                </div>
              </div>

              {/* Right: Description */}
              <div className="p-6 text-center md:text-left md:w-1/2 w-full">
                <h6 className="text-xl font-semibold mb-2">E-commerce Platform</h6>
                <p className="text-sm text-gray-400 mb-4">
                  A full-stack eCommerce application with key user-facing features such as product browsing, add-to-cart
functionality, and secure Stripe-based payment integration.
                </p>
                <h6 className="font-medium mb-1">Key Features</h6>
                <ul className="text-xs text-gray-400 list-disc list-inside">
                  <li>Dynamic discount voucher system allowing users to apply promotional codes at checkout, enhancing
user engagement and marketing flexibility.</li>
                  <li>Arobust admin dashboard enabling administrators to add, update, and manage products efficiently through a
clean UI and secure backend logic..</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page
