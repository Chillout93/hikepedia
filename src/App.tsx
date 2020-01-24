import * as React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class App extends React.Component<{}, {}> {
    state = {

    }

    componentDidMount = () => {

    };

    render() {
        const position = [51.505, -0.09];

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 p-0 m-0 overflow-auto">
                        <nav className="navbar navbar-dark bg-dark">
                            <a className="navbar-brand" href="#">Trailpedia</a>
                        </nav>
                        <div className="m-2">
                            <input type="text" className="form-control" placeholder="Search"></input>
                        </div>
                        {hikes.map(x => <div className="m-2">{card(x.name, x.description)}</div>)}
                    </div>
                    <div className="col-9 p-0 m-0">
                        <Map center={position} zoom={18}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </Map>
                    </div>
                </div>
            </div>
        )
    }
}

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Losktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const hikes = [
    { name: "Test 1", description: lorem },
    { name: "Test 2", description: lorem },
    { name: "Test 3", description: lorem },
    { name: "Test 4", description: lorem },
    { name: "Test 5", description: lorem },
    { name: "Test 1", description: lorem },
    { name: "Test 2", description: lorem },
    { name: "Test 3", description: lorem },
    { name: "Test 4", description: lorem },
    { name: "Test 5", description: lorem },
    { name: "Test 1", description: lorem },
    { name: "Test 2", description: lorem },
    { name: "Test 3", description: lorem },
    { name: "Test 4", description: lorem },
    { name: "Test 5", description: lorem },
    { name: "Test 1", description: lorem },
    { name: "Test 2", description: lorem },
    { name: "Test 3", description: lorem },
    { name: "Test 4", description: lorem },
    { name: "Test 5", description: lorem },
]


const card = (name: string, description: string) => <div className="card">
    <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
    </div>
</div>









