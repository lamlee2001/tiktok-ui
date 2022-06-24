import className from 'classnames/bind';
import styles from './Header.module.scss';

const cx = className.bind(styles);

function Sidebar() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Sidebar;
