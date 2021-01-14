import './App.css';
import Layout from './component/Layout/Layout';

import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';

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
