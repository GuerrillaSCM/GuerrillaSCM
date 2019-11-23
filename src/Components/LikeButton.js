import React from 'react';

const LikeButton = () => {
    return (
        <div>
            <p>This is from React</p>
        </div>
    );
}

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e('button', { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

export default LikeButton;

// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);