import React, { useRef } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import styles from './meetTheTeam.styles';
import useScrollAnimation from '../../hooks/use-scroll-animation';
import { useSpring, animated } from 'react-spring';

const MeetTheTeamSection = ({ meetTheTeamSection }) => {
  const {
    teamMember,
    title,
    wereHiringText,
    wereHiringImage,
  } = meetTheTeamSection;
  const wrapper = useRef(null);
  const teamMemberRef = useRef(null);
  const titleRef = useRef(null);
  const teamImg = wereHiringImage.file.url;
  useScrollAnimation(wrapper, [teamMemberRef, titleRef]);

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <Container
      maxWidth={false}
      className="section-padding"
      css={styles}
      id="section4"
    >
      <Container maxWidth="lg" className="side-padding">
        <Grid container ref={wrapper}>
          <Grid item xs={12} className="team-section-title" ref={titleRef}>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <animated.div
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
              className="hiring-img"
            >
              <img src={teamImg} />
            </animated.div>
          </Grid>
          <Grid container className="member-wrapper" ref={teamMemberRef}>
            {teamMember.map((teamMember) => (
              <Grid
                item
                xs={12}
                sm={teamMember.length > 2 ? 4 : 6}
                md={teamMember.length > 2 ? 4 : 5}
                key={teamMember.id}
                className="teammate-container"
              >
                <div className="profile-img">
                  <img src={teamMember.profileImage.file.url} />
                </div>
                <Typography variant="h6" className="teammate-name">
                  {teamMember.name}
                </Typography>
                <Typography variant="body1">{teamMember.bio.bio}</Typography>
                <a
                  href={teamMember.linkedinLink}
                  target="_blank"
                  rel="noopener"
                  className="linkedin-icon"
                >
                  <img src={teamMember.linkedinIcon.file.url} />
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{wereHiringText}</Typography>
        </Grid>
      </Container>
    </Container>
  );
};

export default MeetTheTeamSection;
