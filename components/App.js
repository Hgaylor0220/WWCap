import React from 'react';
import Header from './Header';
import Home from './Home';
import RiverList from './RiverList';
import NewOrderControl from './NewOrderControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            masterRiverList: []
        };
        this.handleAddingNewOrderToList = this.handleAddingNewOrderToList.bind(this);
    }

    handleAddingNewOrderToList(newOrder) {
        var newMasterRiverList = this.state.masterRiverList.slice();
        newMasterRiverList.push(newOrder);
        this.setState({ masterRiverList: newMasterRiverList });
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
    
                    <Route path='/RiverList' render={() => <RiverList RiverList={this.state.masterRiverList} />} />
                
                    <Route component={Error404} />
                </Switch>
            </div>
        );
    }
}

export default App;