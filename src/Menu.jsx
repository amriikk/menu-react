import React from 'react';

const Menu = ({ items }) => {
    return (
        <div className='section-center'>
            {items.map((menuItem) => {
                const { id, title, img, desc, price } = menuItem;
                return (
                    <article key={id} className='menu-item'>
                        <img src={img} alt={title} className='photo' />
                        <div>
                            <header>
                                <h4></h4>
                                <h4></h4>
                            </header>
                            <p></p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Menu;