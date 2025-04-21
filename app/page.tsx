"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjWuSTj0zRnCpRGH_Pmfuqfv4GWL2Gup2wQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXKZsltR0a6i4iD6NvsL7YXg5-8nry3QlXA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDPtRqtfNQupzzSQp2F5ZgTc7GtYyjk1nhtA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQassaXz3hSmc94uAJgySxNMqCY-_zIM3yx1Peq8TDWCx17bslB_ZvkVkr_eeGlpFTfooY&usqp=CAU",
];

export default function HomePage() {
  const router = useRouter();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex % images.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const moveSlide = (direction: number) => {
    setIndex(
      (prevIndex) => (prevIndex + direction + images.length) % images.length
    );
  };

  return (
    <div className="bg-gradient-to-b from-white to-violet-100 min-h-screen p-5">
      <nav className="flex justify-between items-center p-5 bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold text-violet-700">
          National Institute of Technology Jamshedpur
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7d/National_Institute_of_Technology%2C_Jamshedpur_Logo.png"
          alt="NIT JSR Logo"
          className="w-24"
        />
      </nav>

      <div className="relative w-4/5 mx-auto overflow-hidden border-4 border-violet-300 rounded-2xl p-2 bg-white mt-6 shadow-xl">
        <Button
          onClick={() => moveSlide(-1)}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-violet-600 text-white rounded-full"
        >
          &#10094;
        </Button>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Campus"
              className="h-[70vh] w-full rounded-xl object-cover"
            />
          ))}
        </div>
        <Button
          onClick={() => moveSlide(1)}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-violet-600 text-white rounded-full"
        >
          &#10095;
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 my-10">
        {[
          {
            title: "For Students",
            icon: <GraduationCap className="text-violet-700 w-10 h-10" />,
            onClick: () => router.push("/student/login"),
          },
          {
            title: "For Faculty",
            icon: <Users className="text-violet-700 w-10 h-10" />,
            onClick: () => router.push("/faculty/login"),
          },
          {
            title: "For Administrator",
            icon: <Settings className="text-violet-700 w-10 h-10" />,
            onClick: () => router.push("/admin/login"),
          },
        ].map((item, i) => (
          <Card
            key={i}
            className="w-80 text-center hover:bg-violet-50 cursor-pointer"
            onClick={item.onClick}
          >
            <CardContent className="flex flex-col items-center p-6">
              {item.icon}
              <p className="text-violet-700 font-semibold text-lg mt-3">
                {item.title}
              </p>
              <p className="mt-2 text-gray-600">
                Find all resources for {item.title.toLowerCase()} in one place!
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-violet-700 text-white p-10 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold">NIT Jamshedpur by the Numbers</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[
              { icon: "👨‍🎓", text: "2,105 Undergraduate Students" },
              { icon: "🎓", text: "4,112 Postgraduate Students" },
              { icon: "🔬", text: "746 MS Research Scholars" },
              { icon: "📖", text: "2,963 PhD Research Scholars" },
              { icon: "👨‍🏫", text: "591 Faculty" },
              { icon: "👥", text: "677 Staff" },
              { icon: "🏅", text: "146 Patents" },
              { icon: "📊", text: "829 Projects" },
            ].map((stat, i) => (
              <p
                key={i}
                className="text-lg font-medium flex items-center gap-2"
              >
                <span>{stat.icon}</span> {stat.text}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 text-white p-10 mt-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold">Departments</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {[
              "Aerospace Engineering",
              "Applied Mechanics",
              "Biotechnology",
              "Chemical Engineering",
              "Chemistry",
              "Civil Engineering",
              "Computer Science and Engineering",
              "Data Science & Artificial Intelligence",
              "Electrical Engineering",
              "Engineering Design",
              "Humanities and Social Sciences",
              "Management Studies",
              "Mathematics",
              "Mechanical Engineering",
              "Medical Science and Technology",
              "Metallurgical and Materials Engineering",
              "Ocean Engineering",
              "Physics",
            ].map((dept, i) => (
              <p key={i} className="text-lg font-medium">
                {dept}
              </p>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white text-center p-5 mt-10 rounded-xl shadow-md">
        <p>&copy; 2025 NIT Jamshedpur. All rights reserved.</p>
      </footer>
    </div>
  );
}
