import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LearnMore from "./components/learnmore/LearnMore";
import Header from "./components/header/Header";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />}>
						<Route index element={<Home />} />
						<Route path="signUp" element={<Signup />} />
						<Route path="login" element={<Login />} />
						<Route path="/learnmore" element={<LearnMore />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
