import * as React from "react";



export default class Header extends React.Component<any, any>{

    render() {
        try {
            return (
                <header role="top-header">
                    <nav role="top-navbar">
                        <div className="navbar-header">
                        </div>
                        <div className="navbar-content">
                            <div className="breadcrum-cnt">
                                <ul >
                                    Crime Predictor
                    </ul>
                            </div>
                            <div className="right-nav"></div>
                        </div>
                    </nav>
                </header>
            )
        } catch (e) {
            return (
                <h1>Error in Header</h1>
            )
        }
    }
}