import Layout from './components/Layout/Layout';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import Products from './containers/Products/Products';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Products />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
