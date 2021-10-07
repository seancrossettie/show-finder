# Show Finder [![Netlify Status](https://api.netlify.com/api/v1/badges/d4679f67-80be-4ee0-8c56-a208b546d7fb/deploy-status)](https://app.netlify.com/sites/show-finder/deploys)
[Link to Deployed App](https://show-finder.netlify.app/)
## Overview
This app is a capstone project for the front-end portion of the Nashville Software School. It is a demonstration of my ability in React.js and Firebase CRUD.

Show Finder is an app that allows a user to search for artists and find their upcoming events and subsequently save those events to their user profile. They will be able to create, read, update and delete these events in Google Firebase.
## Motivation
As a musician and concert lover, I try to keep up on when my favorite bands/artists are playing and where I can go to see them. I wanted to build an app that allows a user to search for and save events and artists to their user profile, allowing them to easily keep track of upcoming shows and events that I want to attend. The purpose of this app is to aggregate a person's show calendar and preferences into one page. 

## Demo Video



## Tech Used
- React.js
- Google Auth & Firebase
- Scss
- React Router
- Material UI
- Songkick API
- Formik
- Moment.js

## User Story
- User is authenticated by Google
- User can search for new artists and find their upcoming events
- User can save artists to their profile as followed artists
  - Artists can be unfollowed
  - Artists can be favorited
- User can save events to their profile as upcoming events
  - Events can be deleted
  - Events can be marked as having tickets purchased for them (updated)
- App features responsive design


## Next Steps
Some features I would like to include on a later version will include:
- An ability for the user to search for events
- An interface that allows the user to buy tickets (using an external API)
- A suggested artists tab that displays artists that are similar to a user's favorited artists
## Contributors
[Sean Rossettie](https://github.com/seancrossettie) (@seancrossettie) - [portfolio](https://sean-rossettie.netlify.app/)

## Sreenshots
<img width="1790" alt="Screen Shot 2021-07-01 at 1 22 57 PM" src="https://user-images.githubusercontent.com/76828201/124172594-a2a6d680-da6f-11eb-83ed-48fffe6fbee6.png">
<img width="1792" alt="Screen Shot 2021-07-01 at 1 23 11 PM" src="https://user-images.githubusercontent.com/76828201/124172601-a4709a00-da6f-11eb-8ca1-55239a74b24a.png">
<img width="1792" alt="Screen Shot 2021-07-01 at 1 23 22 PM" src="https://user-images.githubusercontent.com/76828201/124172605-a63a5d80-da6f-11eb-9ee4-be1bbd5cc496.png">
<img width="1792" alt="Screen Shot 2021-07-01 at 1 23 38 PM" src="https://user-images.githubusercontent.com/76828201/124172610-a8042100-da6f-11eb-93c0-af1630767307.png">
<img width="1792" alt="Screen Shot 2021-07-01 at 1 23 47 PM" src="https://user-images.githubusercontent.com/76828201/124172619-a9354e00-da6f-11eb-944c-33647e128ff7.png">
<img width="1792" alt="Screen Shot 2021-07-01 at 1 23 56 PM" src="https://user-images.githubusercontent.com/76828201/124172622-aa667b00-da6f-11eb-8fe1-e42484b89e63.png">





## Relevant Links
[ERD](https://dbdiagram.io/d/60b6c36fb29a09603d178e17)

[Wireframe](https://www.canva.com/design/DAEgMNWyiOg/EALPQ0wxSDoAr15sMTPSsA/view?utm_content=DAEgMNWyiOg&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu#4)

[Songkick API](https://www.songkick.com/developer)
## Sample API Calls
GET Artist ID from Songkick API using this call:
```
https://api.songkick.com/api/3.0/search/artists.json?apikey={{apiKey}}&query=Red Hot Chili Peppers
```
To return this:
```
{
    "resultsPage": {
        "status": "ok",
        "results": {
            "artist": [
                {
                    "id": 468146,
                    "displayName": "Red Hot Chili Peppers",
                    "uri": "https://www.songkick.com/artists/468146-red-hot-chili-peppers?utm_source=60097&utm_medium=partner",
                    "identifier": [
                        {
                            "mbid": "8bfac288-ccc5-448d-9573-c33ea2aa5c30",
                            "href": "https://api.songkick.com/api/3.0/artists/mbid:8bfac288-ccc5-448d-9573-c33ea2aa5c30.json",
                            "eventsHref": "https://api.songkick.com/api/3.0/artists/mbid:8bfac288-ccc5-448d-9573-c33ea2aa5c30/calendar.json",
                            "setlistsHref": "https://api.songkick.com/api/3.0/artists/mbid:8bfac288-ccc5-448d-9573-c33ea2aa5c30/setlists.json"
                        }
                    ],
                    "onTourUntil": "2021-07-07"
                },
                {
                    "id": 2925016,
                    "displayName": "Hot Red Chili Peppers",
                    "uri": "http://www.songkick.com/artists/2925016-hot-red-chili-peppers?utm_source=60097&utm_medium=partner",
                    "identifier": [],
                    "onTourUntil": null
                },
                {
                    "onTourUntil": null,
                    "identifier": [],
                    "displayName": "Red Hot Chili Peppers Tribute",
                    "uri": "http://www.songkick.com/artists/8238363-red-hot-chili-peppers-tribute?utm_source=60097&utm_medium=partner",
                    "id": 8238363
                },
                {
                    "onTourUntil": null,
                    "identifier": [],
                    "displayName": "Red Hot Chili Peppers 2016",
                    "uri": "http://www.songkick.com/artists/9373224-red-hot-chili-peppers-2016?utm_source=60097&utm_medium=partner",
                    "id": 9373224
                },
                {
                    "onTourUntil": null,
                    "displayName": "Sulround (Red Hot Chili Peppers Cover)",
                    "identifier": [],
                    "uri": "http://www.songkick.com/artists/7641094-sulround-red-hot-chili-peppers-cover?utm_source=60097&utm_medium=partner",
                    "id": 7641094
                },
                {
                    "identifier": [],
                    "displayName": "Blood Sugar (tribute Red Hot Chili Peppers)",
                    "onTourUntil": null,
                    "uri": "http://www.songkick.com/artists/8528209-blood-sugar-tribute-red-hot-chili-peppers?utm_source=60097&utm_medium=partner",
                    "id": 8528209
                },
                {
                    "id": 10087419,
                    "displayName": "Aeroplane - WNY's tribute to the Red Hot Chili Peppers",
                    "uri": "http://www.songkick.com/artists/10087419-aeroplane-wnys-tribute-to-the-red-hot-chili-peppers?utm_source=60097&utm_medium=partner",
                    "identifier": [],
                    "onTourUntil": null
                }
            ]
        },
        "perPage": 50,
        "page": 1,
        "totalEntries": 7
    }
}
```
After obtaining the Artist ID from Songkick, I will use this API call to obtain all upcoming events from an artist's calendar: 
```
https://api.songkick.com/api/3.0/artists/468146/calendar.json?apikey={{apiKey}}&per_page=2
```
To return an array of all of the upcoming events for the queried artists:
```
{
    "resultsPage": {
        "status": "ok",
        "results": {
            "event": [
                {
                    "id": 39610995,
                    "displayName": "Firenze Rocks Festival 2021",
                    "type": "Festival",
                    "uri": "http://www.songkick.com/festivals/1704009-firenze-rocks/id/39610995-firenze-rocks-festival-2021?utm_source=60097&utm_medium=partner",
                    "status": "ok",
                    "popularity": 0.703631,
                    "start": {
                        "date": "2021-06-16",
                        "datetime": "2021-06-16T16:00:00+0200",
                        "time": "16:00:00"
                    },
                    "performance": [
                        {
                            "id": 74934829,
                            "displayName": "Red Hot Chili Peppers",
                            "billing": "headline",
                            "billingIndex": 1,
                            "artist": {
                                "id": 468146,
                                "displayName": "Red Hot Chili Peppers",
                                "uri": "http://www.songkick.com/artists/468146-red-hot-chili-peppers?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "8bfac288-ccc5-448d-9573-c33ea2aa5c30",
                                        "href": "http://api.songkick.com/api/3.0/artists/mbid:8bfac288-ccc5-448d-9573-c33ea2aa5c30.json"
                                    }
                                ]
                            }
                        }
                    ],
                    "ageRestriction": null,
                    "flaggedAsEnded": false,
                    "venue": {
                        "id": 3000439,
                        "displayName": "Visarno Arena",
                        "uri": "http://www.songkick.com/venues/3000439-visarno-arena?utm_source=60097&utm_medium=partner",
                        "metroArea": {
                            "displayName": "Florence",
                            "country": {
                                "displayName": "Italy"
                            },
                            "id": 30315,
                            "uri": "http://www.songkick.com/metro-areas/30315-italy-florence?utm_source=60097&utm_medium=partner"
                        },
                        "lat": 43.78147,
                        "lng": 11.22481
                    },
                    "location": {
                        "city": "Florence, Italy",
                        "lat": 43.78147,
                        "lng": 11.22481
                    },
                    "end": {
                        "date": "2021-06-16",
                        "time": null,
                        "datetime": null
                    },
                    "series": {
                        "displayName": "Firenze Rocks Festival"
                    }
                },
                {
                    "id": 39592184,
                    "displayName": "Pinkpop Festival 2021 (CANCELLED) ",
                    "type": "Festival",
                    "uri": "https://www.songkick.com/festivals/631-pinkpop/id/39592184-pinkpop-festival-2021?utm_source=60097&utm_medium=partner",
                    "status": "cancelled",
                    "popularity": 0.700498,
                    "start": {
                        "date": "2021-06-18",
                        "datetime": "2021-06-18T13:00:00+0200",
                        "time": "13:00:00"
                    },
                    "performance": [
                        {
                            "id": 74926554,
                            "displayName": "Red Hot Chili Peppers",
                            "billing": "headline",
                            "billingIndex": 1,
                            "artist": {
                                "id": 468146,
                                "displayName": "Red Hot Chili Peppers",
                                "uri": "https://www.songkick.com/artists/468146-red-hot-chili-peppers?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "8bfac288-ccc5-448d-9573-c33ea2aa5c30",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:8bfac288-ccc5-448d-9573-c33ea2aa5c30.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74935268,
                            "displayName": "Twenty One Pilots",
                            "billing": "headline",
                            "billingIndex": 2,
                            "artist": {
                                "id": 3123851,
                                "displayName": "Twenty One Pilots",
                                "uri": "https://www.songkick.com/artists/3123851-twenty-one-pilots?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "a6c6897a-7415-4f8d-b5a5-3a5e05f3be67",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:a6c6897a-7415-4f8d-b5a5-3a5e05f3be67.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74993610,
                            "displayName": "Pearl Jam",
                            "billing": "headline",
                            "billingIndex": 3,
                            "artist": {
                                "id": 312553,
                                "displayName": "Pearl Jam",
                                "uri": "https://www.songkick.com/artists/312553-pearl-jam?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "83b9cbe7-9857-49e2-ab8e-b57b01038103",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:83b9cbe7-9857-49e2-ab8e-b57b01038103.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74951993,
                            "displayName": "Deftones",
                            "billing": "headline",
                            "billingIndex": 4,
                            "artist": {
                                "id": 83230,
                                "displayName": "Deftones",
                                "uri": "https://www.songkick.com/artists/83230-deftones?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "7527f6c2-d762-4b88-b5e2-9244f1e34c46",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:7527f6c2-d762-4b88-b5e2-9244f1e34c46.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74935259,
                            "displayName": "Kensington",
                            "billing": "headline",
                            "billingIndex": 5,
                            "artist": {
                                "id": 773419,
                                "displayName": "Kensington",
                                "uri": "https://www.songkick.com/artists/773419-kensington?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "ec99e03b-c9ee-4942-98c2-701fb35e4643",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:ec99e03b-c9ee-4942-98c2-701fb35e4643.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74993611,
                            "displayName": "Frenna",
                            "billing": "headline",
                            "billingIndex": 6,
                            "artist": {
                                "id": 8891574,
                                "displayName": "Frenna",
                                "uri": "https://www.songkick.com/artists/8891574-frenna?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "8fc81e3d-bc5d-48cf-a871-ef6dcd5908e5",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:8fc81e3d-bc5d-48cf-a871-ef6dcd5908e5.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74993044,
                            "displayName": "JC Stewart",
                            "billing": "headline",
                            "billingIndex": 7,
                            "artist": {
                                "id": 9539884,
                                "displayName": "JC Stewart",
                                "uri": "https://www.songkick.com/artists/9539884-jc-stewart?utm_source=60097&utm_medium=partner",
                                "identifier": []
                            }
                        },
                        {
                            "id": 74993612,
                            "displayName": "Joost",
                            "billing": "headline",
                            "billingIndex": 8,
                            "artist": {
                                "id": 9315339,
                                "displayName": "Joost",
                                "uri": "https://www.songkick.com/artists/9315339-joost?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "eeeeb30f-3017-4131-8ce2-5994e438553c",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:eeeeb30f-3017-4131-8ce2-5994e438553c.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74935260,
                            "displayName": "Danny Vera",
                            "billing": "headline",
                            "billingIndex": 9,
                            "artist": {
                                "id": 41988,
                                "displayName": "Danny Vera",
                                "uri": "https://www.songkick.com/artists/41988-danny-vera?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "6d4e7e55-4bc3-43d5-aeb5-64d3c4e43623",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:6d4e7e55-4bc3-43d5-aeb5-64d3c4e43623.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74993616,
                            "displayName": "Ares",
                            "billing": "headline",
                            "billingIndex": 10,
                            "artist": {
                                "id": 368546,
                                "displayName": "Ares",
                                "uri": "https://www.songkick.com/artists/368546-ares?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "bc00312f-6a2c-4efa-9173-e541d703fc19",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:bc00312f-6a2c-4efa-9173-e541d703fc19.json"
                                    },
                                    {
                                        "mbid": "c3d34a8d-7430-4dfa-a8fe-b3b25e2f5602",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:c3d34a8d-7430-4dfa-a8fe-b3b25e2f5602.json"
                                    },
                                    {
                                        "mbid": "1685fab1-ee97-44b1-b180-d1c58d1b4e78",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:1685fab1-ee97-44b1-b180-d1c58d1b4e78.json"
                                    },
                                    {
                                        "mbid": "27ebf8d9-42a2-4fca-8a46-34ae64fff692",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:27ebf8d9-42a2-4fca-8a46-34ae64fff692.json"
                                    },
                                    {
                                        "mbid": "26b25761-5bb5-44b7-b76b-3dde9bb59f66",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:26b25761-5bb5-44b7-b76b-3dde9bb59f66.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74993613,
                            "displayName": "The Kik",
                            "billing": "headline",
                            "billingIndex": 11,
                            "artist": {
                                "id": 116433,
                                "displayName": "The Kik",
                                "uri": "https://www.songkick.com/artists/116433-kik?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "b6582c65-e927-40c2-81da-df304f171734",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:b6582c65-e927-40c2-81da-df304f171734.json"
                                    },
                                    {
                                        "mbid": "8b6db5cd-4c26-4ec5-8f83-9e1bfd8bbc82",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:8b6db5cd-4c26-4ec5-8f83-9e1bfd8bbc82.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74993614,
                            "displayName": "Nona",
                            "billing": "headline",
                            "billingIndex": 12,
                            "artist": {
                                "id": 477878,
                                "displayName": "Nona",
                                "uri": "https://www.songkick.com/artists/477878-nona?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "00b4e695-7a87-4090-882c-2f515edda877",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:00b4e695-7a87-4090-882c-2f515edda877.json"
                                    },
                                    {
                                        "mbid": "0b1db052-d925-4fd7-9271-81142244ac87",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:0b1db052-d925-4fd7-9271-81142244ac87.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74993615,
                            "displayName": "Ten Times A Million",
                            "billing": "headline",
                            "billingIndex": 13,
                            "artist": {
                                "id": 10033989,
                                "displayName": "Ten Times A Million",
                                "uri": "https://www.songkick.com/artists/10033989-ten-times-a-million?utm_source=60097&utm_medium=partner",
                                "identifier": [
                                    {
                                        "mbid": "07556d17-5fe1-4a91-99ba-3035ee5c69eb",
                                        "href": "https://api.songkick.com/api/3.0/artists/mbid:07556d17-5fe1-4a91-99ba-3035ee5c69eb.json"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 74935267,
                            "displayName": "ELLE HOLLIS",
                            "billing": "headline",
                            "billingIndex": 14,
                            "artist": {
                                "id": 9859394,
                                "displayName": "ELLE HOLLIS",
                                "uri": "https://www.songkick.com/artists/9859394-elle-hollis?utm_source=60097&utm_medium=partner",
                                "identifier": []
                            }
                        }
                    ],
                    "ageRestriction": null,
                    "flaggedAsEnded": false,
                    "venue": {
                        "id": 47546,
                        "displayName": "Megaland",
                        "uri": "https://www.songkick.com/venues/47546-megaland?utm_source=60097&utm_medium=partner",
                        "metroArea": {
                            "displayName": "Heerlen",
                            "country": {
                                "displayName": "Netherlands"
                            },
                            "id": 31389,
                            "uri": "https://www.songkick.com/metro-areas/31389-netherlands-heerlen?utm_source=60097&utm_medium=partner"
                        },
                        "lat": 50.88077,
                        "lng": 6.02095
                    },
                    "location": {
                        "city": "Landgraaf, Netherlands",
                        "lat": 50.88077,
                        "lng": 6.02095
                    },
                    "end": {
                        "date": "2021-06-20",
                        "time": null,
                        "datetime": null
                    },
                    "series": {
                        "displayName": "Pinkpop Festival"
                    }
                }
            ]
        },
        "perPage": 2,
        "page": 1,
        "totalEntries": 8
    }
}
```
