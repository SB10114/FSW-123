import './App.css';
import Card from './Card.js';

function App() {
    return (
        <div style = { {display:'flex', justifyContent: 'space-evenly'} }>
            <Card title = {'Title 1'}
            subtitle= {'Apples'}
            description = {'React Practice:'}
            background = {'blue'}
            width = {115}
            /> 
            <Card title = {'Title 2'}
            subtitle= {'Peaches'}
            description = {'Making Cards'}
            background = {'red'}
            width = {115}
            />
            <Card title = {'Title 3'}
            subtitle= {'Pears'}
            description = {'With Some'}
            background = {'green'}
            width = {115}
            />
            <Card title = {'Title 4'}
            subtitle= {'Banana'}
            description = {'Inline Styling.'}
            background = {'purple'}
            width = {115}
            />
        </div>
    );
  };


export default App;