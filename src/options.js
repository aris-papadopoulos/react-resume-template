/* Change the theme's main color - can be either 'blue', 'red' or 'green' */
export const theme_color = 'blue'; 

/* Set to "true" to enable or "false" to disable sections of the template */ 
export const active_links = {
    main: true,
    skill_set: true,
    work_samples: true,
    contact: true,
    cv_download: true
}

/* Menu styling, options available are "style1" and "style2" */
export const menu_style = 'style1';

/* Menu position, "true" places it in the center, while "false" places it from the start */
export const centered_menu = false;

/* The URL your resume is uploaded */
export const RESUME_URL = 'https://drive.google.com/open?id=1M7BI3pr5Necs8BaV0AAGQCniKyTptdpd';

/* The Sheet ID containing your site's data. The ID can be found on the URL of the sheet */
export const GOOGLE_SHEET_ID = '1lRkTyBHXMhPVrQVT_EgeDTt62xk5tcPlwvrgA8WngtY';

/* Your API key, needed for requesting data from Google Sheets. 
   Can be retrieved from https://developers.google.com/sheets/api/quickstart/js */
export const GOOGLE_API_KEY = 'AIzaSyBhiqVypmyLHYPmqZYtvdSvxEopcLZBdYU';

/* Enables demo mode. An options panel will appear (set it to "false" before building) */
export const demo_mode = true;