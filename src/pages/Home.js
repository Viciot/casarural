import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";

export default function Home () {
    return (
        <>
            <Hero>
                <Banner title="Experimenta lo natural" subtitle="Residencias completas a partir de 199€">
                    <Link to="/rooms" className="btn-primary">
                        Nuestras Residencias
                    </Link>
                </Banner>
            </Hero>
        </>
    );
}