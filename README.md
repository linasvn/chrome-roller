<img width="493" alt="Screenshot 2022-09-17 at 02 40 35" src="https://user-images.githubusercontent.com/77122114/190833678-5d38526f-2b0c-46ed-a4b0-1a222bc76ce0.png">

# Roll Extension

### Local development

First, run the development server:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Deployment

Build the app for production:

`npm run build`

To test the extension in development mode in Chrome:
  - Open the Extension Management page by navigating to `chrome://extensions`. 
  - Enable Developer Mode by clicking the toggle switch next to Developer mode. 
  - Click the LOAD UNPACKED button and select the `build` folder.

## Roll up features

1. Autoclose after 4.5s.
2. Autoclose is prevented upon user's action.

### Notes

Chrome extensions are stick to the Chrome Extension Button in the browser's header. We cannot offset its position nor change its background's transparency or add animations.
