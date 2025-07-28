import React from "react";
import HomePageCard from "../components/Cards/HomePageCard";

const Home2 = () => {
  const cards = [
    {
      img: "/images/hero2.avif",
      title: "Bombay High Court",
      points: ["Probate", "Letters of Administration with Will annexed.", "Letters of Administration", "Succession Certificate","Letters of Administration with Authenticated Copy of Will annexed"],
       link: "/form97",
    },
    {
      img: "/images/hero2.avif",
      title: "Delhi High Court",
      points: ["Step one", "Step two", "Final step"],
       link: "/",
    },
    {
      img: "/images/hero2.avif",
      title: "Demo",
      points: ["Item A", "Item B", "Item C"],
       link: "/",
    },
  ];

  return (
    <div className="md:px-32 px-6 py-10">
      <p className="text-2xl md:text-3xl mb-0 font-bold">
        Petition for Probate
      </p>
      <p className="text-lg font-semibold mb-6">Subheading</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <HomePageCard
            key={index}
            img={card.img}
            title={card.title}
            points={card.points}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home2;
