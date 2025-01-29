import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import pitch from '../../assets/icons/pitch.png';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import Typography from '@mui/material/Typography';
import checkout from "../../assets/icons/check-out.png";

// Custom styled TimelineDot
const CustomTimelineDot: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TimelineDot variant="outlined" style={{ borderColor: '#F8CB2E' }}>
    {children}
  </TimelineDot>
);

const Day2: React.FC = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          7:30 am
        </TimelineOppositeContent>
        <TimelineSeparator >
          <CustomTimelineDot>
            <BreakfastDiningIcon />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Breakfast
          </Typography>
          <Typography></Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <CustomTimelineDot>
            <EmojiEventsIcon />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '20px', px: 2 }}>
          <Typography variant="h6" component="span">
            Award Ceremony
          </Typography>
          <Typography></Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <CustomTimelineDot>
            <img
              src={pitch}
              alt="Custom Icon"
              style={{ width: '30px', height: '30px' }}
            />
          </CustomTimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '20px', px: 2 }}>
          <Typography variant="h6" component="span">
            Finalist Pitch
          </Typography>
          <Typography></Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body1"
          color="text.secondary"
        >
          5:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector />
          <CustomTimelineDot>
            <img
              src={checkout}
              alt="Custom Icon"
              style={{ width: '30px', height: '30px' }}
            />
          </CustomTimelineDot>
          
        </TimelineSeparator>
        <TimelineContent sx={{ py: '20px', px: 2 }}>
          <Typography variant="h6" component="span">
            Check Out
          </Typography>
          <Typography></Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Day2;
