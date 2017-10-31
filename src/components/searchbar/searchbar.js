import React from 'react';
import './searchbar.css';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let link = this.redirect();
        window.location.assign(link);
        event.preventDefault();
    }

    redirect() {

        let l = this.state.value.length;
        let x = this.state.value.substr(l - 2, 2);
        let data;
        if (x === '!y' || x === '!g' || x === '!t' || x === '!p') {
            data = this.state.value.substr(0, l - 2);
        }
        else {
            data = this.state.value;
        }

        //google cannot into '#'
        let link;
        if (data.includes('#')) {
            //*todo zmien to na immutable shit*/
            link = data.replace('#', '%23');
        }
        else link = data;

        switch (x) {
            case '!y':
                return 'https://www.youtube.com/results?search_query=' + link;
            case '!g':
                return 'https://www.google.pl/search?q=' + link;
            case '!t':
                return 'https://translate.google.pl/#en/pl/' + link;
            case '!p':
                return 'https://translate.google.pl/#pl/en/' + link;
            default:
                return 'https://www.google.pl/search?q=' + link;
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder={'Search'} autoFocus id='searchbar' type="text" value={this.state.value}
                       onChange={this.handleChange}/>
            </form>

        )
    }
}

export default Searchbar;
