import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-6">
      <div className="max-w-5xl text-center">

        {/* Heading Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          About <span className="text-indigo-600">FinTrack</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          FinTrack is your intelligent companion for managing income, expenses, savings, 
          and financial goals.  
          We aim to make money management simple, smart, and stress-free by providing
          powerful dashboards, insights, and tools designed for everyone.
        </p>

        {/* Features Section */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 text-center">
            <h3 className="font-semibold text-2xl text-gray-800 mb-3">📊 Simplicity</h3>
            <p className="text-gray-600">
              Track your finances effortlessly with clean dashboards and intuitive UI.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 text-center">
            <h3 className="font-semibold text-2xl text-gray-800 mb-3">🔒 Security</h3>
            <p className="text-gray-600">
              Your financial data is encrypted, private, and always protected.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 text-center">
            <h3 className="font-semibold text-2xl text-gray-800 mb-3">🚀 Growth</h3>
            <p className="text-gray-600">
              Make smart decisions and achieve long-term financial success.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 bg-white p-10 shadow-md rounded-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At FinTrack, our mission is to empower individuals and families to take control 
            of their financial journey. We believe that finance should be simple, transparent, 
            and accessible for everyone — whether you're a student, employee, entrepreneur, 
            or investor.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mt-12 bg-indigo-600 text-white p-10 shadow-lg rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            We envision a world where everyone can manage money confidently,
            stay financially secure, and build a brighter future without stress.
          </p>
        </div>

      </div>

      <div>
                {/* 🌟 FOOTER ADDED BELOW */}
        <footer className="text-center py-4 text-sm text-gray-500 border-t max-w-7xl mx-auto border border-gray-400 p-4 mt-6">
          © {new Date().getFullYear()} FinTrack. All rights reserved.
        </footer>
      </div>
      
    </div>
  );
};

export default AboutUs;
