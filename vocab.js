// Expanded vocab by category (no placeholders).
const VOCAB = {
  "Verbs (with conjugations)": [
    { english: "to be", french: "être" },
    { english: "I am", french: "je suis" }, { english: "you are", french: "tu es" },
    { english: "he is", french: "il est" }, { english: "she is", french: "elle est" },
    { english: "we are", french: "nous sommes" }, { english: "you are (pl.)", french: "vous êtes" },
    { english: "they are", french: "ils sont" },
    { english: "I was", french: "j'étais" }, { english: "we were", french: "nous étions" }, { english: "they were", french: "ils étaient" },
    { english: "I will be", french: "je serai" }, { english: "we will be", french: "nous serons" }, { english: "they will be", french: "ils seront" },

    { english: "to have", french: "avoir" },
    { english: "I have", french: "j'ai" }, { english: "you have", french: "tu as" },
    { english: "he has", french: "il a" }, { english: "she has", french: "elle a" },
    { english: "we have", french: "nous avons" }, { english: "you have (pl.)", french: "vous avez" },
    { english: "they have", french: "ils ont" },
    { english: "I had", french: "j'ai eu" }, { english: "we had", french: "nous avons eu" }, { english: "they had", french: "ils avaient" },
    { english: "I will have", french: "j'aurai" }, { english: "we will have", french: "nous aurons" },

    { english: "to go", french: "aller" },
    { english: "I go / I am going", french: "je vais" }, { english: "you go / you are going", french: "tu vas" },
    { english: "he goes / he is going", french: "il va" }, { english: "we go / we are going", french: "nous allons" },
    { english: "you go / you are going (pl.)", french: "vous allez" }, { english: "they go / they are going", french: "ils vont" },
    { english: "I went", french: "je suis allé" }, { english: "we went", french: "nous sommes allés" },
    { english: "I will go", french: "j'irai" }, { english: "we will go", french: "nous irons" },

    { english: "to do / to make", french: "faire" },
    { english: "I do / I am doing", french: "je fais" }, { english: "you do / you are doing", french: "tu fais" },
    { english: "he does / he is doing", french: "il fait" }, { english: "we do / we are doing", french: "nous faisons" },
    { english: "you do / you are doing (pl.)", french: "vous faites" }, { english: "they do / they are doing", french: "ils font" },
    { english: "I did", french: "j'ai fait" }, { english: "we did", french: "nous avons fait" },
    { english: "I will do", french: "je ferai" }, { english: "we will do", french: "nous ferons" },

    { english: "to want", french: "vouloir" }, { english: "I want", french: "je veux" }, { english: "we want", french: "nous voulons" }, { english: "I wanted", french: "j'ai voulu" }, { english: "I will want", french: "je voudrai" },
    { english: "to need", french: "avoir besoin de" }, { english: "I need", french: "j'ai besoin de" },
    { english: "to know", french: "savoir" }, { english: "I know", french: "je sais" }, { english: "I knew", french: "je savais" }, { english: "I will know", french: "je saurai" },
    { english: "to see", french: "voir" }, { english: "I see", french: "je vois" }, { english: "I saw", french: "j'ai vu" }, { english: "I will see", french: "je verrai" },
    { english: "to come", french: "venir" }, { english: "I come / I am coming", french: "je viens" }, { english: "we come / we are coming", french: "nous venons" }, { english: "I came", french: "je suis venu" }, { english: "I will come", french: "je viendrai" },
    { english: "to put", french: "mettre" }, { english: "I put / I am putting", french: "je mets" }, { english: "I put (past)", french: "j'ai mis" }, { english: "I will put", french: "je mettrai" }
  ],

  "Nouns: Around Town": [
    { english: "city", french: "ville" }, { english: "village", french: "village" }, { english: "market", french: "marché" },
    { english: "street", french: "rue" }, { english: "square", french: "place" }, { english: "park", french: "parc" },
    { english: "bank", french: "banque" }, { english: "post office", french: "poste" }, { english: "hospital", french: "hôpital" },
    { english: "police station", french: "commissariat" }, { english: "restaurant", french: "restaurant" }, { english: "hotel", french: "hôtel" },
    { english: "museum", french: "musée" }, { english: "church", french: "église" }, { english: "pharmacy", french: "pharmacie" },
    { english: "bakery", french: "boulangerie" }, { english: "butcher", french: "boucherie" }, { english: "library", french: "bibliothèque" },
    { english: "cinema", french: "cinéma" }, { english: "stadium", french: "stade" }, { english: "town hall", french: "mairie" },
    { english: "bridge", french: "pont" }, { english: "riverbank", french: "berge" }, { english: "subway", french: "métro" }
  ],

  "Nouns: At Home": [
    { english: "house", french: "maison" }, { english: "apartment", french: "appartement" }, { english: "kitchen", french: "cuisine" },
    { english: "bathroom", french: "salle de bain" }, { english: "bedroom", french: "chambre" }, { english: "living room", french: "salon" },
    { english: "garden", french: "jardin" }, { english: "balcony", french: "balcon" }, { english: "garage", french: "garage" },
    { english: "bed", french: "lit" }, { english: "sofa", french: "canapé" }, { english: "table", french: "table" },
    { english: "chair", french: "chaise" }, { english: "window", french: "fenêtre" }, { english: "door", french: "porte" },
    { english: "ceiling", french: "plafond" }, { english: "floor", french: "sol" }, { english: "wall", french: "mur" },
    { english: "fridge", french: "frigo" }, { english: "oven", french: "four" }, { english: "sink", french: "évier" },
    { english: "shower", french: "douche" }, { english: "toilet", french: "toilettes" }, { english: "lamp", french: "lampe" }
  ],

  "Nouns: Directions": [
    { english: "left", french: "gauche" }, { english: "right", french: "droite" }, { english: "straight ahead", french: "tout droit" },
    { english: "near", french: "près" }, { english: "far", french: "loin" }, { english: "north", french: "nord" },
    { english: "south", french: "sud" }, { english: "east", french: "est" }, { english: "west", french: "ouest" },
    { english: "intersection", french: "carrefour" }, { english: "roundabout", french: "rond-point" }, { english: "crosswalk", french: "passage piéton" },
    { english: "bridge", french: "pont" }, { english: "tunnel", french: "tunnel" }, { english: "sign", french: "panneau" },
    { english: "map", french: "carte" }, { english: "address", french: "adresse" }, { english: "corner", french: "coin" }
  ],

  "Nouns: Food": [
    { english: "bread", french: "pain" }, { english: "baguette", french: "baguette" }, { english: "croissant", french: "croissant" },
    { english: "cheese", french: "fromage" }, { english: "butter", french: "beurre" }, { english: "milk", french: "lait" },
    { english: "apple", french: "pomme" }, { english: "orange", french: "orange" }, { english: "banana", french: "banane" },
    { english: "meat", french: "viande" }, { english: "chicken", french: "poulet" }, { english: "fish", french: "poisson" },
    { english: "vegetables", french: "légumes" }, { english: "salad", french: "salade" }, { english: "soup", french: "soupe" },
    { english: "water", french: "eau" }, { english: "wine", french: "vin" }, { english: "beer", french: "bière" },
    { english: "coffee", french: "café" }, { english: "tea", french: "thé" }, { english: "sugar", french: "sucre" }, { english: "salt", french: "sel" },
    { english: "pepper", french: "poivre" }, { english: "egg", french: "œuf" }, { english: "rice", french: "riz" }
  ],

  "Nouns: Animals": [
    { english: "dog", french: "chien" }, { english: "cat", french: "chat" }, { english: "bird", french: "oiseau" },
    { english: "horse", french: "cheval" }, { english: "cow", french: "vache" }, { english: "sheep", french: "mouton" },
    { english: "pig", french: "cochon" }, { english: "chicken", french: "poulet" }, { english: "duck", french: "canard" },
    { english: "goat", french: "chèvre" }, { english: "rabbit", french: "lapin" }, { english: "mouse", french: "souris" },
    { english: "bear", french: "ours" }, { english: "wolf", french: "loup" }, { english: "fox", french: "renard" },
    { english: "fish (animal)", french: "poisson" }, { english: "bee", french: "abeille" }, { english: "butterfly", french: "papillon" }
  ],

  "Nouns: Technology": [
    { english: "computer", french: "ordinateur" }, { english: "laptop", french: "ordinateur portable" }, { english: "phone", french: "téléphone" },
    { english: "smartphone", french: "smartphone" }, { english: "tablet", french: "tablette" }, { english: "internet", french: "internet" },
    { english: "website", french: "site web" }, { english: "email", french: "email" }, { english: "keyboard", french: "clavier" },
    { english: "mouse", french: "souris" }, { english: "screen", french: "écran" }, { english: "printer", french: "imprimante" },
    { english: "battery", french: "batterie" }, { english: "charger", french: "chargeur" }, { english: "cable", french: "câble" },
    { english: "software", french: "logiciel" }, { english: "password", french: "mot de passe" }, { english: "file", french: "fichier" },
    { english: "folder", french: "dossier" }, { english: "download", french: "télécharger" }, { english: "upload", french: "téléverser" }
  ]
};
function getPairsForCategory(catName) {
  const list = VOCAB[catName] || [];
  const seen = new Set(); const out = [];
  for (const item of list) { const key = `${item.english}|${item.french}`.toLowerCase();
    if (!seen.has(key)) { seen.add(key); out.push(item); } }
  return out;
}
function getCategories() { return Object.keys(VOCAB); }
