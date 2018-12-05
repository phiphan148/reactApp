import React from 'react';
import Member from "./Member";

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:"Luke", photo:"./images/Luke.png"},
                {name:"Martin", photo:"./images/Martin.png"},
                {name:"Sabrina", photo:"./images/Sabrina.png"},
                {name:"Sai", photo:"./images/Sai.png"},
            ]
        };
    }
     getMember = () => {
        let listMember = [];
        this.state.data.map(member =>
           listMember.push(<Member key={member.name} name={member.name} photo={member.photo}></Member>)
        );
         return listMember;
    }
    render () {
        return (
            <div>
                <ul>
                    {this.getMember()}
                </ul>
            </div>
        );
    }
}

export default Team;
