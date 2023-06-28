import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import Home from './Example/Home';
import Nav from './Nav/Nav';
import ListUser from './Users/ListUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 *
 * 2 components: class component / function component (function, arrow)
 */

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<Nav />

					<img
						src={logo}
						className="App-logo"
						alt="logo"
					/>
					{/* <ListTodo /> */}
					{/* <MyComponent/> */}
					{/* <Home /> */}

					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="todo"
							element={<ListTodo />}
						/>
						<Route
							path="about"
							element={<MyComponent />}
						/>
						<Route
							path="user"
							element={<ListUser />}
						/>
					</Routes>
				</header>

				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</div>
		</BrowserRouter>
	);
}

export default App;
