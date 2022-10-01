import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, items }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem data={item} key={index} />);
    };

    return (
        <Tippy
            delay={[0, 800]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper   ')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
