"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = charatersStore;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CHARATERS_STATE = {
  chosenWorld: '',
  wantedName: '',
  racaChosen: 'esgalCreation-input-flex',
  classChosen: 'display-none',
  skillschosen: 'display-none',
  skillschosenCount: 0,
  submitbutton: 'display-none',
  characterCreated: {
    name: '',
    race: '',
    "class": '',
    skills: [],
    status: '',
    titles: [],
    itens: [],
    type: 'player'
  }
};

function charatersStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CHARATERS_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  ///implementar troca de ifs por switch
  switch (action.type) {
    case 'CHANGING_WORLD':
      return _objectSpread({}, state, {
        chosenWorld: action.world
      });

    case 'SEARCHING_NAME':
      return _objectSpread({}, state, {
        wantedName: action.name
      });

    case 'CHOOSING_NAME':
      return _objectSpread({}, state, {
        characterCreated: _objectSpread({}, state.characterCreated, {
          name: action.name
        })
      });

    case 'CHOOSING_RACE':
      return _objectSpread({}, state, {
        characterCreated: _objectSpread({}, state.characterCreated, {
          race: action.name
        }),
        racaChosen: 'display-none',
        classChosen: 'esgalCreation-input-flex'
      });

    case 'CHOOSING_CLASS':
      return _objectSpread({}, state, {
        characterCreated: _objectSpread({}, state.characterCreated, {
          "class": action.value
        }),
        classChosen: 'display-none',
        skillschosen: 'esgalCreation-input-flex'
      });

    case 'CHOOSING_SKILLS':
      switch (state.skillschosenCount) {
        case 0:
          var array = state.characterCreated.skills;
          array.push(action.value);
          return _objectSpread({}, state, {
            characterCreated: _objectSpread({}, state.characterCreated, {
              skills: array
            }),
            skillschosenCount: 1
          });

        case 1:
          var array2 = state.characterCreated.skills;
          array2.push(action.value);
          return _objectSpread({}, state, {
            characterCreated: _objectSpread({}, state.characterCreated, {
              skills: array2
            }),
            skillschosenCount: 2
          });

        case 2:
          var array3 = state.characterCreated.skills;
          array3.push(action.value);
          return _objectSpread({}, state, {
            characterCreated: _objectSpread({}, state.characterCreated, {
              skills: array3
            }),
            skillschosenCount: 3
          });

        case 3:
          var array4 = state.characterCreated.skills;
          array4.push(action.value);
          return _objectSpread({}, state, {
            characterCreated: _objectSpread({}, state.characterCreated, {
              skills: array4
            }),
            skillschosenCount: 4
          });

        case 4:
          var array5 = state.characterCreated.skills;
          array5.push(action.value);
          return _objectSpread({}, state, {
            characterCreated: _objectSpread({}, state.characterCreated, {
              skills: array5
            }),
            skillschosen: 'display-none',
            submitbutton: 'global-button esgalCreation-button-submit'
          });

        default:
          return null;
      }

    default:
      return state;
  }
}