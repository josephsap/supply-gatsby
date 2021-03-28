import React, { Component } from 'react';
import * as styles from '../styles/main.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InputRange from 'react-input-range';
import NextArrow from './nextArrow';
import PrevArrow from './prevArrow';
import 'react-input-range/lib/css/index.css';
import '../styles/rangeOverrides.css';
import { Typography } from '@material-ui/core';

class JobDetails extends Component {
  state = {
    activeSlide: 0,
    value: 0.5,
  };

  render() {
    const { posVal, locVal } = this.props;
    const settings = {
      dots: false,
      focusOnSelect: true,
      speed: 150,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => {
        if (posVal === '' || locVal === '') {
          return false;
        }
        this.setState(
          {
            value: next + 0.5,
            activeSlide: next,
          },
          () => {
            this.props.handleJobLevelSelect(this.state.activeSlide);
          }
        );
        if (next < 0) {
          this.setState({
            activeSlide: 0,
            value: 0.5,
          });
        }
      },
      afterChange: () => {
        if (posVal === '' || locVal === '') {
          this.props.earlyClick(true);
        }
      },
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows: true,
            infinite: false,
          },
        },
      ],
    };

    const jobDetailItems = this.props.sortedJobsArr.map((jobItem) => (
      <div key={jobItem.jobLevel} className={styles.jobItem}>
        <Typography variant="body2" className={styles.jobItemHeader}>
          {jobItem.jobLevel}
        </Typography>
        <Typography variant="caption">{jobItem.jobDescription}</Typography>
      </div>
    ));

    return (
      <div>
        <div className={styles.slider}>
          <InputRange
            draggableTrack={true}
            maxValue={6}
            minValue={0}
            step={0.5}
            value={this.state.value}
            classNames={{
              inputRange: 'inputRange',
              labelContainer: 'labelContainer',
              maxLabel: 'maxLabel',
              minLabel: 'minLabel',
              slider: 'slider',
              sliderContainer: 'sliderContainer',
              track: 'trak',
              valueLabel: 'valueLabel',
            }}
            onChange={(value) => {
              let theValue;
              if (posVal === '' || locVal === '') {
                this.props.earlyClick(true);
                return false;
              }
              if (value % 1 === 0) {
                theValue = value + 0.5;
              } else {
                theValue = value;
              }
              this.slider.slickGoTo(theValue);
              this.setState(
                {
                  value: theValue,
                  activeSlide: theValue - 0.5,
                },
                () => {
                  this.props.handleJobLevelSelect(this.state.activeSlide);
                }
              );
            }}
          />
        </div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {jobDetailItems}
        </Slider>
      </div>
    );
  }
}

export default JobDetails;
