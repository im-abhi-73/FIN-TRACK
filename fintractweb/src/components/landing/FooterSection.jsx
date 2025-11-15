// const FooterSection = () => {     
//     return (
//         <footer className="bg-gray-800">
//             <div className="max-w-7xl mx-auto py-12 px-4 sd:px-6 lg:px-8">
//                 <div className="text-center">
//                     <p className="text-base text-gray-400">&copy; 2024 Cloud App. All rights reserved.</p>
//                 </div>
//             </div>
//         </footer>
//     )
// }
// export default FooterSection;
// import { Github, Linkedin, Facebook, Twitter, Slack, Youtube, Globe } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-gray-300 py-12">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
//         {/* Product */}
//         <div>
//           <h3 className="text-sm font-semibold text-gray-400 mb-4">Product</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:text-white">FinTrack Overview</a></li>
//             <li><a href="#" className="hover:text-white">Budget Manager</a></li>
//             <li><a href="#" className="hover:text-white">Expense Tracker</a></li>
//             <li><a href="#" className="hover:text-white">Pricing Plans</a></li>
//           </ul>
//         </div>

//         {/* Ecosystem */}
//         <div>
//           <h3 className="text-sm font-semibold text-gray-400 mb-4">Ecosystem</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:text-white">Bank Integrations</a></li>
//             <li><a href="#" className="hover:text-white">Investment Insights</a></li>
//             <li><a href="#" className="hover:text-white">Smart Alerts</a></li>
//             <li><a href="#" className="hover:text-white">Financial Analytics</a></li>
//           </ul>
//         </div>

//         {/* Resources */}
//         <div>
//           <h3 className="text-sm font-semibold text-gray-400 mb-4">Resources</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:text-white">Finance Blog</a></li>
//             <li><a href="#" className="hover:text-white">Money Tips</a></li>
//             <li><a href="#" className="hover:text-white">Workshops & Webinars</a></li>
//             <li><a href="#" className="hover:text-white">Documentation</a></li>
//             <li><a href="#" className="hover:text-white">User Guide</a></li>
//             <li><a href="#" className="hover:text-white">FAQs</a></li>
//             <li><a href="#" className="hover:text-white">Customer Support</a></li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-sm font-semibold text-gray-400 mb-4">Company</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:text-white">About FinTrack</a></li>
//             <li><a href="#" className="hover:text-white">Press & Updates</a></li>
//             <li><a href="#" className="hover:text-white">Careers</a></li>
//             <li><a href="#" className="hover:text-white">Contact Support</a></li>
//             <li><a href="#" className="hover:text-white">Partner Program</a></li>
//             <li><a href="#" className="hover:text-white">Trust & Safety</a></li>
//             <li><a href="#" className="hover:text-white">Security Center</a></li>
//             <li><a href="#" className="hover:text-white">Release Notes</a></li>
//             <li><a href="#" className="hover:text-white">Brand Assets</a></li>
//           </ul>
//         </div>

//         {/* Stay Connected */}
//         <div>
//           <h3 className="text-sm font-semibold text-gray-400 mb-4">Stay Connected</h3>
//           <div className="space-y-3">
//             <input
//               type="email"
//               placeholder="Enter your email*"
//               className="w-full bg-transparent border border-gray-600 text-gray-200 text-sm rounded-md px-3 py-2 focus:outline-none focus:border-gray-400"
//             />
//             <p className="text-xs text-gray-400">
//               Subscribe for updates on financial tools, insights, and new FinTrack features.
//             </p>
//             <div className="flex space-x-4 mt-4">
//               <Github className="h-5 w-5 hover:text-white cursor-pointer" />
//               <Twitter className="h-5 w-5 hover:text-white cursor-pointer" />
//               <Linkedin className="h-5 w-5 hover:text-white cursor-pointer" />
//               <Facebook className="h-5 w-5 hover:text-white cursor-pointer" />
//               <Slack className="h-5 w-5 hover:text-white cursor-pointer" />
//               <Youtube className="h-5 w-5 hover:text-white cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-400 text-center sm:flex sm:justify-between sm:text-left max-w-7xl mx-auto px-6">
//         <div className="flex items-center space-x-2 mb-4 sm:mb-0">
//           <p>
//             <a href="#" className="hover:text-white">© 2025 Abhishek Ahire</a>{" "}
//             <a href="#" className="hover:text-white sm:mb-0">— Designed for Smarter Money Management</a>{" "}
//             / <a href="#" className="hover:text-white">All rights reserved.</a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1b1f23] text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Row: Logo + Small Logo */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <span className="bg-gray-600 text-black font-bold px-3 py-1 text-lg tracking-widest">
              FINTRACK
            </span>
          </div>

          <div>
            <img
              src="/src/assets/logo.png"
              alt="logo"
              className="h-14 w-14 object-contain rounded-full"
            />
          </div>
        </div>

        {/* Middle Links Section */}
        <div className="text-sm text-gray-400 mt-6 space-y-1 text-center sm:text-left">
          <p>
            © 2025 FinTrack. All rights reserved. Financial trademarks belong to their respective owners.
          </p>

          <p className="flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-1">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <span className="hidden sm:block">|</span>

            <Link to="/about" className="hover:text-white">About Us</Link>
            <span className="hidden sm:block">|</span>

            <Link to="/contact" className="hover:text-white">Contact Us</Link>
            <span className="hidden sm:block">|</span>

            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
            <span className="hidden sm:block">|</span>

            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex items-center justify-center sm:justify-start space-x-6">
          <Facebook className="h-5 w-5 hover:text-white cursor-pointer" />
          <Twitter className="h-5 w-5 hover:text-white cursor-pointer" />
          <Linkedin className="h-5 w-5 hover:text-white cursor-pointer" />
          <Youtube className="h-5 w-5 hover:text-white cursor-pointer" />
        </div>

        {/* Developer Credit */}
        <div className="mt-6 text-center sm:text-left text-gray-500 text-xs">
          Developed by <span className="text-gray-300 font-semibold hover:text-white cursor-pointer">Abhishek Ahire</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
