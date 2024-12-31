import { useEffect, useState, useCallback } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(value);

    useEffect(() => {
        setCounter(value);
    }, [value]);

    const increaseBy = useCallback((increment: number) => {
        const newValue = Math.max(counter + increment, 0);
        setCounter(newValue);
        if (onChange) {
            onChange({ count: newValue, product });
        }
    }, [counter, onChange, product]);

    return {
        counter,
        increaseBy
    };
};