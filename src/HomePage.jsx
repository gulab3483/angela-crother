import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      <div className="header">
        <img src="/images/shapeimage_1.png" alt="Orchid Header" className="header-img" />
        <h1 className="name-overlay">Angela Crothers MS, WHNP-BC</h1>
      </div>

      <div className="info-block">
        <h2>Holistic Women's Health Nurse Practitioner, Oregon Licensed Psilocybin Facilitator</h2>
        <p>For hormone consultations, gynecology and sexual medicine, call Willow Health to schedule. Most insurances accepted.</p>
        <p><strong>Willow Health • 1030 Willagillespie Eugene, OR 97401 • (541) 653-9158</strong></p>
      </div>

      <div className="content-block">
        <h3>Innovations in Sexual Medicine</h3>
        <p>I'm delighted to have launched Shockwave Therapy for erectile dysfunction/erectile enhancement in 2024. This safe technology uses painless sound waves to rejuvenate and improve blood flow to erections in men who have been screened and are good candidates to receive the intervention. Additionally, my personal favorite innovation for women in sexual medicine is using platelet rich plasma (PRP) otherwise known as the O-Shot or Orgasm Shot. O-Shot is a non-surgical procedure that utilizes a woman's restorative growth factors (from her own blood) to enhance her sexual pleasure, treat vaginal dryness, treat vulvar lichens sclerosis and improve some types of urinary incontinence.</p>

        <h3>Women's Health: Background and Philosophy of Care</h3>
        <p>I am a holistic and integrative women’s health nurse practitioner with over 30 years of focused service in women’s health and over 20 years of experience as a board-certified nurse practitioner. Specializing in gynecology, hormone balancing, mental health, sexual health and what I call “primary care light” is my life’s work.</p>

        <p>I earned my master’s degree in science from the University of Colorado at Denver Health Sciences Center (the birth place of the NP movement), a bachelor’s in nursing from Regis University in Denver and a bachelor’s in human services/counseling from National Luis University in Chicago. My varied leadership roles including clinician, teacher, sex educator, counselor, and researcher, have all been dedicated to improving the practice of medicine where your values matter. I’m inspired daily to put the care back in health care.</p>

        <p>I am a lifelong student of science and medicine, most passionately; herbalism, nutrition and functional medicine. Supporting women on their lifelong journey to health and vitality is a beautiful part of my life. In my free time I enjoy organic farming, singing to my very happy chickens, practicing yoga, dancing, hiking, experiencing nature, reading and connecting with my family and friends.</p>

        <h3>Psilocybin Facilitation: Background and Philosophy of Care</h3>
        <p>As a psilocybin facilitator I provide support and guidance for individuals/couples/groups who wish to use the hallucinogenic drug psilocybin otherwise known as magic mushrooms in a safe, legal and controlled environment. I will help you prepare for the journey, determine the appropriate dose, be present with you during the entirety of your trip and help you integrate the experience afterwards. Clients come to desire a journey with psilocybin for a variety of reasons but the most common reasons are: personal growth, spiritual growth, trauma resolution, seeking different perspectives, end of life matters, seeking embodiment and just plain fun.</p>

        <p>To inquire about my psilocybin facilitation services in Oregon email me at <a href="mailto:womyn1013@hotmail.com">womyn1013@hotmail.com</a>. Strictly, my psilocybin facilitation services are only available to be conducted in a state of Oregon licensed service center. The service center provides the legal psilocybin for you to consume on your journey day.</p>

        <blockquote>"If the only prayer you said was 'Thank You,' that would be enough."<br />—Meister Eckhart</blockquote>
      </div>

      <img src="/images/headshot.jpg" alt="Angela Crothers headshot" className="profile-img" />
    </div>
  );
};

export default HomePage;