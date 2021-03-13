import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import styles, { hiringImageStyles } from './meetTheTeam.styles';

const MeetTheTeamSection = ({ meetTheTeamSection }) => (
  <Container maxWidth={false} className="section-padding" css={styles}>
    <Container maxWidth="lg">
      <Grid container id="section6">
        <Grid item xs={12}>
          <div>
            <Typography
              variant="h2"
              className="team-section-title"
              css={hiringImageStyles(
                meetTheTeamSection.wereHiringImage.file.url
              )}
            >
              {meetTheTeamSection.title}
            </Typography>
          </div>
        </Grid>
        {meetTheTeamSection.teamMember.map((teamMember) => (
          <Grid item xs={12} md={4} key={teamMember.id}>
            <div className="profile-img">
              <img src={teamMember.profileImage.file.url} />
            </div>
            <Typography variant="subtitle1" className="teammate-name">
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

export default MeetTheTeamSection;
