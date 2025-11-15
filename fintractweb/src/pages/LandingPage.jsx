// import React from "react";
// import { assets } from "../assets/assets";
// import { Link, Links } from "react-router-dom";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Navbar */}
//       <nav className="w-full border-b border-gray-200 bg-white">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="w-12 h-12">
//               <img
//                 src={assets.logo}
//                 alt="logo"
//                 className="h-12 w-12 object-contain"
//               />
//             </div>
//             <h1 className="text-lg font-bold text-gray-900">Fin<span className="text-blue-600">Track</span></h1>
//           </div>

//           {/* Desktop Nav Links */}
//           <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
//             <li className="hover:text-black cursor-pointer"><Link to="/dashboard">Home</Link></li>
//             <li className="hover:text-black cursor-pointer"><Link to="/about">About us</Link></li>
//             <li className="hover:text-black cursor-pointer"><Link to="/contact">Contact us</Link></li>
//           </ul>

//           {/* Buttons */}
//           <div className="flex items-center gap-4">
//             {/* Desktop: Login + Get Started */}
//             <div className="hidden md:flex gap-4">
//               <button className="text-gray-700 hover:text-black font-medium cursor-pointer">
//                 <Link to="/login">Login</Link>
//               </button>
//               <button className="px-5 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition">
//                 <Link to="/signup">Get started</Link>
//               </button>
//             </div>

//             {/* Mobile: Only Login */}
//             <div className="flex md:hidden">
//               <button className="text-gray-700 hover:text-black font-medium cursor-pointer">
//                 <Link to="/login">Login</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-12 flex-1">
//         {/* Left content */}
//         <div className="flex-1 space-y-6 text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
//             Take Control of Your Finances
//           </h1>
//           <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
//             Your foundation for secure, intelligent financial management.
//             Effortlessly track your income and expenses to achieve your financial goals.
//           </p>

//           {/* Hero Buttons */}
//           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition">
//               <Link to="/signup">Start Tracking for Free</Link>
//             </button>
//             <button className="px-6 py-3 bg-transparent text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition">
//               Learn More →
//             </button>
//           </div>
//         </div>

//         {/* Right image */}
//         <div className="flex-1 flex justify-center md:justify-end">
//           <img
//             src="/public/lan.gif"
//             alt="FinTrack illustration"
//             className="w-80 md:w-[420px] object-contain"
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;

// import React from "react";
// import { assets } from "../assets/assets";
// import { Link } from "react-router-dom";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Navbar */}
//       <nav className="w-full border-b border-gray-200 bg-white">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="w-12 h-12">
//               <img
//                 src={assets.logo}
//                 alt="logo"                                    
//                 className="h-12 w-12 object-contain"
//               />
//             </div>
//             <h1 className="text-lg font-bold text-gray-900">
//               Fin<span className="text-blue-600">Track</span>
//             </h1>
//           </div>

//           {/* Desktop Nav Links */}
//           <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
//             <li className="hover:text-black cursor-pointer"><Link to="/dashboard">Home</Link></li>
//             <li className="hover:text-black cursor-pointer"><Link to="/about">About us</Link></li>
//             <li className="hover:text-black cursor-pointer"><Link to="/contact">Contact us</Link></li>
//           </ul>

//           {/* Buttons */}
//           <div className="flex items-center gap-4">
//             {/* Desktop: Login + Get Started */}
//             <div className="hidden md:flex gap-4">
//               <button className="text-gray-700 hover:text-black font-medium cursor-pointer">
//                 <Link to="/login">Login</Link>
//               </button>
//               <button className="px-5 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition">
//                 <Link to="/signup">Get started</Link>
//               </button>
//             </div>

//             {/* Mobile */}
//             <div className="flex md:hidden">
//               <button className="text-gray-700 hover:text-black font-medium cursor-pointer">
//                 <Link to="/login">Login</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-12 flex-1">
//         {/* Left content */}
//         <div className="flex-1 space-y-6 text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
//             Take Control of Your Finances
//           </h1>
//           <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
//             Your foundation for secure, intelligent financial management.
//             Effortlessly track your income and expenses to achieve your financial goals.
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition">
//               <Link to="/signup">Start Tracking for Free</Link>
//             </button>
//             <button className="px-6 py-3 bg-transparent text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition">
//               Learn More →
//             </button>
//           </div>
//         </div>

//         {/* Right image */}
//         <div className="flex-1 flex justify-center md:justify-end">
//           <img
//             src="/public/lan.gif"
//             alt="FinTrack illustration"
//             className="w-80 md:w-[420px] object-contain"
//           />
//         </div>
//       </section>

//       {/* 🌟 BIG PREMIUM FOOTER ADDED BELOW */}
//       <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 py-16 mt-10">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

//           {/* Logo + About */}
//           <div>
//             <h2 className="text-2xl font-bold text-white mb-4">
//               Fin<span className="text-blue-500">Track</span>
//             </h2>
//             <p className="text-gray-400 leading-relaxed">
//               A smarter way to manage your money.  
//               Track income, expenses, and financial goals with ease.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
//               <li><Link to="/about" className="hover:text-white">About Us</Link></li>
//               <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
//               <li><Link to="/login" className="hover:text-white">Login</Link></li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li className="hover:text-white cursor-pointer">Pricing</li>
//               <li className="hover:text-white cursor-pointer">Guide</li>
//               <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
//               <li className="hover:text-white cursor-pointer">Privacy Policy</li>
//             </ul>
//           </div>

//           {/* Social */}
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
//             <div className="flex gap-4 text-2xl">
//               <span className="cursor-pointer hover:text-blue-400">🌐</span>
//               <span className="cursor-pointer hover:text-blue-400">🐦</span>
//               <span className="cursor-pointer hover:text-blue-400">📘</span>
//               <span className="cursor-pointer hover:text-blue-400">📸</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
//           © {new Date().getFullYear()} FinTrack — All Rights Reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


import CTASection from "../components/landing/CTASection";
import FooterSection from "../components/landing/FooterSection";
import HeroSection from "../components/landing/HeroSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  // Replace Clerk functions with your own routing
  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">

      {/* Hero Section */}
      <HeroSection openSignIn={handleLogin} openSignUp={handleSignup} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection openSignUp={handleSignup} />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;


