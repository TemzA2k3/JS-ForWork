import './search-panel.css'
import { Component } from 'react';

class SerchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render(){
        return(
            <input
            type='text'
            className='form-control serch-input'
            placeholder='Найти сотрудника'
            value={this.state.term}
            onChange={this.onUpdateSearch}/>
    )}
}

export default SerchPanel