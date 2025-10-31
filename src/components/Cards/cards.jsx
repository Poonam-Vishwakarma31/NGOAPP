import React from "react";



export default function ActionCards({onDonateClick}) {
const cards = [
{
key: "volunteer",
title: "Volunteer",
desc: "Join our team and help animals find loving homes. Spend a few hours a week to make a big difference.",
img: "/src/assets/volunteer.webp",
cta: "Sign Up",
onClick: () => alert("Navigate to Volunteer signup / open modal")
},
{
key: "donate",
title: "Donate",
desc: "Support our shelter with a one-time or monthly donation. Every contribution helps with food and medical care.",
img: "/src/assets/donate.webp",
cta: "Donate Now",
onClick: () => onDonateClick(),
},
{
key: "adopt",
title: "Adopt",
desc: "Looking for a furry friend? Browse available animals and give one a forever home.",
img: "/src/assets/adopt.webp",
cta: "View Pets",
onClick: () => alert("Navigate to Adopt listings")
}
];


return (
    <div  className="w-full  bg-[#FDFCFB]">
<section className="max-w-6xl mx-auto px-4 mt-20 py-12 bg-gray-50 dark:bg-gray-800">
<h2 style={{ color: '#e7820eff' }} className="text-3xl md:text-4xl mb-4 font-semibold mb-6 text-center">Get Involved</h2>


<div className="grid gap-6 md:grid-cols-3">
{cards.map(card => (
<article
key={card.key}
className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300"
aria-labelledby={`${card.key}-title`}
>
{/* background image */}
<div
className="h-64 md:h-72 bg-cover bg-center"
style={{ backgroundImage: `url(${card.img})` }}
role="img"
aria-label={card.title}
/>


{/* overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex flex-col justify-end p-6">
<div className="backdrop-blur-sm text-white">
<h3 id={`${card.key}-title`} className="text-xl font-bold mb-2">
{card.title}
</h3>
<p className="text-sm mb-4">{card.desc}</p>
<div className="flex gap-3">
<button
onClick={card.onClick}
className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/90 text-black font-medium shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
aria-label={`${card.cta} for ${card.title}`}
>
{card.cta}
</button>


<a
href="#"
className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-transparent border border-white/40 text-white text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
aria-label={`Learn more about ${card.title}`}
>
Learn more
</a>
</div>
</div>
</div>
</article>
))}
</div>
</section>
</div>
);
}

