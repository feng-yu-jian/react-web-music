import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import { debounce } from '@/utils/format-utils.js';
import {
  getSearchSongListAction,
  changeFocusStateAction,
} from './store/actionCreator';
import { headerLinks } from '@/common/local-data';
import { getSongDetailAction } from '@/pages/player/store';
import { changeIsVisible } from '@/components/theme-login/store';
import { clearLoginState } from '../../utils/secret-key';

import ThemeLogin from '@/components/theme-login';
import { Dropdown, Input, Menu, Avatar } from 'antd';
import {
  SearchOutlined,
  SettingOutlined,
  HomeOutlined,
  PoweroffOutlined,
  MessageOutlined
} from '@ant-design/icons';
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';

export default memo(function FAppHeader(props) {
  const [isRedirect, setIsRedirect] = useState(false);
  const [value, setValue] = useState('');
  const [recordActive, setRecordActive] = useState(-1);

  const dispatch = useDispatch();
  const { searchSongList, focusState, isLogin, profile } = useSelector((state) => ({
    searchSongList: state.getIn(['themeHeader', 'searchSongList']),
    focusState: state.getIn(['themeHeader', 'focusState']),
    isLogin: state.getIn(['loginState', 'isLogin']),
    profile: state.getIn(['loginState', 'profile']),
  }), shallowEqual);

  const inputRef = useRef();
  // (根据当前焦点状态设置input焦点)
  useEffect(() => {
    // 获取焦点
    if (focusState) inputRef.current.focus();
    // 失去焦点
    else inputRef.current.blur();
  }, [focusState]);

  // Header-Select-Item
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink
          key={item.title}
          to={item.link}
          className="header-item"
          activeClassName="link-active"
        >
          <em>{item.title}</em>
          <i className="icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} key={item.title} className="header-item">
          {item.title}
        </a>
      );
    }
  };

  // debounce()
  const changeInput = debounce((target) => {
    let value = target.value.trim();
    if (value.length < 1) return;
    // 显示下拉框
    dispatch(changeFocusStateAction(true));
    // 发送网络请求
    dispatch(getSearchSongListAction(value));
  }, 400);

  // 点击当前item歌曲项
  const changeCurrentSong = (id, item) => {
    // 放到搜索文本框
    setValue(item.name + '-' + item.artists[0].name);
    //派发action
    dispatch(getSongDetailAction(id));
    // 隐藏下拉框
    dispatch(changeFocusStateAction(false));
    // 播放音乐
    document.getElementById('audio').autoplay = true;
  };

  // 表单回车:跳转到搜索详情
  const handleEnter = useCallback((e) => {
    // 说明当前光标有”高亮当前行“
    if (recordActive >= 0) {
      // 保存value
      setValue(
        searchSongList[recordActive].name +
        '-' +
        searchSongList[recordActive].artists[0].name
      );
    }
    dispatch(changeFocusStateAction(false));
    // 只要在搜索框回车: 都进行跳转
    setIsRedirect(true);
  }, [dispatch, recordActive, searchSongList]);

  // 获取焦点
  const handleFocus = useCallback(() => {
    // 当文本获取焦点时,文本被选中状态
    inputRef.current.select();
    // 更改为获取焦点状态
    dispatch(changeFocusStateAction(true));
    // 修改状态重定向状态
    setIsRedirect(false);
  }, [dispatch]);

  // 监控用户是否按: "上"或"下"键
  const watchKeyboard = useCallback(
    (even) => {
      let activeNumber = recordActive;
      if (even.keyCode === 38) {
        activeNumber--;
        activeNumber =
          activeNumber < 0 ? searchSongList?.length - 1 : activeNumber;
        setRecordActive(activeNumber);
      } else if (even.keyCode === 40) {
        activeNumber++;
        activeNumber =
          activeNumber >= searchSongList?.length ? 0 : activeNumber;
        setRecordActive(activeNumber);
      }
    },
    [recordActive, setRecordActive, searchSongList]
  );


  const profileDwonMenu = () => {
    return (
      isLogin ? (
        <Menu theme='dark'>
          <Menu.Item icon={<HomeOutlined />}>
            我的主页
          </Menu.Item>
          <Menu.Item icon={<MessageOutlined />}>
            我的消息
          </Menu.Item>
          <Menu.Item icon={<SettingOutlined />}>
            个人设置
          </Menu.Item>
          <Menu.Item icon={<PoweroffOutlined />} onClick={() => clearLoginState()}>
            退出登录
          </Menu.Item>
        </Menu>
      ) : ''
    );
  };

  return (
    <HeaderWrapper>
      <div className="content w1100">
        <HeaderLeft>
          <h1>
            <a href="#/" className="logo sprite_01">
              网易云音乐
            </a>
          </h1>
          <div className="header-group">
            {
              headerLinks.map((item, index) => {
                return showSelectItem(item, index);
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div className="search-wrapper">
            <Input
              ref={inputRef}
              className="search "
              placeholder="音乐/视频/电台/用户"
              size="large"
              prefix={<SearchOutlined />}
              onChange={(e) => setIsRedirect(false) || setValue(e.target.value)}
              onInput={({ target }) => changeInput(target)}
              onFocus={handleFocus}
              onPressEnter={(e) => handleEnter(e)}
              value={value}
              onKeyDown={watchKeyboard}
            />
            {
              isRedirect && (
                <Redirect
                  to={{
                    pathname: '/search/single',
                    search: `?song=${value}&type=1`,
                  }}
                />
              )
            }
            <div
              className="down-slider"
              style={{ display: focusState ? 'block' : 'none' }}
            >
              <div className="search-header">
                <span className="discover">搜"歌曲"相关用户&gt;</span>
              </div>

              <div className="content">
                <div className="zuo">
                  <span className="song">单曲</span>
                </div>

                <span className="main">
                  {
                    searchSongList &&
                    searchSongList.map((item, index) => {
                      return (
                        <div
                          className={
                            'item ' + (recordActive === index ? 'active' : '')
                          }
                          key={item.id}
                          onClick={() => changeCurrentSong(item.id, item)}
                        >
                          <span>{item.name}</span>-{item.artists[0].name}
                        </div>
                      );
                    })
                  }
                </span>
              </div>
            </div>
          </div>
          <div className="center">创作者中心</div>
          <Dropdown overlay={profileDwonMenu}>
            <div
              className="login"
              onClick={() => !isLogin && dispatch(changeIsVisible(true))}
            >
              <a
                href="/#"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {isLogin ? <Avatar size={30} src={profile.avatarUrl} /> : '登录'}
              </a>
            </div>
          </Dropdown>
        </HeaderRight>
      </div>
      <ThemeLogin />
    </HeaderWrapper>
  );
});
