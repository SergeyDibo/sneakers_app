import React from "react";
import Index from "../components/Card";


function Favorites({items, onAddToFavorite}) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои закладки</h1>

            </div>

            <div className="d-flex flex-wrap">
                {items
                    .map((item) => (
                        <Index
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            key={item.id}
                            {...item}
                        />
                    ))}</div>
        </div>
    );
}

export default Favorites;