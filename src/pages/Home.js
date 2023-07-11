import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main.banner position-relative p-3'>
                <img src="images/New Villa under construction on the Benissa coast.jpeg"
                  className='img-fluid rounded-3' alt='main banner' />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERHOUSE FOR POPULATION</h4>
                  <h5>VILLA 5 PIECES BASSE</h5>
                  <p>from FCFA 50 millions</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <div className='small.banner position-relative -3'>
                  <img src="images/Luxury vacation rentals Begur.jpeg"
                    className='img-fluid rounded-3' alt='main banner' />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERHOUSE</h4>
                    <h5>VILLA 4 PIECES DUPLEX</h5>
                    <p>from FCFA 480 millions</p>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                  <div className='small.banner position-relative p-3'>
                    <img src="images/ad50e6d1-65c1-480f-9429-e7ab268fa201.jpeg"
                      className='img-fluid rounded-3' alt='main banner' />
                    <div className="small-banner-content position-absolute">
                      <h4>NEW HOUSE</h4>
                      <h5>VILLA 4 PIECES</h5>
                      <p>from FCFA 30 millions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                  <div className='small.banner position-relative p-3'>
                    <img src="images/Luxury contemporary villa in Benahavis - La Alqueria for sale.jpeg"
                      className='img-fluid rounded-3' alt='main banner' />
                    <div className="small-banner-content position-absolute">
                      <h4>VILLA</h4>
                      <h5>VILLA 6 PIECES DUPLEX</h5>
                      <p>from FCFA 80 millions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                  <div className='small.banner position-relative p-3'>
                    <img src="images/e502181b-8649-43ec-bf3d-335cad30fdd6.jpeg"
                      className='img-fluid rounded-3' alt='main banner' />
                    <div className="small-banner-content position-absolute">
                      <h4>VILLA</h4>
                      <h5>VILLA BASSE  PIECES </h5>
                      <p>
                        from FCFA80 millions <br /> or FCFA85 millions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-10'>
                  <img src="images/livraison.png" alt='services' />
                  <div>
                    <h6>Shipping</h6>
                    <p className='mb-0'>From in 24 mois</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/cadeau.png" alt='services' />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 50% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/client.png" alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/parametre.png" alt='services' />
                  <div>
                    <h6>Affordable Price</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/carte.png" alt='services' />
                  <div>
                    <h6>Secure Payements</h6>
                    <p className='mb-0'>100% Protected Payement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Terrains</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/terrain1.jpeg" alt="terrain" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Construction BTP</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/Definitive Guide to Home Improvement Loans.jpeg" alt="terrain" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Materiaux de construction</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/Premium Photo _ House arrangement from yellow repair tools flat lay.jpeg" alt="materiaux" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Electricité</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/8 Astuces Faciles Pour Faire Baisser Votre Prochaine Facture d’Électricité_.png" alt="terrain" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Carreaux Espagnol</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/Les carreaux de ciment à motifs.jpeg" alt="terrain" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Etancheite</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/Prix d'étanchéité d'un toit terrasse au m2 _ les tarifs et devis.jpeg" alt="terrain" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Gravier & Sable</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/Sac de +_- 1,5T = 20M² Galet blanc bleu de nice 8_16.jpeg" alt="materiaux" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Devis & Plan</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/Professionnels, demandez votre devis gratuit - Stradal Funéraire.png" alt="terrain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='famous-wrapper py-5 home wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/Properties for sale in Adeje, Tenerife - Kyero_com.jpeg' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>VENTE DE VILLA DUPLEX</h5>
                  <h6>Villa Duplex 5 PIECES</h6>
                  <p>From 50 millions FCFA or 45 millions FCFA</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/IMG-20230705-WA0022.jpg' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Vente Materiaux de Construction</h5>
                  <h6 className='text-dark'>Equipement de tous genres</h6>
                  <p className='text-dark'>From 1000 FCFA</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/terrain 0.jpg' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-white'>VENTE DE TERRAIN</h5>
                  <h6 className='text-white'>400 M2-950 M2</h6>
                  <p className='text-white'>From 5 MILLIONS FCFA</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/The 10 Best Barn & Farm Wedding Venues in Napa Valley - WeddingWire.jpeg' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-white'>LOCATION DE MAISON</h5>
                  <h6 className='text-white'>Maison de tous genres</h6>
                  <p className='text-white'>From 4 Month Advance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
            <div className='row'>
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>
      <section className='Popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='marque-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/adoha.jpeg' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/bhci.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/caroline.jpeg' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/ins construction.jpeg' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/isis.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/ivoire group.jpeg' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/md immo.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/oribat.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/real bat.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/riia.jpeg' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/sicogi.jpeg' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/sipim.jpeg' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/abidjan immo.jpeg' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='block-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
