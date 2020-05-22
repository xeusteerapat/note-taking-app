import React from 'react';
import { Link } from 'react-router-dom';
import NoteHeroLeft from '../../img/note_hero_left.svg';
import NoteHeroRight from '../../img/note_hero_right.svg';

const LandingPage = () => {
  return (
    <div className="container mx-auto px-16 py-4">
      <h1 className="text-6xl text-center text-blue-700">
        Welcome to Note-Taking App
      </h1>
      <>
        <header className="flex items-center justify-around px-4 py-3 bg-blue-500">
          <ul className="flex ">
            <li className="mr-6">
              <Link className="text-white hover:text-indigo-100" to="/">
                What it's for
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-white hover:text-indigo-100" to="/">
                How it works
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-white hover:text-indigo-100" to="/">
                Templates
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-white hover:text-indigo-100" to="/signup">
                Get Started
              </Link>
            </li>
          </ul>
        </header>

        {/* hero section*/}
        <section className="py-10">
          <div className="flex content-center flex-wrap">
            <div className="grid grid-cols-2 gap-4">
              <img src={NoteHeroLeft} alt="" width="500px" className="center" />
              <h1 className="text-4xl text-center text-blue-700">
                Keep your team connected through writing
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <h1 className="text-4xl text-center text-blue-700">
                Write once, Read Anywhere
              </h1>
              <img
                src={NoteHeroRight}
                alt=""
                width="500px"
                className="center"
              />
            </div>
          </div>
        </section>

        <section className="py-8">
          <h1 className="text-4xl text-center text-indigo-700">
            Join us today, no credit card require
          </h1>
          <div className="text-center">
            <button className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </section>
      </>
    </div>
  );
};

export default LandingPage;
