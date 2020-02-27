# React Resume Template

This template uses React to create the user interface and Google Drive API to fetch the data. No server-side code is being used. This way you can have the advantages of a static website (speed, fewer dependencies, less cost to upload it on a server), while at the same time you can manipulate a simple Google sheet to fill in or change your data.

[LIVE DEMO](https://aris-papadopoulos.github.io/react-resume-template/)


### Options

The template also has a handful of styling options to customize your preference, namely: 
- Color change: Blue-ish, Red-ish, Green or Pink
- Menu alignment - Align to top/left (if on desktop/mobile) or middle 
- Enable/disable certain pages 
- Menu style type 
  * *style1* - Changes its color and background
  * *style2* - Scale animation and color change

To change these options, go to the "options.js" file in "src" folder and change the values of the variables.
You can see a presentation of these options in the live demo page.


### Google Sheet

The Google sheet API consists of 5 pages, each representing a page of the website.


**basic** - Your name, picture, profession and links to your social media. The fields with the grey background should not be removed.
If you wish to remove a certain field, you can just delete its value from corresponding "B" column.

**main** - The CV-type of info in the main page. These are grouped in 5 categories: "paragraph", "experience", "award", "education", "interest"
If want to fill in your own, just type to a new row the category of info, the title and the description like the examples given.

**skill_set** - A list of your skills and a bar showing your expertise in the particular skill.
Use the "A" and "B" columns to add/remove as you wish.

**work_samples** - The portfolio page, a collection of your work you'd like to exhibit.
Use column "A" for the title, "B" for the link (if there is any), "C" for the description and "D" for an image.

**contact** - Contains some text, contact data for email, phone and skype and a google map iframe (read how to get code for your own google map iframe here 
https://www.dummies.com/web-design-development/site-development/how-to-embed-a-google-map-with-iframe/). 
The fields in the grey background should not be removed. Delete their values in "B" column to prevent them from showing in the page.

You can view the prototype google sheet used for this template at 
https://docs.google.com/spreadsheets/d/1lRkTyBHXMhPVrQVT_EgeDTt62xk5tcPlwvrgA8WngtY/edit?usp=drive_web&ouid=100699200981660286797
You may copy it and fill in your own data.

The sheet pages names (basic/main/skill_set/work_samples/contact) are used as variables so that they can be fetched when entering that page,
thus should not be renamed or deleted if you'd like to use these pages on your website.


### Setup

To create your own web page based on this template you should:
1. Clone or download this repo to your PC.
2. Have node.js installed on your computer.
3. Use a console / command line to install packages related to this project. (go to project folder and run "npm install").
4. Go to "setup.js" file in "src" folder, change the variables "GOOGLE_SHEET_ID", "GOOGLE_API_KEY" accordingly and set "demo_mode" to "false".
5. Build the project (type "npm build" in the console) so that the static files are created.
6. Get your static files from "build" folder and upload them in your server*.

\* You may have to change the paths in "index.html" file starting with "/react-resume-template/" to "./"