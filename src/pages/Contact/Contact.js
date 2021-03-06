import React from 'react';

import classes from './Contact.module.css';

import PageMarker from '../../components/PageMarker/PageMarker';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ContactCard from '../../components/Cards/ContactCard/ContactCard';

import heroImg from '../../assets/images/contact/desktop/image-hero.jpg';
import mapImg from '../../assets/images/contact/desktop/image-map.png';
import Button from '../../components/Button/Button';

export default function Contact() {
  return (
    <main className={classes.contact}>
      <PageMarker page="contact" />

      <Hero
        page="contact"
        image={heroImg}
        title="Tell us about your project"
        text="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
      />

      <section className={classes.details}>
        <SectionHeader>Contact Details</SectionHeader>
        <ContactCard
          title="Main Office"
          mail="archone@mail.com"
          address="1892 Chenoweth Drive TN"
          phone="802-456-3451"
        />
        <ContactCard
          title="Office II"
          mail="archtwo@mail.com"
          address="3399 Wines Lane TX"
          phone="832-145-4321"
        />
      </section>

      <section className={classes.map}>
        <img src={mapImg} alt="location map" />
      </section>

      <section className={classes.form}>
        <SectionHeader>Connect with us</SectionHeader>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <Button onclick={(e) => e.preventDefault()} />
        </form>
      </section>
    </main>
  );
}
