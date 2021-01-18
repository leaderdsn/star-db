import React, { Component } from 'react';
import './row.css';

export default class Row extends Component {
    row = ({left, right}) => {
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    { left }
                </div>
                <div className="col-md-6">
                    { right }
                </div>
            </div>
        )
    }
}
