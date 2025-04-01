import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type FavoriteContextType = {
    favorites: string[];
    isFavorite: (itemId: string) => boolean;
    toggleFavorite: (itemId: string) => void;
    addFavorite: (itemId: string) => void;
    removeFavorite: (itemId: string) => void;
    loading: boolean;
};

export const FavoriteContext = createContext<FavoriteContextType | undefined >(undefined)

export const useFavorite = () => {
    const context = useContext(FavoriteContext)
    if(!context) {
        throw new Error("useFavorite must be used within a Provider");
    }
    return context
}

export const FavoriteProvider = ({children}:{children:ReactNode}) => {
    const [favorites, setFavorites] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const isFavorite = (itemId: string) => favorites.includes(itemId);
    const addFavorite = (itemId: string) => {
        setFavorites((prev) => {
            const newFavorites = [...prev, itemId];
            localStorage.setItem("favorites", JSON.stringify(newFavorites)); 
            return newFavorites;
        });
    };
    const removeFavorite = (itemId: string) => {
        setFavorites((prev) => {
            const newFavorites = prev.filter((id) => id !== itemId);
            localStorage.setItem("favorites", JSON.stringify(newFavorites)); 
            return newFavorites;
        });
    };

    const toggleFavorite = (itemId: string) => {
        if (isFavorite(itemId)) {
          removeFavorite(itemId);
        } else {
          addFavorite(itemId);
        }
    };

    return (
        <FavoriteContext.Provider
          value={{ favorites, isFavorite, toggleFavorite, addFavorite, removeFavorite, loading }}
        >
          {children}
        </FavoriteContext.Provider>
    );
}