<template>
    <div id="main-wrapper">
        <NavbarDark/>


        <section class="bg-primary position-relative paris-page-title">
            <div class="position-absolute start-0 top-0 w-25 h-15 bg-light rounded-end-pill opacity-25 mt-4"></div>
            <div class="position-absolute start-0 bottom-0 w-15 h-20 bg-light rounded-top-pill opacity-25 ms-4"></div>
            <div class="position-absolute end-0 top-0 w-15 h-25 bg-light rounded-bottom-pill opacity-25 me-4"></div>
            <div class="position-absolute end-0 bottom-0 w-25 h-15 bg-light rounded-start-pill opacity-25 mb-4"></div>
            <div class="ht-30"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title text-light">París, Francia</h2>
                        <span class="ipn-subtitle">Morton en europa</span>
                    </div>
                </div>
            </div>
            <div class="ht-30"></div>
        </section>

        <section class="gray-simple branches-location">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="agency agency-list overlio-40">
                            <div class="agency-content">
                                <h4 class="h4-center">París</h4>
                                <p>L’entreprise fondée par Luis López Morton en 1987 compte actuellement 178 employés et est divisée en 9 départements de consignation, avec des ventes toute l’année. Chaque département est organisé selon un calendrier qui spécifie les dates, la thématique et les objectifs financiers à atteindre pour chaque vente.</p>
                                <ul class="ul-paris">
                                    <li class="terms-li"><strong>Antiquités :</strong> mobilier, cristallerie, argenterie, tableaux anciens, sculptures, tapisseries, charreria ancienne. Le département organise trois ventes spéciales à part des autres pendant l’année :</li>
                                    <ul>
                                        <li class="terms-li">Vente mexicaine - Septembre</li>
                                        <li class="terms-li">Vente de Noël - Décembre</li>
                                        <li class="terms-li"> Grande vente d’Antiquités et tableaux anciens européens – Mai.</li>
                                    </ul>
                                    <li class="terms-li"><strong>Art moderne et contemporain :</strong>sculptures et tableaux modernes et contemporains latino-américains et internationaux. Ce département organise deux ventes très importantes pour le marché de l’art moderne en Amérique, en général avec des pièces de qualité égale à celles présentes à Sotheby’s et Christie’s à New York. Dans les ventes d’art latino-américain á Morton sont vendues des œuvres importantes de Carlos Cruz Diez, Roberto Montenegro, Diego Rivera, José Clemente Orozco, David Alfaro Siqueiros entre autres.</li>
                                    <li class="terms-li"><strong>Joaillerie : </strong>montres et bijoux anciens et contemporains.</li>
                                    <li class="terms-li"><strong>Livres et Documents : </strong>livres et documents anciens.</li>
                                    <li class="terms-li"><strong>Arts Décoratifs : </strong>ce département est dédié à la vente des objets de décoration modernes et contemporains, objets d’art. Il est spécialisé sur les ventes des mobiliers de designer.</li>
                                    <li class="terms-li"><strong>Voitures de collection : </strong>automobiles anciennes.</li>
                                    <li class="terms-li"><strong>hotographie ancienne et de collection. </strong></li>
                                    <li class="terms-li"><strong>Vins. </strong></li>
                                    <li class="terms-li"><strong>Prêts sur gages : </strong>seule institution au Mexique qui effectue des prêts sur gages pour des œuvres d’art.</li>
                                </ul>
                                <h4 class="h4-center">Experience en Europe:</h4>
                                <p>Au cours des dernières années, Morton Subastas a eu des expériences positives avec deux des plus importantes galeries en Europe : la Galerie Colnaghi en Angleterre avec le support de l’agence World Advisory Services (WAS) de Madrid, et à Milan monsieur Giorgio Baratti, spécialiste et propriétaire d’une vaste collection d’œuvres d’art. Ces deux expériences ont porté sur les tableaux anciens ; différentes dans leurs modes de négociation et de développement, toutes deux ont été couronnées de succès.</p>
                                <p>Consignation et achats : Morton Paris est ouvert a la consignation pour vendre dans une des ventes aux enchères organisées par la maison pendant toute l’année. Une nouvelle activité commerciale avec l'Amérique latine.</p>
                                <p>Morton Paris est ouvert pour toutes les démarches pour l’organisation de chaque affaire en Europe, depuis les rendez-vous, les négociations des conditions contractuelles, les signatures des contrats, et les envois.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="gray-simple branches-location">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="agency agency-list overlio-40">
                            <div class="agency-avatar">
                                <img :src="parisLocation" alt="">
                            </div>
                            <div class="agency-content">
                                <div class="agency-name">
                                    <h4><i class="fa-solid fa-location-dot"></i> Paris, France</h4>
                                </div>
                                <div class="agency-desc">
                                    <ul class="dw-proprty-info">
                                        <li><strong>Adresse</strong>5 rue du Renard</li>
                                        <li><strong>Code postal</strong>75004</li>
                                        <li><strong>Ville</strong>París</li>
                                        <li><strong>Pays</strong>Francia</li>
                                        <li><strong>Téléphone</strong>+33 7671 56170</li>
                                    </ul>
                                </div>
                                <div class="prt-detios" style="text-align: right;">
                                    <span class="label text-light bg-success">voir le plan</span>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="gray-simple">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>RENCONTREZ NOS SPÉCIALISTES</h2>
                        </div>
                    </div>
                </div>
                <ParisTeam/>
            </div>
        </section>
    </div>

    <FooterTop />
    <FooterDark/>

</template>

<script setup>
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import parisLocation from '@/assets/img/paris-location.png';
    import ParisTeam from '@/components/specialists/paris-team.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
</script>
