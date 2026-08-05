import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import sustainablySourcedImg from "../assets/images/save-the-world.png";
import freshlyRoastedImg from "../assets/images/coffee-beans.png";
import expertlyCraftedImg from "../assets/images/coffee-machine.png";

const drinks = [
  {
    id: 1,
    name: "Spiced Chai Latte",
    img: "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?w=400&q=80",
  },
  {
    id: 2,
    name: "Matcha Cream",
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80",
  },
  {
    id: 3,
    name: "Vienna Coffee",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80",
  },
  {
    id: 4,
    name: "Iced Cortado",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
  },
];

const features = [
  {
    id: 1,
    img: sustainablySourcedImg,
    title: "Sustainably Sourced",
    desc: "Supporting local farmers and eco-friendly growing practices",
  },
  {
    id: 2,
    img: freshlyRoastedImg,
    title: "Freshly Roasted",
    desc: "Every batch is roasted in small quantities for unmatched freshness.",
  },
  {
    id: 3,
    img: expertlyCraftedImg,
    title: "Expertly Crafted",
    desc: "Our baristas and blenders bring passion and precision to every cup.",
  },
];

export default function Home() {
  return (
    <main className="home">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__inner">
          <h1 className="hero__heading">
            Discover Flavors Inspired By Coffee Cultures Around The World.
          </h1>
          <p className="hero__sub">
            Discover flavors inspired by coffee cultures around the world.
          </p>
          <a href="/products" className="btn btn--sage hero__cta">
            Explore Our Blends
          </a>
        </div>
      </section>

      {/* ── Featured Drinks ── */}
      <section className="featured">
        <div className="featured__header">
          <h2 className="featured__title">Our Featured Drinks</h2>
          <p className="featured__sub">
            From our bold Espresso Origins to smooth Mojo House Blend — explore
            flavors inspired by cultures across the world.
          </p>
        </div>

        <div className="drinks-grid">
          {drinks.map((d) => (
            <div className="drink-card" key={d.id}>
              <div className="drink-card__img-wrap">
                <img src={d.img} alt={d.name} className="drink-card__img" />
              </div>
              <button className="btn drink-card__btn">Add to cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="why">
        <div className="why__left">
          <h2 className="why__heading">Why Choose Us?</h2>
        </div>
        <div className="why__right">
          <p className="why__tagline">
            —We believe in slowing down and savoring every sip—
          </p>
          <div className="why__divider" />
        </div>
        <div className="why__features">
          {features.map((f) => (
            <div className="feature" key={f.id}>
              <div className="feature__icon">
                <img src={f.img} alt="" />
              </div>
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="newsletter">
        <div className="newsletter__content">
          <h2 className="newsletter__heading">
            Get new updates and discount offers, Sign up now!
          </h2>
          <p className="newsletter__body">
            Be part of something special. Subscribe to Mojo Coffee Blend for
            early access to seasonal blends, exclusive discounts, and
            behind-the-scenes stories from our roasters and baristas. We love
            sharing our journey and connecting with those who share our passion
            for coffee, culture, and sustainability.
          </p>
          <div className="newsletter__form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter__input"
              aria-label="Email address"
            />
            <button className="btn btn--dark newsletter__btn">
              Keep Me Alerted
            </button>
          </div>
        </div>
        <div className="newsletter__img-wrap" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=500&q=80"
            alt=""
            className="newsletter__img"
          />
        </div>
      </section>
    </main>
  );
}