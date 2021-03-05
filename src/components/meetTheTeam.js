import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import styles from './meetTheTeam.styles';

const MeetTheTeamSection = ({ meetTheTeamSection }) => (
  <Container maxWidth={false} className="section-padding" css={styles}>
    <Container maxWidth="lg">
      <Grid container id="section6">
        <Grid item xs={12}>
          <Typography variant="h2">
            {meetTheTeamSection.title}

            <img src={meetTheTeamSection.wereHiringImage.file.url} />
          </Typography>
        </Grid>
        {meetTheTeamSection.teamMember.map((teamMember) => (
          <Grid item xs={12} md={4}>
            <div className="profile-img">
              <img src={teamMember.profileImage.file.url} />
            </div>
            <Typography variant="subtitle1">{teamMember.name}</Typography>
            <Typography variant="body1">{teamMember.bio.bio}</Typography>
            <div>
              {teamMember.linkedinLink} please export linkedin icon for me
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Container>
);

export default MeetTheTeamSection;
