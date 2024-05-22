import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../src/hooks/useTelegram";

const Header = () => {
    const {user, ocClose } = useTelegram();

    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;