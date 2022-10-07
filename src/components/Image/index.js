import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

function Image({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            src={fallback || src}
            ref={ref}
            alt={alt}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
