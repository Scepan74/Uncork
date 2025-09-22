import ornellaia from "../assets/img/bottles/ornellaia.png";
import PetitChablis from "../assets/img/bottles/PetitChablis.png";
import BaroloGaja from "../assets/img/bottles/BaroloGaja.png";
import CatenaZapata from "../assets/img/bottles/CatenaZapata.png";
import Chablis from "../assets/img/bottles/Chablis.png";
import ChevalBlanc from "../assets/img/bottles/ChevalBlanc.png";
import ChateauMargaux from "../assets/img/bottles/ChateauMargaux.png";
import Chateauneuf from "../assets/img/bottles/Chateauneuf.png";
import CasilleroDelDiablo from "../assets/img/bottles/CasilleroDelDiablo.png";
import OpusOne from "../assets/img/bottles/OpusOne.png";
import Insignia from "../assets/img/bottles/Insignia.png";
import KoonungaHill from "../assets/img/bottles/KoonungaHill.png";
import Masseto from "../assets/img/bottles/Masseto.png";
import Petrus from "../assets/img/bottles/Petrus.png";
import Biserno from "../assets/img/bottles/Biserno.png";
import Tignanello from "../assets/img/bottles/Tignanello.png";
import Sassicaia from "../assets/img/bottles/Sassicaia.png";
import Solaia from "../assets/img/bottles/Solaia.png";
import Amarone from "../assets/img/bottles/Amarone.png";
import CloudyBay from "../assets/img/bottles/CloudyBay.png";
import PouillyFume from "../assets/img/bottles/PouillyFume.png";
import TerrazasMalbec from "../assets/img/bottles/TerrazasMalbec.png";
import Echezeaux from "../assets/img/bottles/Echezeaux.png";
import Charlemagne from "../assets/img/bottles/Charlemagne.png";
import Warwick from "../assets/img/bottles/Warwick.png";

const wines = [
  {
    id: 1,
    image: `${ornellaia}`,
    name: "Ornellaia",
    region: "Bolgheri",
    vintage: "1985",
    price: "299.9",
    text: "Lavender, ripe blackcurrants, black cherries and flowers in the nose. It’s full-bodied with firm, silky tannins, providing brightness and focus.",
  },
  {
    id: 2,
    image: `${PetitChablis}`,
    name: "Petit Chablis",
    region: "Moreau & Fils",
    vintage: "2013",
    price: "34.49",
    text: "Brisk fresh yellow, smoky bacon note, and a smoky graphite note, though very pure on the palate, full of fruit, extremely long. Drink from 2023-2025.",
  },
  {
    id: 3,
    image: `${BaroloGaja}`,
    name: "Barolo",
    region: "Gaja",
    vintage: 2019,
    price: "429.99",
    text: "Citrus notes followed by hints of cedar and spices. Complex aromas of juniper, cherry, and ripe plum. Marzipan, sweet spices, turmeric, and licorice from the wood.",
  },
  {
    id: 4,
    image: `${CatenaZapata}`,
    name: "Nicolas Catena Zapata",
    region: "Mendoza",
    vintage: 2020,
    price: "114.99",
    text: "Color is deep purple with bluish-black tones. Aromas of blackberries, black cherries, black plums and hints of green olive and a stony minerality. Also red currant, eucalyptus, and black pepper. ",
  },
  {
    id: 5,
    image: `${Chablis}`,
    name: "Chablis",
    region: "Domaine William Fevre",
    vintage: 2021,
    price: "42.99",
    text: "Very fresh notes of citrus and stone fruit. Mineral notes that are typical of the appellation. Pair with fish dishes, grilled or in a light sauce; various seafood, oysters and sushi.",
  },
  {
    id: 6,
    image: `${ChevalBlanc}`,
    name: "Cheval Blanc",
    region: "Chateau Cheval Blanc",
    vintage: 2022,
    price: "669.99",
    text: "Aromas of mulberries, cherries and wild berries, mint, orange zest, pencil lead, exotic spices. Medium to full-bodied, velvety, layered, lively acids and a long perfumed finish. ",
  },
  {
    id: 7,
    image: `${ChateauMargaux}`,
    name: "Chateau Margaux",
    region: "Chateau Margaux",
    vintage: 2016,
    price: "709.99",
    text: "Aromas of crème de cassis, dark berries, violets, burning embers, tea and exotic spices. Full-bodied, deep and layered, it's rich, velvety, with a bright core of fruit and a long, heady finish.",
  },
  {
    id: 8,
    image: `${Chateauneuf}`,
    name: "Chateauneuf-du-Pape",
    region: "Pierre Amadieu",
    vintage: 2017,
    price: "89.99",
    text: "Aromas of wild berries, dried herbs, leather, roasted meat and stones. It’s full-bodied with fine, firm tannins. Complex and velvety with lots of cherry character and dried herbs towards the finish. ",
  },
  {
    id: 9,
    image: `${CasilleroDelDiablo}`,
    name: "Casillero del Diablo",
    region: "Concha y Toro",
    vintage: 2017,
    price: "12.99",
    text: "Intense and deep ruby red. Aromas of berries, plums and black cherries give way to light touches of vanilla and dark chocolate. Black plums and spices stands out, with good structure and firm tannins.",
  },
  {
    id: 10,
    image: `${OpusOne}`,
    name: "Opus One",
    region: "Mondavi & Rothschild",
    vintage: 2019,
    price: "389.95",
    text: "Aromas of dark fruit, plum, blueberry, black currant, herbs, espresso, and cocoa. The fresh acidity with mineral undertones and dark chocolate bitterness on the finish.",
  },
  {
    id: 11,
    image: `${Insignia}`,
    name: "Insignia",
    region: "Joseph Phelps",
    vintage: 2019,
    price: "324.95",
    text: "Opens with perfumed floral, dark fruit, anise and cigar box aromatics. Deep and elegant palate with blackberry, mocha and black cherry. The seamless tannin structure and balance culminate in lengthy finish.",
  },
  {
    id: 12,
    image: `${KoonungaHill}`,
    name: "Koonunga Hill",
    region: "Penfolds",
    vintage: 2020,
    price: "17.98",
    text: "Chardonnay shows very pale straw with lime green hues. White peach stone fruit, fresh citrus, green apple orange blossom and jasmine. Light creaminess from time spent sur-lie. Fine and soft oak influence.",
  },
  {
    id: 13,
    image: `${Masseto}`,
    name: "Masseto",
    region: "Tuscany",
    vintage: 2017,
    price: "899.99",
    text: "Deep ruby red color, with ripe red fruits  and delicate vanilla and gentle tobacco notes on the nose. The tannins are dense yet elegant and the finish proves to be savoury and enduring.",
  },
  {
    id: 14,
    image: `${Petrus}`,
    name: "Petrus",
    region: "Pomerol",
    vintage: 2018,
    price: "4699.97",
    text: "Damson plum fruit, alongside grilled caramel, graphite, cassis and cocoa bean. Tannins are plentiful, but plush and ripe. As it opens, complex layers of bitter cocoa and fresh acidities.",
  },
  {
    id: 15,
    image: `${Biserno}`,
    name: "Il Pino di Biserno",
    region: "Tuscany",
    vintage: 2018,
    price: "86.97",
    text: "Deep ruby red of dark fruits like plums and blackberries, freshly-ground coffee, cloves and brushwood. Balance of thick and elegant tannins and a long finish. Pair with roast meats, particularly beef.",
  },
  {
    id: 16,
    image: `${Tignanello}`,
    name: "Tignanello Antinori",
    region: "Tuscany",
    vintage: 2019,
    price: "159.97",
    text: "Elegant red highlighted by bright cherry, black currant, violet, tobacco, iron and oak spice aromas. Wine shows the balance to age. Sangiovese, Cabernet Sauvignon and Cabernet Franc.",
  },
  {
    id: 17,
    image: `${Sassicaia}`,
    name: "Sassicaia",
    region: "Tuscany",
    vintage: 2020,
    price: "269.97",
    text: "Complex aromas and flavors of black currant, blackberry, tobacco and mediterranean herbs. Superb harmony, freshness and a long aftertaste. Cabernet Sauvignon and Cabernet Franc.",
  },
  {
    id: 18,
    image: `${Solaia}`,
    name: "Solaia Antinori",
    region: "Tuscany",
    vintage: 2013,
    price: "599.97",
    text: "Cabernet Sauvignon with Sangiovese and Cabernet Franc. Plump fruit and spice, grilled herb and black pepper.Thick texture, structure and power but these elements are never overdone.",
  },
  {
    id: 19,
    image: `${Amarone}`,
    name: "Amarone Masi",
    region: "Veneto",
    vintage: 2015,
    price: "128.97",
    text: "Deep ruby with elegant ripe berries and hints of cocoa and cinnamon. Full bodied, silky tannins and smooth alcohol with balanced refreshing acidity. Long finish of marasca cherries and cinnamon.",
  },
  {
    id: 20,
    image: `${CloudyBay}`,
    name: "Cloudy Bay Sauvignon Blanc",
    region: "Marlborough, NZ",
    vintage: 2022,
    price: "30.97",
    text: "Cloudy Bay Sauvignon Blanc signature style is famous for its vibrant nose, mouthwatering palate and long finish. Stone fruit and citrus stand out, while minerality provides balance.",
  },
  {
    id: 21,
    image: `${PouillyFume}`,
    name: "Pouilly Fume",
    region: "Loire",
    vintage: 2021,
    price: "31.97",
    text: "A perfect balance between classic Sauvignon Blanc fruit and a gorgeous flint minerality that brings the terroir. The luscious feel over your tongue is contrasted by a lively, flinty acidity on the finish.",
  },
  {
    id: 22,
    image: `${TerrazasMalbec}`,
    name: "Terrazas Malbec",
    region: "Mendoza",
    vintage: 2020,
    price: "20.97",
    text: "Bright red with purple shades. Notes of violets, ripe black cherry and plum. Also toasty and spicy black pepper and chocolate. Delicate tannins and an elegant finish of black fruits.",
  },
  {
    id: 23,
    image: `${Echezeaux}`,
    name: "Echezeaux Grand Cru",
    region: "Cote de Nuits",
    vintage: 2016,
    price: "429.97",
    text: "Deep bouquet of smoked meats, cassis, blackberries, incense and rich soil tones. On the palate, it's full-bodied and velvety, with rich but supple tannins, lively acids and a long, thrilling carnal finish. ",
  },
  {
    id: 24,
    image: `${Charlemagne}`,
    name: "Corton Charlemagne",
    region: "Cote de Beaune",
    vintage: 2020,
    price: "539.99",
    text: "The nose reveals oaky, fruity and floral notes. The palate is concentrated and well-balanced with excellent aromatic persistency. The rich aromas only develop its full character after a few years of bottle age.",
  },
  {
    id: 25,
    image: `${Warwick}`,
    name: "Warwick Trilogy",
    region: "Stellenbosch",
    vintage: 2019,
    price: "69.97",
    text: "A rich, full-bodied red, with loam and tar notes underscoring blackberry coulis, crème de cassis, fig cake and dried mint. Chewy tannins, with the fruit and mineral lingering on the finish.",
  },
];

export default wines;
