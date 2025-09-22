import React, { useEffect } from "react";
import { useGlobalContext } from "../Components/Context";
import RotateText from "../Components/RotateText";
import cheeses from "../assets/img/boards/cheeses.webp";
import dips from "../assets/img/boards/dips.webp";
import veggies from "../assets/img/boards/veggies.webp";
import meso from "../assets/img/boards/meso.webp";
import fruits from "../assets/img/boards/fruits.webp";
import nuts from "../assets/img/boards/nuts.webp";
import bake from "../assets/img/boards/bake.webp";
import chips from "../assets/img/boards/chips.webp";
import gruyere from "../assets/img/boards/gruyere.webp";
import goat from "../assets/img/boards/goat.webp";
import granoPadano from "../assets/img/boards/grano-padano.webp";
import roquefort from "../assets/img/boards/roquefort.webp";
import camembert from "../assets/img/boards/camembert.webp";
import cheddar from "../assets/img/boards/cheddar.webp";
import gauda from "../assets/img/boards/gauda.webp";
import gorgonzola from "../assets/img/boards/gorgonzola.webp";
import parmezan from "../assets/img/boards/parmezan.webp";
import pecorino from "../assets/img/boards/pecorino.webp";
import stilton from "../assets/img/boards/stilton.webp";
import prosciutto from "../assets/img/boards/prosciutto.webp";
import biltong from "../assets/img/boards/biltong.webp";
import fuet from "../assets/img/boards/fuet.webp";

import chorizo from "../assets/img/boards/chorizo.webp";
import coldCuts from "../assets/img/boards/cold-cuts.webp";
import ciabatta from "../assets/img/boards/ciabatta.webp";

import simit from "../assets/img/boards/simit.webp";
import crackers from "../assets/img/boards/crackers.webp";
import grissini from "../assets/img/boards/grissini.webp";
import baguette from "../assets/img/boards/baguette.webp";
import croissant from "../assets/img/boards/croissant.webp";
import sourdough from "../assets/img/boards/sourdough.webp";
import doritos from "../assets/img/boards/doritos.webp";
import almonds from "../assets/img/boards/almonds.webp";
import cashew from "../assets/img/boards/cashew.webp";
import wallnuts from "../assets/img/boards/wallnuts.webp";
import hazelnuts from "../assets/img/boards/hazelnuts.webp";
import brazilNuts from "../assets/img/boards/brazil-nuts.webp";
import pistachios from "../assets/img/boards/pistachios.webp";
import pecans from "../assets/img/boards/pecans.webp";
import peanuts from "../assets/img/boards/peanuts.webp";
import saraCervera from "../assets/img/boards/sara-cervera-0X6sEvSJxas-unsplash.webp";
import vladMelnikov from "../assets/img/boards/vlad-melnikov-D9LRV-kkrQk-unsplash.webp";
import pexelsMartaDzedyshko from "../assets/img/boards/pexels-marta-dzedyshko-2067430.webp";
import toaHeftiba from "../assets/img/boards/toa-heftiba-KZwp2IIyXmA-unsplash.webp";
import andraCTaylorJr from "../assets/img/boards/andra-c-taylor-jr-t89wenHfzNA-unsplash.webp";
import anitaPeeples from "../assets/img/boards/anita-peeples-KMtq9dy-9Vc-unsplash.webp";
import danielUvegard from "../assets/img/boards/daniel-uvegard-lxQIrGWE9iM-unsplash.webp";
import onderOrtel from "../assets/img/boards/onder-ortel--BtrFJAfEH8-unsplash.webp";
import evelynSemenyuk from "../assets/img/boards/evelyn-semenyuk-IfG34eJKhsE-unsplash.webp";
import farhadIbrahimzade from "../assets/img/boards/farhad-ibrahimzade-fRwex1QfIDw-unsplash.webp";
import sigmund from "../assets/img/boards/sigmund-BhShq95T51Y-unsplash.webp";
import sergheiSavchiuc from "../assets/img/boards/serghei-savchiuc-EhT5CqsgQiY-unsplash.webp";
import yoavAziz from "../assets/img/boards/yoav-aziz-KLPEN7jj4co-unsplash.webp";
import kristofKorody from "../assets/img/boards/kristof-korody-IXpYGLXaI3g-unsplash.webp";
import aliceDonovanRouse from "../assets/img/boards/alice-donovan-rouse-9MzCd76xLGk-unsplash.webp";

import raspopovaMarina from "../assets/img/boards/raspopova-marina-rmVVxgppBDw-unsplash.webp";

import onderOrtel1 from "../assets/img/boards/onder-ortel-JE0xlTBks20-unsplash.webp";
import onderOrtel2 from "../assets/img/boards/onder-ortel-tDG00AMzEBI-unsplash.webp";
import pexelsAlesiaKozik from "../assets/img/boards/pexels-alesia-kozik-6065175.webp";
import pexelsAlinaMatveycheva from "../assets/img/boards/pexels-alina-matveycheva-15529782.webp";
import pexelsAlleksana6399996 from "../assets/img/boards/pexels-alleksana-6399996.webp";
import pexelsAlleksana6400001 from "../assets/img/boards/pexels-alleksana-6400001.webp";
import pexelsPeggyAnke6084938 from "../assets/img/boards/pexels-peggy-anke-6084938.webp";
import pexelsAndreaMosti17205261 from "../assets/img/boards/pexels-andrea-mosti-17205261.webp";
import pexelsAdriAna15779744 from "../assets/img/boards/pexels-adri-ana-15779744.webp";
import pexelsAdonyiGabor from "../assets/img/boards/pexels-adonyi-gábor-8815501.webp";
import pexelsSolodsha from "../assets/img/boards/pexels-solodsha-8105046.webp";
// Boards page renders a list of food items with descriptions and lazy loading images
const Boards = () => {
  //context access to navbar and header nods
  const { navbarRef, headerRef } = useGlobalContext();
  //scroll to top on page change regardless of user previous scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
    const header = headerRef.current;
    const navbar = navbarRef.current;
    // styling header responsively
    if (header) {
      header.style.background = "black";
      // header.style.display = "block";
    }
    if (navbar) {
      navbar.style.width = "90vw";
      navbar.style.fontSize = "0.8rem";
      navbar.style.lineHeight = "100%";
      navbar.style.transform = "translate(-50%, -6vh)";
    }
  }, [headerRef, navbarRef]);

  return (
    <>
      {/* title processed by RotateText component */}
      <div id="boards-title" className="title-text">
        <div className="title-text-box">
          <div>
            <RotateText text=" MAKE YOUR " />
          </div>
          <div>
            <RotateText text="OWN BOARD" />
          </div>
        </div>
        <div className="all-box">
          <img src={cheeses} alt="cheese" style={{ objectPosition: "left" }} />
          <img src={dips} alt="dips" />
          <img src={veggies} alt="veggies" />
          <img src={meso} alt="meats" />
          <img src={fruits} alt="fruits" />
          <img src={nuts} alt="nuts" />
          <img src={bake} alt="bake" />
          <img src={chips} alt="chips" />
        </div>
        <p>
          Assortment of cheeses, fruits, nuts, etc. gives you opportunity to
          make your choice as a spur of the moment.
        </p>
      </div>
      {/* --------cheese------------ */}
      <div className="cheese">
        <div className="title-text-box">
          <div>
            <RotateText text="CHEESE" />
          </div>
        </div>

        <div className="food-box">
          <div className="food-item">
            <img
              src={gruyere}
              alt="gruyere"
              // loading="lazy"
            />
            <h4>Gruyere</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img
              src={goat}
              alt="goat"
              // loading="lazy"
            />
            <h4>Goat Cheese</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={granoPadano} alt="grano-padano" loading="lazy" />
            <h4>Grano Padano</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={roquefort} alt="roquefort" loading="lazy" />
            <h4>Roquefort</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={camembert} alt="camembert" loading="lazy" />
            <h4>Camembert</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={cheddar} alt="cheddar" loading="lazy" />
            <h4>Cheddar</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={gauda} alt="gauda" loading="lazy" />
            <h4>Gauda</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={gorgonzola} alt="gorgonzola" loading="lazy" />
            <h4>Blue Cheese</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={parmezan} alt="parmezan" loading="lazy" />
            <h4>Parmezan</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={pecorino} alt="pecorino" loading="lazy" />
            <h4>Pecorino</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>

          <div className="food-item">
            <img src={stilton} alt="stilton" loading="lazy" />
            <h4>Stilton</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
        </div>
      </div>
      {/* -----------meat---------------- */}
      <div className="meat">
        <div className="title-text-box">
          <div>
            <RotateText text="MEAT" />
          </div>
        </div>
        <div className="food-box">
          <div className="food-item">
            <img src={prosciutto} alt="prosciutto" loading="lazy" />
            <h4>Prosciutto</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={biltong} alt="biltong" loading="lazy" />
            <h4>Biltong</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={fuet} alt="fuet" loading="lazy" />
            <h4>Fuet</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={chorizo} alt="chorizo" loading="lazy" />
            <h4>Chorizo</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={coldCuts} alt="cold cuts" loading="lazy" />
            <h4>Cold cuts</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
        </div>
      </div>
      {/* --------bake------------- */}
      <div className="bake">
        <div className="title-text-box">
          <div>
            <RotateText text="BAKE" />
          </div>
        </div>
        <div className="food-box">
          <div className="food-item">
            <img src={ciabatta} alt="ciabatta" loading="lazy" />
            <h4>Ciabatta</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={simit} alt="simit" loading="lazy" />
            <h4>Simit</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={crackers} alt="crackers" loading="lazy" />
            <h4>Crackers</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={grissini} alt="grissini" loading="lazy" />
            <h4>Grissini</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={baguette} alt="baguette" loading="lazy" />
            <h4>Baguette</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={croissant} alt="croissant" loading="lazy" />
            <h4>Croissant</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={sourdough} alt="sourdough" loading="lazy" />
            <h4>Sourdough</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={doritos} alt="doritos" loading="lazy" />
            <h4>Doritos</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
        </div>
      </div>
      {/* -----------nuts-------------- */}
      <div className="nuts">
        <div className="title-text-box">
          <br />
          <div>
            <RotateText text="NUTS" />
          </div>
        </div>
        <div className="food-box">
          <div className="food-item">
            <img src={almonds} alt="almonds" loading="lazy" />
            <h4>Almonds</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={cashew} alt="cashew" loading="lazy" />
            <h4>Cashew</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={wallnuts} alt="wallnuts" loading="lazy" />
            <h4>Wallnuts</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={hazelnuts} alt="hazelnuts" loading="lazy" />
            <h4>Hazelnuts</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={brazilNuts} alt="brazilnuts" loading="lazy" />
            <h4>Brazilian nuts</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={pistachios} alt="pistachios" loading="lazy" />
            <h4>Pistachios</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={pecans} alt="pecans" loading="lazy" />
            <h4>Pecans</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>
          <div className="food-item">
            <img src={peanuts} alt="peanuts" loading="lazy" />
            <h4>Peanuts</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              corporis?
            </p>
          </div>

          <p>
            Assortment of fresh fruits and vegetables is determined by seasonal
            availability.
          </p>
        </div>
      </div>
      {/* --------food images tiled in columns--------- */}
      <div className="row">
        <div className="column">
          <img
            src={saraCervera}
            loading="lazy"
            className="board-img"
            id="food-1"
          />
          <img
            src={vladMelnikov}
            className="board-img"
            loading="lazy"
            id="food-2"
          />
          <img
            src={pexelsMartaDzedyshko}
            className="board-img"
            id="food-28"
            loading="lazy"
          />

          <img
            src={toaHeftiba}
            className="board-img"
            id="food-4"
            loading="lazy"
          />
          <img
            src={andraCTaylorJr}
            className="board-img"
            id="food-5"
            loading="lazy"
          />
          <img
            src={anitaPeeples}
            className="board-img"
            id="food-6"
            loading="lazy"
          />
          <img
            src={danielUvegard}
            className="board-img"
            id="food-7"
            loading="lazy"
          />
        </div>
        <div className="column">
          <img
            src={onderOrtel}
            className="board-img"
            id="food-15"
            loading="lazy"
          />
          <img
            src={evelynSemenyuk}
            className="board-img"
            id="food-8"
            loading="lazy"
          />
          <img
            src={farhadIbrahimzade}
            className="board-img"
            id="food-9"
            loading="lazy"
          />
          <img
            src={sigmund}
            className="board-img"
            id="food-10"
            loading="lazy"
          />
          <img
            src={sergheiSavchiuc}
            className="board-img"
            id="food-11"
            loading="lazy"
          />
          <img
            src={yoavAziz}
            className="board-img"
            id="food-12"
            loading="lazy"
          />
          <img
            src={kristofKorody}
            className="board-img"
            id="food-13"
            loading="lazy"
          />
          <img
            src={aliceDonovanRouse}
            className="board-img"
            id="food-3"
            loading="lazy"
          />
        </div>
        <div className="column">
          <img
            src={raspopovaMarina}
            className="board-img"
            id="food-14"
            loading="lazy"
          />
          <img
            src={onderOrtel1}
            className="board-img"
            id="food-16"
            loading="lazy"
          />
          <img
            src={onderOrtel2}
            className="board-img"
            id="food-17"
            loading="lazy"
          />
          <img
            src={pexelsAdonyiGabor}
            className="board-img"
            id="food-18"
            loading="lazy"
          />
          <img
            src={pexelsSolodsha}
            className="board-img"
            id="food-19"
            loading="lazy"
          />
          <img
            src={pexelsAdonyiGabor}
            className="board-img"
            id="food-20"
            loading="lazy"
          />
        </div>
        <div className="column">
          <img
            src={pexelsAlesiaKozik}
            className="board-img"
            id="food-22"
            loading="lazy"
          />
          <img
            src={pexelsAlinaMatveycheva}
            className="board-img"
            id="food-23"
            loading="lazy"
          />
          <img
            src={pexelsAlleksana6399996}
            className="board-img"
            id="food-24"
            loading="lazy"
          />
          <img
            src={pexelsAlleksana6400001}
            className="board-img"
            id="food-25"
            loading="lazy"
          />
          <img
            src={pexelsPeggyAnke6084938}
            className="board-img"
            id="food-26"
            loading="lazy"
          />
          <img
            src={pexelsAndreaMosti17205261}
            className="board-img"
            id="food-27"
            loading="lazy"
          />
          <img
            src={pexelsAdriAna15779744}
            className="board-img"
            id="food-21"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Boards;
