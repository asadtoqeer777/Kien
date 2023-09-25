import Login from './login/page';
import Card from './__components/card/Card';
import CategoriesList from './categoriesList/page';
import LandingPage from './landingPage/page';
import LandingTransition from './landingPageTransition/page';
import Category from './categories/page';
import Register from './register/page';
import Connect from './connect/page';

export default function Home() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <LandingPage /> */}
      {/* <LandingTransition /> */}
      {/* <Category /> */}
      {/* <CategoriesList /> */}
      <Connect />
    </div>
  )
}
