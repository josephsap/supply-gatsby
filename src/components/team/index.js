import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import styles, { hiringImageStyles } from './meetTheTeam.styles';

const MeetTheTeamSection = ({ meetTheTeamSection }) => {
  const teamImg = meetTheTeamSection.wereHiringImage.file.url;

  return (
    <Container
      maxWidth={false}
      className="section-padding"
      css={styles}
      id="section6"
    >
      <Container maxWidth="lg" className="side-padding">
        <Grid container>
          <Grid item xs={12}>
            <div>
              <Typography
                variant="h5"
                component="h2"
                className="team-section-title"
                css={(theme) => hiringImageStyles(theme, { teamImg })}
              >
                {meetTheTeamSection.title}
              </Typography>
            </div>
          </Grid>
          {meetTheTeamSection.teamMember.map((teamMember) => (
            <Grid
              item
              xs={12}
              md={4}
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
        <Grid item xs={12}>
          <Typography variant="body1">
            {meetTheTeamSection.wereHiringText}
          </Typography>
        </Grid>
      </Container>
    </Container>
  );
};

export default MeetTheTeamSection;
