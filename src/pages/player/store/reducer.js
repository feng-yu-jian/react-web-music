import { Map } from 'immutable';
import * as actionType from './actionType';
// 使用immutable管理state

const defaultState = Map({
  playList: [
    {
      "name": "有何不可",
      "id": 167876,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5771,
          "name": "许嵩",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "600902000007916021",
      "fee": 8,
      "v": 49,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 16953,
        "name": "自定义",
        "picUrl": "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
        "tns": [],
        "pic_str": "18590542604286213",
        "pic": 18590542604286212
      },
      "dt": 241840,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9675799,
        "vd": -21099
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5805497,
        "vd": -18400
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3870346,
        "vd": -16900
      },
      "a": null,
      "cd": "1",
      "no": 3,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "mst": 9,
      "cp": 14026,
      "rtype": 0,
      "rurl": null,
      "publishTime": 1231516800000
    }
  ],
  currentSongIndex: 0,
  currentSong: {},
  playSequence: 0, // 0循环播放  1随机播放  2单曲循环
  firstLoad: true,
  lyricList: [],
  currentLyricIndex: 0,
  addSongDetail: {},
  playListCount: 1,
  hotComments: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    case actionType.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList);
    case actionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.index);
    case actionType.CHANGE_PLAY_SEQUENCE:
      return state.set('playSequence', action.sequence);
    case actionType.CHANGE_FIRST_LOAD:
      return state.set('firstLoad', action.isLoad);
    case actionType.CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyric);
    case actionType.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.index);
    case actionType.CHANGE_ADD_SONG_DETAIL:
      return state.set('addSongDetail', action.addSongDetail);
    case actionType.CHANGE_PLAY_LIST_COUNT:
      return state.set('playListCount', action.count);
    case actionType.CHANGE_HOT_COMMENT:
      return state.set('hotComments', action.hotComments);
    default:
      return state;
  }
}

export default reducer;
