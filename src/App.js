import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Product from './Product/Product';
import About from './About/About';
import Contact from './Contact/Contact';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import Lunch from './Lunch/Lunch';
import Snacks from './Snacks/Snacks';
import OrderForm from './OrderForm/OrderForm';
import Footer from './Footer/Footer';
import Learn from "./Learn/Learn";
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/breakfast" element={<Breakfast />} />
                <Route path="/dinner" element={<Dinner />} />
                <Route path="/lunch" element={<Lunch />} />
                <Route path="/snacks" element={<Snacks />} />
                <Route path="/orderform" element={<OrderForm />} />
                <Route path="/Learn" element={<Learn/>}/>
            </Routes>
            <Footer/>
            
        </Router>
    );
}

export default App;
