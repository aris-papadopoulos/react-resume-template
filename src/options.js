/* Change the theme's main color - can be either 'blue', 'red' or 'green' */
export let color_theme = 'blue'; 
/* Set to "true" to enable or "false" to disable sections of the template */ 
export let sections = {
    main: true,
    skill_set: true,
    work_samples: true,
    contact: true
}
/* The Sheet ID containing your site's data. The ID can be found on the URL of the sheet */
export const GOOGLE_SHEET_ID = '1raPYKhL5Bk0y3H3ti7o4bvGktzGfMW99nMNTXYK-idE';
/* Your API key, needed for requesting data from Google Sheets. 
   Can be retrieved from https://developers.google.com/sheets/api/quickstart/js */
export const GOOGLE_API_KEY = 'AIzaSyBhiqVypmyLHYPmqZYtvdSvxEopcLZBdYU';