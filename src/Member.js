import React from 'react';

class Member extends React.Component {
    render() {
        return (
            <li>
                <p>{this.props.name}</p>
                <img src={this.props.photo} className="teamProfilePhotos" alt="profilePhoto"/>
            </li>

        );
    }
}

export default Member;
