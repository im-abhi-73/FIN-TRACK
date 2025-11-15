import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const sampleTestimonials = [
 {
    name: "Amit Sharma",
    role: "Small Business Owner",
    image: "https://i.pravatar.cc/100?img=11",
    rating: 5,
    testimonial: "FinTrack made it so easy for me to manage daily expenses and keep my business cash flow clear."
  },
  {
    name: "Priya Nair",
    role: "Homemaker",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 4,
    testimonial: "Now I track my monthly budget effortlessly. FinTrack is very easy to use!"
  },
  {
    name: "Rohit Verma",
    role: "Freelancer",
    image: "https://i.pravatar.cc/100?img=13",
    rating: 5,
    testimonial: "Perfect app for freelancers like me to manage income and expenses smoothly."
  },
  {
    name: "Sneha Patil",
    role: "Student",
    image: "https://i.pravatar.cc/100?img=14",
    rating: 4,
    testimonial: "Helps me control my pocket money and monthly spending. Super useful!"
  },
  {
    name: "Arjun Singh",
    role: "Self-Employed",
    image: "https://i.pravatar.cc/100?img=15",
    rating: 5,
    testimonial: "FinTrack gave me complete clarity on where my money goes every month."
  },
  {
    name: "Kavya Menon",
    role: "Teacher",
    image: "https://i.pravatar.cc/100?img=16",
    rating: 5,
    testimonial: "Amazing app! I’ve started saving more ever since I began using FinTrack."
  },
  {
    name: "Sahil Gupta",
    role: "Retail Shop Owner",
    image: "https://i.pravatar.cc/100?img=17",
    rating: 4,
    testimonial: "Helps me separate personal and shop expenses easily. Great experience."
  },
  {
    name: "Neha Kapoor",
    role: "Common User",
    image: "https://i.pravatar.cc/100?img=18",
    rating: 5,
    testimonial: "Very simple, clean, and accurate. FinTrack keeps my finances disciplined."
  },
  {
    name: "Vikram Rao",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/100?img=19",
    rating: 5,
    testimonial: "A must-have app for anyone trying to track and grow their money."
  },
  {
    name: "Aishwarya Joshi",
    role: "Working Professional",
    image: "https://i.pravatar.cc/100?img=20",
    rating: 4,
    testimonial: "Helps me manage bills, savings, and expenses all in one place."
  },
  {
    name: "Manish Tiwari",
    role: "Delivery Partner",
    image: "https://i.pravatar.cc/100?img=21",
    rating: 5,
    testimonial: "Easy to understand and very helpful for daily expense tracking."
  }   
];

const TestimonialsSection = ({ testimonials = sampleTestimonials }) => {
  return (
    <div className="py-20 bg-purple-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
             Thousands trust FinTrack—now it’s your turn.
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Our users share how FinTrack makes money management effortless.
            </p>
          </div>

          <div className="mt-16">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                640: { slidesPerView: 1 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-purple-50 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="p-8">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          <img
                            className="h-12 w-12 rounded-full object-cover"
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            } fill-current`}
                          />
                        ))}
                      </div>
                      <blockquote className="mt-4">
                        <p className="text-gray-700 italic">
                          "{testimonial.testimonial}"
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;



// import { Star } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const TestimonialsSection = ({ testimonials }) => {
//   return (
//     <div className="py-20 bg-white overflow-hidden">
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative">
//           <div className="text-center">
//             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Trusted by Thousands of Users Worldwide.
//             </h2>
//             <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
//               Hear what our satisfied customers have to say about our cloud
//               solutions.
//             </p>
//           </div>

//           {/* Swiper Carousel */}
//           <div className="mt-16">
//             <Swiper
//               modules={[Autoplay, Pagination]}
//               spaceBetween={30}
//               slidesPerView={1}
//               loop={true}
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//              /*  pagination={{ clickable: true }} */
//               breakpoints={{
//                 1024: { slidesPerView: 3 },
//                 768: { slidesPerView: 2 },
//                 640: { slidesPerView: 1 },
//               }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
//                     <div className="p-8">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 h-12 w-12">
//                           <img
//                             className="h-12 w-12 rounded-full object-cover"
//                             src={testimonial.image}
//                             alt={testimonial.name}
//                           />
//                         </div>
//                         <div className="ml-4">
//                           <h4 className="text-lg font-bold text-gray-900">
//                             {testimonial.name}
//                           </h4>
//                           <p className="text-sm text-gray-600">
//                             {testimonial.role}, {testimonial.company}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="mt-4 flex items-center">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`h-5 w-5 ${
//                               i < testimonial.rating
//                                 ? "text-yellow-400"
//                                 : "text-gray-300"
//                             } fill-current`}
//                           />
//                         ))}
//                       </div>
//                       <blockquote className="mt-4">
//                         <p className="text-gray-700 italic">
//                           "{testimonial.testimonial}"
//                         </p>
//                       </blockquote>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TestimonialsSection;


// import { Star } from "lucide-react";

// const TestimonialsSection = ({testimonials}) => {        {/**{testimonials} */}
//     return (
//          <div className="py-20 bg-white overflow-hidden ">
//              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
//                   <div className="relative ">
//                        <div className="text-center ">
//                              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//                                     Trusted by Thousands of Users Worldwide.
//                              </h2>
//                                 <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
//                                     Hear what our satisfied customers have to say about our cloud solutions.
//                                 </p>

//                        </div>
//                        <div className="mt-16 grid gap-8 lg:grid-cols-3 ">
//                             {/* Testimonials would be mapped here in future */}
//                             {testimonials.map((testimonial, index) => (
//                                 <div key={index} className="bg-white  rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
//                                     <div className="p-8">
//                                         <div className="flex items-center">
//                                             <div className="flex-shrink-0 h-12 w-12">
//                                                 <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
//                                             </div>
//                                             <div className="ml-4">
//                                                 <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
//                                                 <p className="text-sm text-gray-600">{testimonial.role},{testimonial.company}</p>
//                                             </div>
//                                         </div>
//                                         <div className="mt-4 flex items-center">
//                                             {[...Array(5)].map((_, i) => (
//                                                 <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} />
//                                             ))}
//                                         </div>
//                                         <blockquote className="mt-4 ">
//                                             <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
//                                         </blockquote>
//                                     </div>
//                                 </div>
//                             ))}
//                        </div>
//                   </div>
//              </div>
//          </div>
//     )
// }   
// export default TestimonialsSection;


