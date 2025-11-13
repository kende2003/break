<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/kende2003/break">
    <img src="images/logo_B.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Break</h3>

  <p align="center">
    **Break** is a minimalistic social platform where users can share what’s on their mind and read thoughts shared by others.  
    <br />
    <a href="https://github.com/kende2003/break"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kende2003/break">View Demo</a>
    &middot;
    <a href="https://github.com/kende2003/break/issues/new?template=bug-report.md">Report Bug</a>
    &middot;
    <a href="https://github.com/kende2003/break/issues/new?template=feature-request.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Screenshot][product-screenshot]](https://example.com)  

This project started as a way to experiment with Firebase’s real-time features and create a simple, authentic space for micro-posts — without the clutter of traditional social media.

🚧 The project is currently under active development.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![JavaScript][JavaScript.com]][JavaScript-url]
* [![Firebase][Firebase.io]][Firebase-url]
* [![SCSS][Sass.badge]][Sass.url]
* [![CSS3][CSS3.badge]][CSS3.url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To set up the application locally do the following steps.

## Prerequisites

Before you begin, make sure you have the following installed and configured:

1. **Node.js & npm** on your local machine  
   - [Download Node.js](https://nodejs.org/) (LTS version recommended)  
   - Verify installation:  
     ```bash
     node -v
     npm -v
     ```

2. **Firebase project** set up in the [Firebase Console](https://console.firebase.google.com/)  
   - Enable **Authentication** (Email/Password or Google)  
   - Enable **Realtime Database**  

### Installation

1. Clone the repositroy

```bash
git clone https://github.com/kende2003/break
cd break
```

2. Copy the environment variables
```bash
cp .env.sample .env.local
```

3. Fill in your Firebase credentials in `.env.local`
``` bash
VITE_FB_API_KEY=your_api_key
VITE_FB_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FB_DATABASE_URL=https://your_project_id-default-rtdb.firebaseio.com
VITE_FB_PROJECT_ID=your_project_id
VITE_FB_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FB_MESSAGING_SENDER_ID=your_sender_id
VITE_FB_APP_ID=your_app_id
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

4. Install dependencies
``` bash
npm install
```

5. Run the app
``` bash
npm run dev
```

<!-- USAGE EXAMPLES -->
## Usage

- Create a user account or sign in with Google.

- Share a thought — it instantly appears in the database and on other clients.

- Explore the Discover feed to read what others are thinking in real time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

This project is currently under active development. Below is the planned roadmap for future features:

### Future Features
- [ ] Fix CSS
- [ ] Make the app responsive
- [ ] Add user profiles
- [ ] Edit/Delet thoughts
- [ ] Pagination and sorting
- [ ] Likes and reactions
- [ ] Dark mode

See the [open issues](https://github.com/kende2003/break/issues) for a detailed list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Kende Fay - [LinkedIn](https://www.linkedin.com/in/kende-fay/)

Project Link: [https://github.com/kende2003/break](https://github.com/kende2003/taskflow-devops-demo)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

A big thanks to the following resources and tools that helped in this project:

* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Shields.io](https://shields.io/)
* [Firebase](https://firebase.google.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kende2003/taskflow-devops-demo.svg?style=for-the-badge
[contributors-url]: https://github.com/kende2003/taskflow-devops-demo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kende2003/taskflow-devops-demo.svg?style=for-the-badge
[forks-url]: https://github.com/kende2003/taskflow-devops-demo/network/members
[stars-shield]: https://img.shields.io/github/stars/kende2003/taskflow-devops-demo.svg?style=for-the-badge
[stars-url]: https://github.com/kende2003/taskflow-devops-demo/stargazers
[issues-shield]: https://img.shields.io/github/issues/kende2003/taskflow-devops-demo.svg?style=for-the-badge
[issues-url]: https://github.com/kende2003/taskflow-devops-demo/issues
[license-shield]: https://img.shields.io/github/license/kende2003/taskflow-devops-demo.svg?style=for-the-badge
[license-url]: https://github.com/kende2003/taskflow-devops-demo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kende-fay/
[product-screenshot]: images/screenshot.png

<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[JavaScript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

[Firebase.io]: https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black
[Firebase-url]: https://firebase.google.com/

[Sass.badge]: https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white
[Sass.url]: https://sass-lang.com/

[CSS3.badge]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS3.url]: https://developer.mozilla.org/en-US/docs/Web/CSS


