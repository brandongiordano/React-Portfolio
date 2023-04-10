import React from 'react';
import ME from '../assets/snapshot.jpeg';

// const Home = () => {
//     return (
//         <div name='home' className='w-full h-screen bg-[#003049] flex items-center shadow-md shadow-[#003049]'>
//           <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
//           <img src={ME} className='h-80 w-60 rounded-lg' alt='Me' />
//             <p className='text-2xl sm:text-4xl text-[#eae2b7]'>Hello, my name is</p>
//             <h1 className='text-4xl sm:text-7xl font-bold text-[#d62828]'>
//             <span className='text-[#f77f00]'>Brandon</span> Giordano
//             </h1>
//             <h2 className='text-4xl sm:text-7xl font-bold text-[#eae2b7]'>
//               I'm a Full Stack Developer.
//             </h2>
//           </div>
//         </div>
//       );
// }

// export default Home;

const Home = () => {
    return (
      <div
        name="home"
        className="w-full h-screen bg-[#003049] flex items-center shadow-md shadow-[#003049]"
      >
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col sm:flex-row justify-center items-center h-full">
          <img src={ME} className="h-80 w-60 rounded-lg mr-8 sm:order-2" alt="Me" />
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-4xl text-[#eae2b7]">Hello, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#d62828]">
              <span className="text-[#f77f00]">Brandon</span> Giordano
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#eae2b7]">
              I'm a Full Stack Developer.
            </h2>
          </div>
        </div>
      </div>
    );
  };

export default Home;