import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">Informations sur l'équipe Crous</h1>
      <p className="mb-4 text-2xl font-light">
        <ul>
          <h3>Notre Mission et Vision</h3>
          <li>
            Mission : Fournir des solutions technologiques fiables, sécurisées
            et performantes pour faciliter le travail de tous les
            collaborateurs.
          </li>
          <li>
            Vision : Anticiper les besoins futurs (automatisation, intelligence
            artificielle, cloud) pour garder l'entreprise à la pointe de son
            secteur.
          </li>
        </ul>
        <ul>
          <h3>Nos 3 piliers :</h3>
          <li>
            Fiabilité : Garantir que les systèmes fonctionnent 24h/24 et 7j/7.
          </li>
          <li>
            Sécurité : Protéger les données de l'entreprise et de nos clients.
          </li>
          <li>
            Innovation : Développer de nouveaux outils pour améliorer la
            productivité.
          </li>
        </ul>
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Mise en page par :
        <a
          className="text-white"
          target="_blank"
          href="https://portofolio-ms-dev.netlify.app/"
        >
          Mouhamed Seye
        </a>
      </p>
    </div>
  );
};

export default About;
