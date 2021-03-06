import React from 'react';
import { useNavigate } from 'react-router';

import projects from '../../data/projects';
import classes from './Home.module.css';

import PageMarker from '../../components/PageMarker/PageMarker';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Paragraph from '../../components/Paragraph/Paragraph';
import Button from '../../components/Button/Button';

import welcomeImg from '../../assets/images/home/desktop/image-welcome.jpg';
import teamImg from '../../assets/images/home/desktop/image-small-team.jpg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className={classes.home}>
      <PageMarker page="home" />

      <section className={classes.hero}>
        <Banner
          bgImage={projects[0].image}
          title={projects[0].name}
          bodyText={projects[0].description}
          buttonHandler={() => navigate('/portfolio')}
          buttonText="See Our Porfolio"
        />
      </section>

      <section className={classes.welcome}>
        <svg viewBox="0 0 79.5 16">
          <text x="0" y="15">
            welcome
          </text>
        </svg>
        <div>
          <SectionHeader>Welcome to Arch Studio</SectionHeader>
          <Paragraph>
            Welcome to Arch Studio We have a unique network and skillset to help bring your projects
            to life. Our small team of highly skilled individuals combined with our large network
            put us in a strong position to deliver exceptional results.
          </Paragraph>
          <Paragraph>
            Over the past 10 years, we have worked on all kinds of projects. From stations to
            high-rise buildings, we create spaces that inspire and delight.
          </Paragraph>
          <Paragraph>
            We work closely with our clients so that we understand the intricacies of each project.
            This allows us to work in harmony the surrounding area to create truly stunning projects
            that will stand the test of time.
          </Paragraph>
        </div>
        <img src={welcomeImg} alt="elegant building" />
      </section>

      <section className={classes.team}>
        <Banner
          bgImage={teamImg}
          title="Small teams, big ideas"
          buttonText="about us"
          buttonHandler={() => navigate('/about')}
        />
      </section>

      <section className={classes.featured}>
        <div>
          <SectionHeader>Featured</SectionHeader>
          <Button text="see all" onclick={() => navigate('/portfolio')} />
        </div>
        <Cards>
          {projects.slice(1, 4).map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              subtitle="View All Projects"
              img={project.image}
              onclick={() => navigate('/portfolio')}
            />
          ))}
        </Cards>
      </section>
    </main>
  );
}
