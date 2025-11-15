import Dash from '../../assets/dash.png';


const HeroSection = ({ openSignIn, openSignUp }) => {
  return (
    <div className="landing-page-content relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-80 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Smarter Tracking. Better Decisions. Stronger Finances</span>
            <span className="block text-blue-500">Track Today. Save Tomorrow</span>
          </h1>

          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
           “Manage your money with confidence as FinTrack brings all your financial insights, 
           spending patterns, and budgeting tools together in a clean, intelligent dashboard.”
          </p>

          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
             <button
    onClick={() => openSignUp()}
    className="flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 
               text-sm sm:text-base md:text-lg font-medium rounded-md 
               text-white bg-blue-500 hover:bg-blue-600 
               transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
  >
    Get Started
  </button>

  <button
    onClick={() => openSignIn()}
    className="flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 
               text-sm sm:text-base md:text-lg font-medium rounded-md 
               text-white bg-gray-500 hover:bg-gray-600 
               transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
  >
    Sign In
  </button>
            </div>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="relative mt-10 rounded-lg shadow-xl overflow-hidden">
          <img
            src={Dash}
            alt="FIN_TRAK Dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-lg"></div>
        </div>

        <div className="mt-8 text-center">
          {/* <p className="text-base text-gray-500">
            *Dashboard image is for illustrative purposes only.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;





// import Dashboard from '../../assets/dashboard.png';
// import Dash from '../../assets/dash.png';

// const HeroSection = ({openSignIn,openSignUp}) => {     
//     return (
        
//         <div className="landing-page-content relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-80 z-0 pointer-events-none ">

//             </div>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//                 <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
//                     <div className="text-center">
//                         <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//                             <span className="block">Welcome to Cloud App</span>
//                             <span className="block text-purple-500">Your Gateway to the Cloud</span>
//                         </h1>
//                         <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ">
//                             Experience seamless cloud solutions tailored for your business needs.
//                         </p>
//                         <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
//                             <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
//                                 <button 
//                                      onClick={() => openSignUp()}
//                                      className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl">Get Started</button>
//                                 <button 
//                                      onClick={() => openSignIn()}
//                                      className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl">Sign In</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                  {/* Dashboard Image */}
//                 <div className="relative">
//                       <div className="aspect-w-16 rounded-lg shadow-xl overflow-hidden ">
//                         <img src={Dash} alt="Cloud app Dashboard"  className='w-full h-full object-cover '/>
//                       </div>
//                       <div className="absolute inset-0 bg-gradient-to-t from-black opacity-10 rounded-lg"></div>
//                 </div>
//                 <div className="mt-8 text-center">
//                     <p className="mt-4 text-base text-gray-500 ">*Dashboard image is for illustrative purposes only.</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection;