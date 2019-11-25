import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./compon/navbar";
import Intro from "./compon/Introduction";
import Helps from "./compon/Benefits";
import Sponsor from "./compon/Spons";
import Midel from "./compon/Description";
import Foote from "./compon/Countrys";
const menuitems = [
  { title: "About us" },
  { title: "Career" },
  {
    title: "Departments",
    sousitems: [
      "Marketing & PR",
      "Cusrtomer Success & sales",
      "IT, Product, Design & UX",
      "Finance & Administration",
      "HR & more"
    ]
  }
];
const arr = [
  {
    title: "for patient",
    description:
      "Find a doctor, book a visit and solve any health-related doubt",
    country: [
      "ARGENTINA",
      "AUSTRALIA",
      "BRAZIL",
      "CHILE",
      "COLOMBIA",
      "CZECH",
      "FRANCE",
      "ITALY",
      "MEXICO",
      "PERU",
      "POLAND",
      "PORTUGAL",
      "SPAIN",
      "TURKEY",
      "UK"
    ],
    image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    class: "forpation"
  },
  {
    title: "For doctors",
    description: "Save time managing visits and cut no-shows by half",
    image: "https://www.docplanner.com/img/screen-saas@2x.png",
    country: null,
    class: "fordocter"
  }
];
const sponsors = [
  { image: "https://crmodus.pl/wp-content/uploads/2018/03/znanylekarz.png" },
  {
    image: "https://www.doctoralia.com.br/img/br/logo/logo-default-br.svg?v=4"
  },
  {
    image:
      "https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/4818/assets/40128/miodottore-mktpl-logo-turquoise.png"
  },
  {
    image: "https://uzman.doktortakvimi.com/hubfs/doktortakvimi-yeni-logo.jpg"
  },
  {
    image:
      "https://acresia.com/media/k2/items/cache/51a3864ed3ad604d2340c3f8fe249f94_L.jpg"
  }
];
const main = [
  {
    image: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    description:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
  },
  {
    image: "https://www.docplanner.com/img/visits.png",
    title: "1.5 million appointments",
    description: "booked last month"
  },
  {
    image: "https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    description: "visit us every month"
  },
  {
    image: "https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    description: "trust in our solutions"
  }
];
const footer = [
  {
    image: "https://www.docplanner.com/images/warsaw.png",
    titel: "Warsaw",
    description: <button className="pict">"SEE OPENINGS"</button>
  },
  {
    image: "https://www.docplanner.com/images/barcelona.png",
    titel: "Barcelona",
    description: <button className="pict">"SEE OPENINGS"</button>
  },
  {
    image: "https://www.docplanner.com/images/istanbul.png",
    titel: "Istanbul",
    description: <button className="pict">"SEE OPENINGS"</button>
  },
  {
    image: "https://www.docplanner.com/images/rome.png",
    titel: "Rome",
    description: <button className="pict">"SEE OPENINGS"</button>
  },
  {
    image: "https://www.docplanner.com/images/mexico-city.png",
    titel: "Mexico City",
    description: <button className="pict">"SEE OPENINGS"</button>
  },
  {
    image: "https://www.docplanner.com/images/curitiba.png",
    titel: "Curitiba",
    description: <button className="pict">"SEE OPENINGS"</button>
  }
];

function App() {
  return (
    <div>
      <div>
        <Nav item={menuitems} />
      </div>
      <div>
        <Intro />
      </div>
      <div>
        <Helps item={arr} />
      </div>
      <div>
        <Sponsor item={sponsors} />
      </div>
      <div>
        <Midel item={main} />
      </div>
      <div className="mid">
        <h2 className="titl">
          Improve the lives of millions.
          <br />
          Change yours forever
        </h2>
        <p>
          More than 1000 team mates share our same vision, goals and passion
          <br />. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City
          and
          <br /> Curitiba, our search for great talent never stops.
        </p>
      </div>
      <div>
        <Foote item={footer} />
      </div>
      <h3 className="lasfooter">
        We are leaders in 10 countries: Poland, Turkey, Spain, Italy, Czech
        Republic, Mexico, Colombia, Brazil, Argentina and Chile
        <br />
        This site uses cookies to deliver services in accordance with this
        Privacy Policy.
        <br /> You can specify the conditions for storing or accessing cookies
        on your browser. www.docplanner.com © 2019
      </h3>
    </div>
  );
}
export default App;
