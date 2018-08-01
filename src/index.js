import React from 'react';
import ReactDOM from 'react-dom';
import EditorHeader from './containers/EditorHeader';
import ItemsList from './containers/ItemsList';

import './assets/styles/index.css';

class Editor extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            history: [{
                items: []
            }],
            stepNumber: 0,
          }
    }

    addItem = (type, asset) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const items = [...current.items];

        let newItem = {
            width: 320,
            height: 200,
            x: 10,
            y: 10,
            asset: asset,
            type: type
        };

        this.setState({
            history: history.concat([{
                items: [...items, newItem],
            }]),
            stepNumber: history.length,
        });
    }

    itemUpdatePosition = ( i, x, y ) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const items = [...current.items];

        items[i] = { ...items[i], x: x, y: y };

        this.setState({
            history: history.concat([{
                items: items,
            }]),
            stepNumber: history.length,
        });
    }

    itemUpdateSize = (i, w, h, x, y) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const items = [...current.items];

        items[i] = {
            ...items[i],
            width: w,
            height: h,
            x: x, 
            y: y,
        };

        this.setState({
            history: history.concat([{
                items: items,
            }]),
            stepNumber: history.length,
        });
    }

    itemDelete = (i) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const items = [...current.items];

        const newItems = [...items.slice(0,i), ...items.slice(i+1,items.length)];

        this.setState({
            history: history.concat([{
                items: newItems,
            }]),
            stepNumber: history.length,
        });
    }

    goToStep = (step) => {
        this.setState({
            stepNumber: step,
        });
    }

    undoStep = () => {
        if (this.state.stepNumber > 0) {
            let newNum = this.state.stepNumber - 1;
            this.setState({
                stepNumber: newNum,
            });
        }
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        return (
        <div className="Editor">
            <EditorHeader 
            addItem={this.addItem}
            undoStep={this.undoStep}
            />
            <section className="Editor-field">
                <ItemsList 
                propItems={current.items} 
                itemUpdatePosition={this.itemUpdatePosition} 
                itemUpdateSize={this.itemUpdateSize} 
                itemDelete={this.itemDelete}
                />
            </section>
        </div>
        );
    }
}

// ========================================

ReactDOM.render(
<Editor />,
document.getElementById('root')
);
  