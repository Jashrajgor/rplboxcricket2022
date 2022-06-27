import React from 'react'
import axios from 'axios'
class Forms extends React.Component {
    constructor() {
        super()
        this.state = {
            mydata: {
                team_name: '',
                captain_name: '',
                mobile_number: '',
                player1: '',
                player2: '',
                player3: '',
                player4: '',
                player5: '',
                player6: '',
                player7: '',
                player1age: '',
                player2age: '',
                player3age: '',
                player4age: '',
                player5age: '',
                player6age: '',
                player7age: ''
            }
        }
    }
    uteam_name = (event) => {
        this.setState({ team_name: event.target.value })
    }
    ucaptain_name = (event) => {
        this.setState({ captain_name: event.target.value });
    }
    umobile_number = (event) => {
        this.setState({ mobile_number: event.target.value })
    }
    uplayer1 = (event) => {
        this.setState({ player1: event.target.value })
    }
    uplayer2 = (event) => {
        this.setState({ player2: event.target.value })
    }
    uplayer3 = (event) => {
        this.setState({ player3: event.target.value })
    }
    uplayer4 = (event) => {
        this.setState({ player4: event.target.value })
    }
    uplayer5 = (event) => {
        this.setState({ player5: event.target.value })
    }
    uplayer6 = (event) => {
        this.setState({ player6: event.target.value })
    }
    uplayer7 = (event) => {
        this.setState({ player7: event.target.value })
    }
    uplayer1age = (event) => {
        this.setState({ player1age: event.target.value })
    }
    uplayer2age = (event) => {
        this.setState({ player2age: event.target.value })
    }
    uplayer3age = (event) => {
        this.setState({ player3age: event.target.value })
    }
    uplayer4age = (event) => {
        this.setState({ player4age: event.target.value })
    }
    uplayer5age = (event) => {
        this.setState({ player5age: event.target.value })
    }
    uplayer6age = (event) => {
        this.setState({ player6age: event.target.value })
    }
    uplayer7age = (event) => {
        this.setState({ player7age: event.target.value })
    }
    updatemydata = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2020/datafromreact', this.state)
            .then(Response => console.log(Response))
            .catch(console.log(Error))
    }

    render() {
        return (
            <div className='bgimage'>
                <div className="container-fluid">
                    <h2 className="txcolor"><i><u>RAGHUNATH PREMIRER LEAGUE</u></i></h2>
                    <h3 className='txcolor1'><u>Entry-Forms</u></h3>
                </div>
                <div>
                    <span className="entryfee">Entry Fee : &#x20b9; 1200</span>
                    <span className="entryfee1">Date 8 & 9 July 2022</span>
                </div>
                <form onSubmit={this.updatemydata}>
                    <div>
                        <label className="temaname">Team Name :- </label>
                        <input type="text" className="inputag" placeholder="click-here" onChange={this.uteam_name}></input>
                    </div>
                    <div>
                        <label className="temaname">Captain Name :- </label>
                        <input type="text" className="inputag" placeholder='click-here' onChange={this.ucaptain_name}></input>
                    </div>
                    <div>
                        <label className="temaname">Mobile No. :- </label>
                        <input type="text" className="inputag" placeholder="clickhere" onChange={this.umobile_number}></input>
                    </div>
                    <div>
                        <table className="table">
                            <tr>
                                <td><b>PLAYRES NAME</b></td>
                                <td><b>AGE</b></td>
                            </tr>
                            <tr className="innertable">
                                <td>
                                    <input type="text" className="inputag" placeholder="enter-players-name" onChange={this.uplayer1}></input>
                                </td>
                                <td>
                                    <select className="select"  onChange={this.uplayer1age}>
                                        <option>Select-age</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="innertable">
                                <td>
                                    <input type="text" className="inputag" placeholder="enter-players-name" onChange={this.uplayer2}></input>
                                </td>
                                <td>
                                    <select className="select"  onChange={this.uplayer2age}>
                                        <option>Select-age</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="innertable">
                                <td>
                                    <input type="text" className="inputag" placeholder="enter-players-name" onChange={this.uplayer3}></input>
                                </td>
                                <td>
                                    <select className="select"  onChange={this.uplayer3age}>
                                        <option>Select-age</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="innertable">
                                <td>
                                    <input type="text" className="inputag" placeholder="enter-players-name" onChange={this.uplayer4}></input>
                                </td>
                                <td>
                                    <select className="select"  onChange={this.uplayer4age}>
                                        <option>Select-age</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="innertable">
                                <td>
                                    <input type="text" className="inputag" placeholder="enter-players-name" onChange={this.uplayer5}></input>
                                </td>
                                <td>
                                    <select className="select"  onChange={this.uplayer5age}>
                                        <option>Select-age</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="innertable">
                                <td>
                                    <input type="text" className="inputag" placeholder="enter-players-name" onChange={this.uplayer6}></input>
                                </td>
                                <td>
                                    <select className="select"  onChange={this.uplayer6age}>
                                        <option>Select-age</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="innertable">
                                <td>
                                    <input type="text" className="inputag" placeholder="enter-players-name" onChange={this.uplayer7}></input>
                                </td>
                                <td>
                                    <select className="select"  onChange={this.uplayer7age}>
                                        <option>Select-age</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                        <input type="submit" value="Submit" className="btn btn-success ms-4"></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default Forms