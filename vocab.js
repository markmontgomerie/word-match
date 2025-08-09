// Vocab grouped by requested categories.
// Expand these arrays freely with more items as you go.
const VOCAB = {
  "Verbs (with conjugations)": [
    { english: "to be", french: "être" },
    { english: "I am", french: "je suis" },
    { english: "you are", french: "tu es" },
    { english: "he is", french: "il est" },
    { english: "she is", french: "elle est" },
    { english: "we are", french: "nous sommes" },
    { english: "you are (pl.)", french: "vous êtes" },
    { english: "they are", french: "ils sont" },
    { english: "I was", french: "j'étais" },
    { english: "we were", french: "nous étions" },
    { english: "they were", french: "ils étaient" },
    { english: "I will be", french: "je serai" },
    { english: "we will be", french: "nous serons" },
    { english: "they will be", french: "ils seront" },

    { english: "to have", french: "avoir" },
    { english: "I have", french: "j'ai" },
    { english: "you have", french: "tu as" },
    { english: "he has", french: "il a" },
    { english: "she has", french: "elle a" },
    { english: "we have", french: "nous avons" },
    { english: "you have (pl.)", french: "vous avez" },
    { english: "they have", french: "ils ont" },
    { english: "I had", french: "j'ai eu" },
    { english: "we had", french: "nous avons eu" },
    { english: "I will have", french: "j'aurai" },
    { english: "we will have", french: "nous aurons" },

    { english: "to go", french: "aller" },
    { english: "I go / I am going", french: "je vais" },
    { english: "you go / you are going", french: "tu vas" },
    { english: "he goes / he is going", french: "il va" },
    { english: "we go / we are going", french: "nous allons" },
    { english: "you go / you are going (pl.)", french: "vous allez" },
    { english: "they go / they are going", french: "ils vont" },
    { english: "I went", french: "je suis allé" },
    { english: "we went", french: "nous sommes allés" },
    { english: "I will go", french: "j'irai" },
    { english: "we will go", french: "nous irons" },

    { english: "to eat", french: "manger" },
    { english: "I eat / I am eating", french: "je mange" },
    { english: "you eat / you are eating", french: "tu manges" },
    { english: "he eats / he is eating", french: "il mange" },
    { english: "we eat / we are eating", french: "nous mangeons" },
    { english: "you eat / you are eating (pl.)", french: "vous mangez" },
    { english: "they eat / they are eating", french: "ils mangent" },
    { english: "I ate", french: "j'ai mangé" },
    { english: "we ate", french: "nous avons mangé" },
    { english: "I will eat", french: "je mangerai" },
    { english: "we will eat", french: "nous mangerons" },

    { english: "to make / to do", french: "faire" },
    { english: "I do / I am doing", french: "je fais" },
    { english: "you do / you are doing", french: "tu fais" },
    { english: "he does / he is doing", french: "il fait" },
    { english: "we do / we are doing", french: "nous faisons" },
    { english: "you do / you are doing (pl.)", french: "vous faites" },
    { english: "they do / they are doing", french: "ils font" },
    { english: "I did", french: "j'ai fait" },
    { english: "we did", french: "nous avons fait" },
    { english: "I will do", french: "je ferai" },
    { english: "we will do", french: "nous ferons" }
  ],

  "Nouns: Around Town": [
    { english: "city", french: "ville" },
    { english: "market", french: "marché" },
    { english: "street", french: "rue" },
    { english: "square", french: "place" },
    { english: "park", french: "parc" },
    { english: "bank", french: "banque" },
    { english: "post office", french: "poste" },
    { english: "hospital", french: "hôpital" },
    { english: "police station", french: "commissariat" },
    { english: "restaurant", french: "restaurant" },
    { english: "hotel", french: "hôtel" },
    { english: "museum", french: "musée" },
    { english: "church", french: "église" },
    { english: "shop", french: "magasin" }
  ],

  "Nouns: At Home": [
    { english: "house", french: "maison" },
    { english: "apartment", french: "appartement" },
    { english: "kitchen", french: "cuisine" },
    { english: "bathroom", french: "salle de bain" },
    { english: "bedroom", french: "chambre" },
    { english: "living room", french: "salon" },
    { english: "bed", french: "lit" },
    { english: "table", french: "table" },
    { english: "chair", french: "chaise" },
    { english: "window", french: "fenêtre" },
    { english: "door", french: "porte" },
    { english: "floor", french: "sol" },
    { english: "wall", french: "mur" }
  ],

  "Nouns: Directions": [
    { english: "left", french: "gauche" },
    { english: "right", french: "droite" },
    { english: "straight ahead", french: "tout droit" },
    { english: "near", french: "près" },
    { english: "far", french: "loin" },
    { english: "north", french: "nord" },
    { english: "south", french: "sud" },
    { english: "east", french: "est" },
    { english: "west", french: "ouest" },
    { english: "intersection", french: "carrefour" },
    { english: "bridge", french: "pont" },
    { english: "river", french: "rivière" }
  ],

  "Nouns: Food": [
    { english: "bread", french: "pain" },
    { english: "cheese", french: "fromage" },
    { english: "apple", french: "pomme" },
    { english: "meat", french: "viande" },
    { english: "fish", french: "poisson" },
    { english: "vegetables", french: "légumes" },
    { english: "fruit", french: "fruit" },
    { english: "water", french: "eau" },
    { english: "wine", french: "vin" },
    { english: "beer", french: "bière" },
    { english: "coffee", french: "café" },
    { english: "tea", french: "thé" },
    { english: "sugar", french: "sucre" },
    { english: "salt", french: "sel" }
  ],

  "Nouns: Animals": [
    { english: "dog", french: "chien" },
    { english: "cat", french: "chat" },
    { english: "bird", french: "oiseau" },
    { english: "horse", french: "cheval" },
    { english: "cow", french: "vache" },
    { english: "sheep", french: "mouton" },
    { english: "pig", french: "cochon" },
    { english: "chicken", french: "poulet" },
    { english: "duck", french: "canard" },
    { english: "fish (animal)", french: "poisson" }
  ],

  "Nouns: Technology": [
    { english: "computer", french: "ordinateur" },
    { english: "phone", french: "téléphone" },
    { english: "internet", french: "internet" },
    { english: "email", french: "email" },
    { english: "keyboard", french: "clavier" },
    { english: "mouse", french: "souris" },
    { english: "screen", french: "écran" },
    { english: "printer", french: "imprimante" },
    { english: "battery", french: "batterie" },
    { english: "charger", french: "chargeur" }
  ]
};

function getPairsForCategory(catName) {
  const list = VOCAB[catName] || [];
  const seen = new Set();
  const out = [];
  for (const item of list) {
    if (!seen.has(item.french)) {
      seen.add(item.french);
      out.push(item);
    }
  }
  return out;
}

function getCategories() {
  return Object.keys(VOCAB);
}
