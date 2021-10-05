import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from 'react-router-dom'
import {RouteNames} from "../roures";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";
import {useActions} from "../hooks/UseActions";

const Navbar: FC = () => {
    const dispatch = useDispatch()
    const router = useHistory()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth
                        ?
                        <>
                            <div style={{color: 'white'}}>
                                {user.username}
                            </div>
                            <Menu theme="dark" selectable={false} mode="horizontal">
                                <Menu.Item
                                    key={1}
                                    onClick={logout}
                                >
                                    Выйти
                                </Menu.Item>
                            </Menu>
                        </>
                        :
                        <>
                            <Menu theme="dark" selectable={false}>
                                <Menu.Item
                                    key={1}
                                    onClick={() => router.push(RouteNames.LOGIN)}
                                >
                                    Логин
                                </Menu.Item>
                            </Menu>
                        </>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;