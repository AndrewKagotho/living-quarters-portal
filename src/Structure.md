# **CURRENT**

src
- ~~browse.js~~
- ~~browseNav.js~~
- ~~dashboard.js~~
- ~~dbDisplay.js~~
- ~~footer.js~~
- ~~index.js~~
- ~~landDashboard.js~~
- ~~landingForms.js~~
- ~~landlordComms.js~~
- ~~landlordNav.js~~
- ~~landlordProfile.js~~
- ~~mainLanding.js~~
- ~~management.js~~
- ~~profile.js~~
- ~~systemTitle.js~~
- ~~userComms.js~~
- ~~userNav.js~~
- styles
- ~~php~~
- ~~landlordDashComps~~
- ~~images~~
- ~~dashboardComps~~
- . . .

<br>

# **PROPOSED**

    .
    └─ /src
       ├─ /assets
       │  └─ images
       ├─ /components*
       │  │ (component,style,test)
       │  ├─ forms*
       │  └─ buttons*
       ├─ /store
       │  ├─ Actions.js
       │  ├─ State.js
       │  ├─ Reducer.js
       │  └─ index.js
       ├─ /features
       │  ├─ /dashboardComps
       │  │  └─ ...
       │  └─ /landlordDashComps
       │     ├─ dbDisplay.js*
       │     └─ ...
       ├─ /layouts
       │  ├─ browseNav.js
       │  ├─ userNav.js
       │  ├─ landlordNav.js
       │  └─ footer.js
       ├─ /views
       │  ├─ mainLanding.js*
       │  │  ├─ systemTitle.js
       │  │  └─ landingForms.js*
       │  ├─ /browse
       │  │  └─ browse.js
       │  ├─ /user
       │  │  ├─ dashboard.js
       │  │  ├─ profile.js
       │  │  └─ userComms.js
       │  └─ /landlord
       │    ├─ landDashboard.js
       │    ├─ management.js
       │    ├─ landlordProfile.js
       │    └─ landlordComms.js
       ├─ /services
       │  └─ php
       ├─ /utils*
       ├─ index.js
       ├─ App.js*
       ...
