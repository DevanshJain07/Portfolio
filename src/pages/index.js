import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import { Link } from 'gatsby';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          Enthusiastic Computer Science undergrad eager to 
          contribute to team success through hard work, 
          attention to detail and excellent organizational 
          skills. Motivated to learn, grow and excel in IT 
          industry. To bring my strong sense of dedication, 
          motivation, and responsibility to your company, 
          and to utilize my qualifications obtained through 
          NIT PATNA.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience">

        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Intern</h3>
              <div className="subheading mb-3">Skynet Secure Solutions</div>
              <p>
                Built a chat room and a video call option using socket.io for the website.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2020 - August 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Lead Web Coordinator</h3>
              <div className="subheading mb-3">ISIE NITP SRA CLUB</div>
              <p>
              Built the official website of the club which is live online.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Lead Member</h3>
              <div className="subheading mb-3">Sankalp Social CLUB</div>
              <p>
              In this club the members teach the underprivileged kids and educate them.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2018 - Present</span>
            </div>
          </div>

          </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education">

        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">NATIONAL INSTITUTE OF TECHNOLOGY</h3>
              <div className="subheading mb-3">Bachelor of TECHNOLOGY</div>
              <div>Computer Science</div>
              <p>CGPA: 7.5</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2018 - May 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">KAPOL VIDYANIDHI INTERNATIONAL SCHOOL</h3>
              <div className="subheading mb-3">CLASS-10</div>
              <p>PERCENTAGE-93%</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">MAY 2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">TP BHATIA COLLEGE OF SCIENCE</h3>
              <div className="subheading mb-3">CLASS-12</div>
              <p>GPA:4.00</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">MAY 2017</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-android"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-database"></i>
            </li>
            <li className="list-inline-item">
            <i class="fab fa-node-js"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Android App Development, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Web Development, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Machine Learning
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Natural Language Processing
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Algorithms And Data Structures
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="projects">

        <div className="w-100">
          <h2 className="mb-5">PROJECTS</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">DNA BASED DATA SECURITY IN THE CLOUD
COMPUTING ENVIRONMENT — 6TH
SEMESTER</h3>
              <div className="subheading mb-3"><Link>https://github.com/DevanshJain07/DNA-security-using-Cloud-Computing</Link></div>
              <p>
              Built a window based application using java swing as a
frontend , socket connection , and using a dna based
method for encryption and decryption of the file or
information and storing it in cloud.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2021 - May 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">CASA-CROWD — Context-Aware Scale
Aggregation CNN-Based Crowd Counting
Technique-5th semester</h3>
              <div className="subheading mb-3"><Link>https://github.com/DevanshJain07/CASA-Crowd</Link></div>
              <p>
              Machine Learning project that I worked on, using CNN
model built over VGG-16 via transfer learning.              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">august 2020 - december 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">NEIGHBORHOOD SUGGESTIONS</h3>
              <div className="subheading mb-3"><Link>https://github.com/DevanshJain07/foursquare_api</Link></div>
              <p>
              It was a Mini Data Science project done by me which
suggests all the places that you require in the
neighborhoods of the place/city you are going to stay
using Foursquare API. BeautifulSoup is used for Web
Scraping.              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2020 - June 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">E-COMMERCE WEBSITE</h3>
              <div className="subheading mb-3"><Link>https://github.com/DevanshJain07/Triggered-Shop-Online</Link></div>
              <p>
              It is a website which sells clothings, developed Using
MERN. Stride Payment is integrated.       </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2020 - Present</span>
            </div>
          </div>

          </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a coder and a developer, I prefer spending my free time reading and collecting information 
            about recent technologies. Being a gym freak, working out is a routine that I follow rigourously. Chess is a 
            game, That I am addicted to and is a hobby. Being a Hodophile, travelling solo,with friends or family anytime 
            of the year never goes off my bucket list.
          </p>
          <p className="mb-0">
            Also I love binge watching crime-thriller series and animes. Cricket is Passion.
           </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Tensorflow: Data and Deployment Specialization
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i><sup>deeplearning.ai</sup>
              Deep Learning Specialization
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i><sup>IBM</sup>
              Data Science Specialization
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i><sup>Imperial College London</sup>
              Maths for ML Specialization
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              FullStack MERN Development
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i><sup>Udemy</sup>
              Android Development
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
