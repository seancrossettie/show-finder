import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import HomeButton from '../components/Navigation/HomeButton';
import SearchButton from '../components/Navigation/SearchButton';
import getArtistEvents from '../helpers/data/eventData';
import { getSingleArtist } from '../helpers/data/artistData';
import EventCards from '../components/Events/EventCards';
import ArtistPageDisplay from '../components/Artists/ArtistPageDisplay';

const ArtistPage = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [pageArtist, setPageArtist] = useState({});

  useEffect(() => {
    getArtistEvents(id).then(setEvents);
    getSingleArtist(id).then(setPageArtist);
  }, []);

  return (
    <>
      <HomeButton />
      <SearchButton />
      <Typography>Artist Events</Typography>
      <ArtistPageDisplay displayName={pageArtist.displayName} />
      {events.map((event) => (
        <EventCards
          key={event.id}
          displayName={event.displayName}
          date={event.start.date}
          location={event.location.city}
          type={event.type}
          venue={event.displayName}
          uri={event.uri}
          eventId={event.id}
      />

      ))}
    </>
  );
};

export default ArtistPage;
