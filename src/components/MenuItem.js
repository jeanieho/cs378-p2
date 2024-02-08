import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        // {/* <h2>{title}</h2> */}
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img 
                        src={require(`../images/${imageName}`)} alt={title} className="rounded" style={{ width: "110%" }}
                    />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Price: ${price}</p>
                    </div>
                    <div className="button">
                        <button className="rounded">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MenuItem;
