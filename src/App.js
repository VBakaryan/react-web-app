import Layout from './components/Layout/Layout';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
