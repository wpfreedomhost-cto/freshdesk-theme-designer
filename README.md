## FreshDesk Theme Designer

Ab attempt to revive a promising theme builder that has been dormant for three years.

### Folder structure explained

    .
    ├── README.md                  This file
    ├── app                        Contains the files that are required for the front end component of the app
    │   ├── app.js                 JS to render the dynamic portions of the app
    │   ├── icon.svg               Sidebar icon SVG file. Should have a resolution of 64x64px.
    │   ├── freshdesk_logo.png     The Freshdesk logo that is displayed in the app
    │   ├── style.css              Style sheet for the app
    │   ├── template.html          Contains the HTML required for the app’s UI
    ├── config                     Contains the installation parameters and OAuth configuration
    │   ├── iparams.json           Contains the parameters that will be collected during installation
    │   └── iparam_test_data.json  Contains sample Iparam values that will used during testing
    └── manifest.json              Contains app meta data and configuration information
    └── ember-src                   Contains ember app source code

### building

* open project rooot in termilal and run `fdk run`
* open new terminal in ember-src/portal-builder-ember and run `npm run start`
