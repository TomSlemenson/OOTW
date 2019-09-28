import React from 'react'
import Calendar from '@fullcalendar/react'
import calendarPlugins from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { MDBCol, MDBContainer } from 'mdbreact';
import WebFont from 'webfontloader';
import './index.css'

WebFont.load({
  google: {
    families: ['Noto Sans TC', 'sans-serif']
  }
});

export default class FullCalendar extends React.Component {

  render() {
    return (<MDBContainer>
      <MDBCol className="m-auto css_calendar" sm={12} lg={10}>
        <Calendar
          className="css_calendar"
          plugins={[ googleCalendarPlugin, calendarPlugins ]}
          googleCalendarApiKey={['AIzaSyAB2tAs89EXjGgksi74CmMLetDqR_HFdyE']}
          defaultView={['listMonth']}
          buttonText={{today:'Today'}}
          events={{googleCalendarId:'hur76haaubqp0en560qhhkt0lg@group.calendar.google.com'}}
        />
      </MDBCol>
    </MDBContainer>
    )
  }
}