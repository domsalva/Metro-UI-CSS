import {beforeAll, describe, it, expect} from "@olton/easytest";
import fs from "fs";

beforeAll(() => {
    window.METRO_DISABLE_BANNER = true;
    window.METRO_DISABLE_LIB_INFO = true;
    window.eval(fs.readFileSync('./lib/metro.js', 'utf8'))
})

beforeEach(() => {
    document.body.innerHTML = `<div id="activity"></div>`
})

describe(`Activity tests`, () => {
    it(`Create ring activity`, () => {
        const activity = window.Metro.makePlugin("#activity", 'activity', {type: "ring"})[0]
        expect(activity).hasClass('activity-ring')
    })
    it(`Create metro activity`, () => {
        const activity = window.Metro.makePlugin("#activity", 'activity', {type: "metro"})[0]
        expect(activity).hasClass('activity-metro')
    })
    it(`Create square activity`, () => {
        const activity = window.Metro.makePlugin("#activity", 'activity', {type: "square"})[0]
        expect(activity).hasClass('activity-square')
    })
    it(`Create cycle activity`, () => {
        const activity = window.Metro.makePlugin("#activity", 'activity', {type: "cycle"})[0]
        expect(activity).hasClass('activity-cycle')
    })
    it(`Create simple activity`, () => {
        const activity = window.Metro.makePlugin("#activity", 'activity', {type: "simple"})[0]
        expect(activity).hasClass('activity-simple')
    })
    it(`Create atom activity`, () => {
        const activity = window.Metro.makePlugin("#activity", 'activity', {type: "atom"})[0]
        expect(activity).hasClass('activity-atom')
    })
    it(`Create bars activity`, () => {
        const activity = window.Metro.makePlugin("#activity", 'activity', {type: "bars"})[0]
        expect(activity).hasClass('activity-bars')
    })
})