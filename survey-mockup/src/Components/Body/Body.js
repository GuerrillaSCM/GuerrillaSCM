import React from 'react';
import './Page.css'

/*
    Change the name of the file to survey
    The component should accept props for like date created, published stat, and id from an external class
    The whole page under everything should be a separate component
        that would accept props or like an array of details
        like questions, title.... So we can use the same component
        for create and edit survey 
*/

const body = () => {
    return (
        <div className="">
            <div className="card mt-3 container">
                <div className="card-body">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unnamed Survey" />
                </div>
                <div className="card-body text-left">
                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                        <li>Date Created: <span className="text-primary">Today</span></li>
                        <li>Published Status: <span className="text-danger">No</span></li>
                        <li>Survey ID: <span className="text-primary">#12345678</span></li>
                        <li><button type="button" className="btn btn-secondary bg-danger text-light mt-1">Publish</button></li>
                    </ul>
                </div>
                <div className="card-body text-left">
                    <div className="btn-group bg-light" role="group" aria-label="Button group with nested dropdown">
                        <button type="button" className="btn btn-primary">Save</button>
                        <button type="button" className="btn btn-secondary bg-light text-dark">Add a question</button>
                        <button type="button" className="btn btn-secondary bg-light text-dark">Trigger Options</button>
                        <button type="button" className="btn btn-secondary bg-light text-dark">Embeddable Code</button>

                    </div>
                </div>
            </div>
            <div className="container">
                <form>
                <div className="form-group page">
                <input type="email" className="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Survey Title" />
                <input type="email" className="form-control form-control-sm mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Optional Description" />
                </div>
                <div className="">
                <button type="submit" className="btn btn-success text-light mt-1 mb-5">Done</button>

                </div>
                </form>
                
            </div>
        </div>
    );
}

export default body;