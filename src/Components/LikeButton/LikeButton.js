import React from 'react';

// const LikeButton = (props) => {
//     return (
//         <div>
//             <p>This is from React</p>
//         </div>
//     );
// }

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

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Render Component</p>
            </div>
        );
    }
}

export default LikeButton;