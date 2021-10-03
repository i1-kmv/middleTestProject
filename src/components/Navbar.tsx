import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from 'react-router-dom'
import {RouteNames} from "../roures";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
    const router = useHistory()
    const isAuth = useTypedSelector(state => state.auth.isAuth)
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth
                        ?
                        <>
                            <div style={{color: 'white'}}>
                                MiddleTest
                            </div>
                            <Menu theme="dark" selectable={false} mode="horizontal">
                                <Menu.Item
                                    key={1}
                                    onClick={() => console.log('выйти')}
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