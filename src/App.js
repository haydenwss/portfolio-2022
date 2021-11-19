import React from 'react';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import SideBar from "./components/SideBar";
import ProjectGallery from "./components/ProjectGallery";
import ViewProject from "./components/ViewProject";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Construction from './pages/Construction';
import { Helmet, HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <div className="app-container">

      <HelmetProvider>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hayden MacDonald Portfolio</title>
            <link rel="canonical" href="http://www.haydenmacdonalddesign.com" />
            <meta name="description" content="Description" CONTENT="A portfolio showcasing modern web design and online marketing solutions." />
        </Helmet>
      </HelmetProvider>

      <Router>
        <SideBar />
        <Route
            render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path='/' render={() => <LandingPage/> } />
              <Route exact path='/construction' render={() => <Construction/> } />
              <Route exact path='/profile' render={() => <Profile/> } />
              <Route exact path='/projects' render={() => <ProjectGallery /> } />
              <Route exact path='/projects/:id' render={() => <ViewProject /> } />
            </Switch>
            )}
        />
      </Router>
    </div>
  );
}

export default App;
