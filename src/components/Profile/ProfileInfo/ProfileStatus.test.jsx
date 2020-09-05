import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-render";

describe("ProfileStatus component", () => {
    test("status from props should be in the state!)", () => {
        const component = create(<ProfileStatus status="it-incubator"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-incubator")
    });
    test("after creation span with status should be displayed with correct status!)", () => {
        const component = create(<ProfileStatus status="it-incubator"/>);
        const instance = component.getInstance();
        let span=instance.findByType("span")
        expect(span.length).toBe(1);
    })
});
// describe("ProfileStatus component", () => {
//
// });
