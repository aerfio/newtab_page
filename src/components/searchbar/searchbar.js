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
        if (link === 'mu') {
            window.location.assign('https://boards.4chan.org/mu/');
            event.preventDefault();
        }
        //showing/hiding terminal
        if (link === 't') {
            event.preventDefault();
            this.setState({value: ''});
            this.props.onSubmit();
        }
        else if (link.split(' ')[0] === 'chan') {
            window.location.assign('https://boards.4chan.org/' + link.split(' ')[1] + '/');
            event.preventDefault();
        }
        else {
            event.preventDefault();
            console.log(link);
            // window.location.assign(link);

        }
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


        let patt = /[a-zA-Z0-9]+/g;
        //special case to show/hide terminal
        if (data.toLowerCase() === 't' || data.toLowerCase() === 'term') {
            return 't';
        }
        else if (data === 'mu') {
            return 'mu';
        }
        else if (data.split(' ')[0] === 'chan' && patt.test(data.split(' ')[1]) && data.length>4) {
            return 'chan ' + data.split(' ')[1];
        }

        //google cannot into '#' or '&'
        let link;
        if (data.includes('#') || data.includes('&')) {
            link = data.replace(/[#&]/g, function (x) {
                return x.replace(x, '%' + (x.charCodeAt(0) - 12))
            })
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
                <input autoCorrect={'off'} spellCheck={'false'} placeholder={'Search'} autoFocus autoComplete={'off'} id='searchbar' type="text"
                       value={this.state.value}
                       onChange={this.handleChange}/>
            </form>
        )
    }
}

export default Searchbar;
