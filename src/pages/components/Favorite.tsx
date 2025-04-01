import { useFavorite } from "@/contexts/FavoriteContext"

const Favorite = ({ id }: { id: string }) => {
    const { favorites, toggleFavorite, isFavorite } = useFavorite();
    const isFav = isFavorite(id);

    return (
        <section className="favorite-box">
            <span className="cursor-pointer" onClick={() => toggleFavorite(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                    <path fill="currentColor" d={isFav 
                        ? "M8 1.314C12.438-3.248 23.534 4.735 8 15C-7.534 4.736 3.562-3.248 8 1.314" 
                        : "m8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385c.92 1.815 2.834 3.989 6.286 6.357c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                    } />
                </svg>
            </span>
        </section>
    )
}

export default Favorite
