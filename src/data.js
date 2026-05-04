import SearchableList from "./components/SearchableList";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";

const dataTeam = [
  {
    id: 1,
    name: " Djiby seck",
    email: "john.doe@example.com",
    avatar: savannaImg,
    bio: "Passionate about nature and wildlife conservation. Loves exploring the savanna and learning about its diverse ecosystem.",
    status: "junior",
    profile: "developpeur front-end  - React ",
  },
  {
    id: 2,
    name: "Mouhamed Seye",
    email: "mseye792@gmail.com",
    avatar: amazonImg,
    bio: `
       Passionné par la création d'expériences mobiles fluides et performantes, je suis développeur iOS et Android.
Mon expertise couvre l'ensemble du cycle de vie des applications, de la conception architecturale à la mise en production.
Je maîtrise les technologies natives et multiplateformes pour offrir des solutions robustes et évolutives.
J'affectionne particulièrement l'intégration de modèles d'intelligence artificielle et de vision par ordinateur sur mobile.
Mon approche technique garantit un traitement optimisé des données complexes tout en maintenant une interface réactive.
L'expérience utilisateur est au cœur de ma démarche, avec une attention rigoureuse portée à l'ergonomie et aux détails.
Je suis adepte du code propre, de l'optimisation des performances et des bonnes pratiques d'intégration continue.
Toujours en veille technologique, j'aime explorer de nouvelles architectures pour relever des défis techniques stimulants.
J'évolue aisément au sein d'équipes agiles, favorisant la collaboration étroite et le partage de connaissances.
Mon objectif est de transformer des concepts innovants en applications intelligentes qui impactent positivement le quotidien.
    `,
    status: "SENIOR",
    profile: " developpeur web/mobile - React Native ",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    avatar: caribbeanImg,
    bio: "Loves the vibrant colors and rich culture of the Caribbean. Enjoys water sports and exploring local markets.",
    status: "junior",
    profile: "php developpeur Laravel ",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    avatar: desertImg,
    bio: "Enjoys the tranquility of the desert and the beauty of its unique landscapes.",
    status: "junior",
    profile: "design iterateur de données",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    avatar: forestImg,
    bio: "Fascinated by the complexity of forest ecosystems and the importance of biodiversity.",
    status: "junior",
    profile: "developpeur front-end Vue ",
  },
  {
    id: 6,
    name: "Ousseynou Kane Diallo",
    email: "ousseynou.kane@example.com",
    avatar: savannaImg,
    bio: "Enjoys the beauty of the African savanna and its rich wildlife.",
    status: "Senior",
    profile: "Maintenance et support technique",
  },
];
export default dataTeam;
