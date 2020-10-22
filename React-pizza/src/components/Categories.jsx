import React from 'react';

// class Categories extends React.Component {

//     state = {
//         activeItem: 3,
//     };
//     onSelectItems = index => {
//         this.setState({
//             activeItem: index,
//         });
//     }

//     render() {
//         const { items, onClickItem } = this.props;
//         return (<div>
//             <div className="categories">
//                 <ul>
//                     <li className="active">Все</li>
//                     {
//                         items.map((name, index) => <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => { this.onSelectItems(index) }} key={`${name}_${index}`}>{name}</li>)
//                     }

//                 </ul>
//             </div>
//         </div >);
//     }
// }

function Categories({ items, onClick }) {
    const [activeItem, setActiveItem] = React.useState(null);
    const onSelectItem = (index) => {
        setActiveItem(index);

    }

    return (
        <div>
            <div className="categories">
                <ul>
                    <li
                        className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                    {
                        items && items.map((name, index) =>
                            <li className={
                                activeItem === index ? 'active' : ''}
                                onClick={() => { onSelectItem(index) }}
                                key={`${name}_${index}`}>{name}
                            </li>
                        )
                    }

                </ul>
            </div>
        </div >);
}


export default Categories;