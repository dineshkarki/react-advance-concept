// import './App.css';
import CustomerAdd from './redux/CustomerAdd';
import CustomerView from './redux/CustomerView';
import MultipleApi from './multiple-api-call/MultipleApi';
import InterviewApiCall from './multiple-api-call/InterviewApi';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CustomHook from './Custom-Hook/CustomHook';
import SumCalculator from './useCallback-useMemo-Example/SumCalculator';
import Login from './react-auth/Login';
import Profile from './react-auth/Profile';


function App() {

  return (
	<Provider store={store}>
		<div className="App">
			<div className="App" style ={{ float: 'left', width: '500px', padding: '20px'}}>
				<h1>React Redux Customer Example</h1>
				<CustomerAdd/>
				<CustomerView/>
				<MultipleApi />
				<InterviewApiCall />
				<CustomHook />
			</div>
			<div style ={{ float: 'right', width: '500px', padding: '20px'}}>
				<SumCalculator />
				<Login />
				<Profile />
			</div>
		</div>
	</Provider>
  );
}

export default App;
