import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Layout from "./pages/layout";
import Home from "./components/home";
import Admin from "./components/admin";
import Posts from "./components/posts";
import './App.css';

function App() {

  const [businesses, setBusinesses] = useState([
    { name: 'ABC Solutions', category: 'technology', image: 'https://clipground.com/images/placeholder-logo-5.png', 
      email: 'abc@example.com', address: '123 Main St, Cityville, State', website: 'www.abcsolutions.com' },
    { name: 'XYZ Tech', category: 'technology', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'xyz@example.com', address: '456 Elm St, Townsville, State', website: 'www.xyztech.com' },
    { name: 'Finance Wizards', category: 'finance', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'info@financewizards.com', address: '789 Oak St, Moneytown, State', website: 'www.financewizards.com' },
    { name: 'Hotel Paradise', category: 'hospitality', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'info@hotelparadise.com', address: '101 Pine Ave, Resortville, State', website: 'www.hotelparadise.com' },
    { name: 'Builders Inc.', category: 'construction', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'contact@buildersinc.com', address: '202 Cedar Blvd, Constructoville, State', website: 'www.buildersinc.com' },
    { name: 'Tech Innovators', category: 'technology', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'info@techinnovators.com', address: '789 Oak St, Villageton, State', website: 'www.techinnovators.com' },
    { name: 'Green Solutions', category: 'agriculture', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'info@greensolutions.com', address: '101 Pine Ave, Forestville, State', website: 'www.greensolutions.com' },
    { name: 'BluePrint Architects', category: 'construction', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'contact@blueprintarchitects.com', address: '202 Cedar Blvd, Designville, State', website: 'www.blueprintarchitects.com' },
    { name: 'Data Wizards', category: 'technology', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'info@datawizards.com', address: '303 Maple Dr, Datatown, State', website: 'www.datawizards.com' },
    { name: 'Infinite Solutions', category: 'technology', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'hello@infinitesolutions.com', address: '404 Birch Ln, Solutionville, State', website: 'www.infinitesolutions.com' },
    { name: 'Sunrise Cafes', category: 'fnb', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'info@sunrisecafes.com', address: '505 Cedar Ave, Breakfastown, State', website: 'www.sunrisecafes.com' },
    { name: 'Eco Builders', category: 'agriculture', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'contact@ecobuilders.com', address: '606 Oak Dr, Greenburg, State', website: 'www.ecobuilders.com' },
    { name: 'Tech Masters', category: 'technology', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'info@techmasters.com', address: '707 Pine Rd, Technoville, State', website: 'www.techmasters.com' },
    { name: 'Global Ventures', category: 'finance', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'hello@globalventures.com', address: '808 Elm Ct, Worldville, State', website: 'www.globalventures.com' },
    { name: 'Creative Minds', category: 'design', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'info@creativeminds.com', address: '909 Maple Pl, Imaginationland, State', website: 'www.creativeminds.com' },
    { name: 'Designers Guild', category: 'design', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'contact@designersguild.com', address: '1010 Cedar Ct, Styleville, State', website: 'www.designersguild.com' },
    { name: 'Adventure Tours', category: 'tourism', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'info@adventuretours.com', address: '1111 Oak Blvd, Exploreville, State', website: 'www.adventuretours.com' },
    { name: 'Foodie Delights', category: 'fnb', image: 'https://clipground.com/images/placeholder-logo-5.png',
      email: 'hello@foodiedelights.com', address: '1212 Pine Way, Gourmetown, State', website: 'www.foodiedelights.com' }
  ]);

  const posts = [
    { name: "ABC Solutions", title: "Seeking Investors", desc: "We are looking for potential investors to help us scale our technology solutions. With a proven track record and a strong team, we are poised for rapid growth." },
    { name: "BluePrint Architects", title: "Seeking Potential Collaboration", desc: "We are looking for event managers to collaborate in a project. The project will involve liaising with different vendors to ensure the event goes smoothly." },
    { name: "Sunrise Cafes", title: "Looking for Digital Marketing", desc: "We are looking for digital marketing companies that can help us be more visible and provide us with social media marketing." },
    { name: "Infinite Solutions", title: "Searching for Office Space", desc: "We are looking for an affordable office space that can fit up to 15 workstations near Lambak." },
    { name: "Global Ventures", title: "Investment Opportunities", desc: "We are looking to invest in agriculture businesses with high potential. We can provide funding and the necessary networking to accelerate your business to a global scale." },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home businesses={businesses} />} />
          <Route
            path="admin"
            element={<Admin businesses={businesses} setBusinesses={setBusinesses} />}
          />
          <Route path="posts" element={<Posts posts={posts}/>} />
          <Route path="Directory-system" element={<Home businesses={businesses} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
