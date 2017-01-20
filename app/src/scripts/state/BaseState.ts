import {State} from "dijon/core";
import {Application} from 'dijon/application';
import RHGame from '../RHGame';

export default class BaseState extends State {

    public get game(): RHGame {
        return<RHGame>Application.getInstance().game;
    }
}